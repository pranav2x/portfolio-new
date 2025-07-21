import { motion } from 'framer-motion';
import { Section } from './Section';

const achievements = [
  'won regional hackathon for best ui/ux design',
  'ranked top 10 in state coding competition',
  'built 15+ projects in the past year',
  'mentored 5+ junior developers at school',
  'featured on local tech blog for youth achievements'
];

export const Achievements = () => {
  return (
    <Section id="achievements" title="achievements">
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