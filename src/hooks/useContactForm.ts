import { useState } from 'react';
import { toast } from 'sonner';
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact';
import { sendEmail } from '@/lib/emailjs';

interface FormState {
  values: ContactFormData;
  errors: Partial<Record<keyof ContactFormData, string>>;
  touched: Partial<Record<keyof ContactFormData, boolean>>;
}

const initialValues: ContactFormData = {
  name: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
};

export const useContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
    values: initialValues,
    errors: {},
    touched: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: keyof ContactFormData, value: string) => {
    try {
      const fieldSchema = contactFormSchema.pick({ [name]: true });
      fieldSchema.parse({ [name]: value });
      return '';
    } catch (error: any) {
      if (error.errors?.[0]?.message) {
        return error.errors[0].message;
      }
      return 'Invalid input';
    }
  };

  const handleChange = (name: keyof ContactFormData, value: string) => {
    setFormState(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value },
      touched: { ...prev.touched, [name]: true },
      errors: { ...prev.errors, [name]: validateField(name, value) },
    }));
  };

  const handleBlur = (name: keyof ContactFormData) => {
    setFormState(prev => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
      errors: {
        ...prev.errors,
        [name]: validateField(name, prev.values[name]),
      },
    }));
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(formState.values);
      return true;
    } catch (error: any) {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      const touched: Partial<Record<keyof ContactFormData, boolean>> = {};
      
      error.errors.forEach((err: any) => {
        if (err.path[0]) {
          const field = err.path[0] as keyof ContactFormData;
          errors[field] = err.message;
          touched[field] = true;
        }
      });

      setFormState(prev => ({
        ...prev,
        errors,
        touched: { ...prev.touched, ...touched },
      }));
      
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    const promise = sendEmail(formState.values);

    toast.promise(promise, {
      loading: 'Sending message...',
      success: () => {
        setIsSubmitted(true);
        setFormState({
          values: initialValues,
          errors: {},
          touched: {},
        });
        return 'Message sent successfully!';
      },
      error: 'Failed to send message. Please try again.',
    });

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
    });
    setIsSubmitted(false);
  };

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};