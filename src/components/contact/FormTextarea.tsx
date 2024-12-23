import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

export const FormTextarea = ({ label, error, touched, ...props }: FormTextareaProps) => {
  const showError = error && touched;

  return (
    <div>
      <label 
        htmlFor={props.id} 
        className="block text-sm font-medium text-[#8b949e] mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <textarea
          {...props}
          className={`
            w-full px-4 py-3 bg-[#0d1117] border rounded-lg 
            focus:outline-none transition-colors resize-none
            ${showError 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-[#30363d] focus:border-primary'
            }
            text-[#c9d1d9] placeholder-[#8b949e]
          `}
        />
        {showError && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-3 top-3 text-red-500"
          >
            <AlertCircle className="w-5 h-5" />
          </motion.div>
        )}
      </div>
      {showError && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};