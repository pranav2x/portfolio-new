import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-background"
    >
      <div className="max-w-4xl mx-auto px-6 py-6 lg:py-10">
        {children}
      </div>
    </motion.div>
  );
};