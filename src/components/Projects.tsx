import { motion } from 'framer-motion';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'portfolio v3',
    href: '#',
    description: 'clean, minimal portfolio built with react and framer motion'
  },
  {
    name: 'task manager app',
    href: '#',
    description: 'productivity app with drag & drop, built for my school'
  },
  {
    name: 'weather dashboard',
    href: '#',
    description: 'beautiful weather app with animated backgrounds'
  },
  {
    name: 'music player',
    href: '#',
    description: 'spotify-inspired interface with playlist management'
  }
];

export const Projects = () => {
  return (
    <Section id="projects" title="projects">
      <div className="space-y-8">
        {projects.map((project, index) => (
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
                href={project.href}
                className="text-primary font-medium hover:underline underline-offset-4 decoration-1 transition-all duration-200 lowercase flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                {project.name}
                <ArrowUpRight 
                  size={14} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                />
              </motion.a>
            </div>
            <p className="text-text-secondary lowercase">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};