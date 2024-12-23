import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_omr4mih';
const EMAILJS_TEMPLATE_ID = 'template_7qzghsq'; // Use your template ID
const EMAILJS_PUBLIC_KEY = 'xBV255BXtHyojBxWP';

interface EmailData {
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const templateParams = {
      name: data.name,
      email: data.email,
      organization: data.organization || 'Not provided',
      subject: data.subject,
      message: data.message,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    return response;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};