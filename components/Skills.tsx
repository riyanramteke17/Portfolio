
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, getIcon } from '../constants';
import { SectionProps } from '../types';

const Skills: React.FC<SectionProps> = ({ id }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id={id} className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical Toolbelt
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            I've spent years honing my skills across the entire stack. From crafting pixel-perfect 
            interfaces to architecting high-performance backends.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-500">
                  {getIcon(skill.icon)}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase">{skill.category}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{skill.name}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Proficiency</span>
                  <span className="text-primary-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
