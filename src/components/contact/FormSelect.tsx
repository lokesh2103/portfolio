import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  touched?: boolean;
  options: { value: string; label: string; }[];
}

export const FormSelect = ({ label, error, touched, options, ...props }: FormSelectProps) => {
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
        <select
          {...props}
          value={props.value || ""}
          className={`
            w-full px-4 py-3 bg-[#0d1117] border rounded-lg appearance-none
            focus:outline-none transition-colors
            ${showError 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-[#30363d] focus:border-primary'
            }
            text-[#c9d1d9]
          `}
        >
          <option value="" disabled>Select a subject</option>
          {options.map(option => (
            <option 
              key={option.value} 
              value={option.value}
              className="bg-[#0d1117]"
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom arrow icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg 
            className="w-4 h-4 text-[#8b949e]"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>

        {showError && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-red-500"
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