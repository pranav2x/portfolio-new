import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-6 lg:mb-8 ${className}`}
    >
      {title && (
        <h2 className="text-lg font-bold text-primary mb-4 lowercase">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
};