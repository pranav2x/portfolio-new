import { motion } from 'framer-motion';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'tech startup xyz',
    href: '#',
    description: 'building the future of something really cool',
    tools: 'react, typescript, node.js'
  },
  {
    company: 'freelance projects',
    href: '#',
    description: 'helping local businesses with web development',
    tools: 'next.js, tailwind, postgresql'
  },
  {
    company: 'open source',
    href: '#',
    description: 'contributing to various react libraries',
    tools: 'javascript, github, community'
  }
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
            <p className="text-text-muted text-sm lowercase">
              {exp.tools}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};