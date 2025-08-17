import { motion } from 'framer-motion';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'build.ai',
    href: 'https://build.ai',
    description: 'Mainly worked as an operations intern, assisted across multiple departments, including handling product shipping and logistics, managing the company’s twitter account, and supporting day-to-day operational tasks.'
  },

];

export const Experience = () => {
  return (
    <Section id="experience" title="experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="flex items-start gap-2 mb-2">
              <motion.a
                href={exp.href}
                className="text-primary font-medium hover:underline underline-offset-4 decoration-1 transition-all duration-200 lowercase flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                {exp.company}
                <ArrowUpRight 
                  size={14} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                />
              </motion.a>
            </div>
            <p className="text-text-secondary mb-2 lowercase">
              {exp.description}
            </p>

          </motion.div>
        ))}
      </div>
    </Section>
  );
};