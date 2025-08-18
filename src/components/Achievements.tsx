import { motion } from 'framer-motion';
import { Section } from './Section';

const achievements = [
  'global elite and faceit level 8 in csgo',
  'previously ranked top 100 in minemen club, minecraft server.',
];

export const Achievements = () => {
  return (
    <Section id="personal achievements" title="personal achievements">
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-1 h-1 bg-text-muted rounded-full mt-3 flex-shrink-0" />
            <p className="text-text-secondary lowercase">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};