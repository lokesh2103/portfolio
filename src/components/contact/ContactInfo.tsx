import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';

interface ContactInfoProps {
  inView: boolean;
}

export const ContactInfo = ({ inView }: ContactInfoProps) => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'slokesh2103@gmail.com',
      href: 'mailto:slokesh2103@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Fort Collins, CO',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/lokesh-sahukar',
      description: 'Connect with me professionally',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/lokesh2103',
      description: 'Check out my code',
    },
    {
      icon: FileText,
      label: 'Resume',
      href: 'https://bit.ly/lokesh_sahukar_resume',
      description: 'View my full background',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-xl font-semibold text-[#c9d1d9] mb-6"
        >
          Contact Details
        </motion.h3>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 bg-[#0d1117] rounded-lg">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-[#8b949e]">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-[#c9d1d9] hover:text-primary transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-[#c9d1d9]">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xl font-semibold text-[#c9d1d9] mb-6"
        >
          Professional Links
        </motion.h3>
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-3 rounded-lg hover:bg-[#0d1117] transition-colors"
            >
              <div className="p-2 bg-[#0d1117] rounded-lg group-hover:text-primary transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[#c9d1d9] group-hover:text-primary transition-colors">
                  {link.label}
                </p>
                <p className="text-sm text-[#8b949e]">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
