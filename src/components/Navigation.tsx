import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'achievements', href: '#achievements' }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-background/80 backdrop-blur-sm border border-subtle rounded-full px-6 py-3 hidden lg:block"
    >
      <ul className="flex items-center gap-6">
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <motion.button
              onClick={() => scrollToSection(href)}
              className={`text-sm lowercase transition-colors duration-200 ${
                activeSection === href.slice(1) 
                  ? 'text-primary font-medium' 
                  : 'text-text-muted hover:text-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};