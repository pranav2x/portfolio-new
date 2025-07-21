import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/pranav2x', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pranav-rapelli-0161312a4/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/pranav.2x/', label: 'Instagram' },
];

export const Header = () => {
  return (
    <header className="mb-10 lg:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 lowercase">
          pranav
        </h1>
        
        <div className="flex items-center gap-6 mb-6">
          <motion.a
            href="mailto:rapellipranav1@gmail.com"
            className="text-text-secondary hover:text-primary transition-colors duration-200 lowercase"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            rapellipranav1@gmail.com
          </motion.a>
        </div>
        
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};