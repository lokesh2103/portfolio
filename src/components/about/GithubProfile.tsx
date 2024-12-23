import { motion } from 'framer-motion';
import { MapPin, Building, Mail } from 'lucide-react';

interface GithubProfileProps {
  inView: boolean;
}

export const GithubProfile = ({ inView }: GithubProfileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="bg-[#161b22] rounded-lg p-6 border border-[#30363d]"
    >
      <div className="mb-4">
        {/* Profile Image Container */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background:
                'radial-gradient(circle at center, #58a6ff 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />

          {/* Image wrapper */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{
              border: '4px solid rgba(88, 166, 255, 0.2)',
              boxShadow: '0 0 20px rgba(88, 166, 255, 0.15)',
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/59276035"
              alt="Lokesh Sahukar"
              style={{ transition: 'transform 0.5s ease-in-out' }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.25)')
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#c9d1d9] mb-1 text-center">
          Lokesh Sahukar
        </h3>
        <p className="text-[#8b949e] text-center">Frontend Developer</p>
      </div>

      <div className="space-y-2 text-[#8b949e] mb-6">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4" />
          <span>Available for Opportunities</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Fort Collins, CO</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:slokesh2103@gmail.com"
            className="text-[#58a6ff] hover:underline"
          >
            slokesh2103@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-[#30363d] pt-4">
        <h4 className="text-[#c9d1d9] font-semibold mb-4">About</h4>
        <div className="space-y-4 text-[#8b949e] text-sm leading-relaxed">
          <p>
            Passionate Frontend Developer with 4+ years of experience crafting
            modern web applications. Specialized in React.js, TypeScript, and
            modern frontend architectures.
          </p>

          <p>
            My expertise lies in building scalable applications with a focus on
            performance optimization, responsive design, and exceptional user
            experiences. I have a strong foundation in both frontend and backend
            technologies, enabling me to deliver comprehensive solutions.
          </p>

          <div>
            <h5 className="text-[#c9d1d9] font-medium mb-2">
              Areas of Expertise:
            </h5>
            <ul className="space-y-1 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Modern Frontend Architectures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Performance Optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Micro-frontend Implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Responsive UI/UX Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <span>Test-Driven Development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
