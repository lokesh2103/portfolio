import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { FormTextarea } from './FormTextarea';
import { SubmissionSuccess } from './SubmissionSuccess';

interface ContactFormProps {
  inView: boolean;
}

const subjectOptions = [
  { value: 'collaboration', label: 'Project Collaboration' },
  { value: 'opportunity', label: 'Professional Opportunity' },
  { value: 'general', label: 'General Inquiry' },
];

export const ContactForm = ({ inView }: ContactFormProps) => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useContactForm();

  if (isSubmitted) {
    return <SubmissionSuccess onReset={resetForm} />;
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <FormInput
          id="name"
          label="Name"
          placeholder="Your name"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          error={errors.name}
          touched={touched.name}
        />
        <FormInput
          id="email"
          type="email"
          label="Email"
          placeholder="Your email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          touched={touched.email}
        />
      </div>

      <FormInput
        id="organization"
        label="Organization"
        placeholder="Where are you from? (Optional)"
        value={values.organization}
        onChange={(e) => handleChange('organization', e.target.value)}
        onBlur={() => handleBlur('organization')}
        error={errors.organization}
        touched={touched.organization}
      />

      <FormSelect
        id="subject"
        label="Subject"
        options={subjectOptions}
        value={values.subject}
        onChange={(e) => handleChange('subject', e.target.value)}
        onBlur={() => handleBlur('subject')}
        error={errors.subject}
        touched={touched.subject}
      />

      <FormTextarea
        id="message"
        label="Message"
        rows={6}
        placeholder="Share your thoughts or proposal..."
        value={values.message}
        onChange={(e) => handleChange('message', e.target.value)}
        onBlur={() => handleBlur('message')}
        error={errors.message}
        touched={touched.message}
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
};