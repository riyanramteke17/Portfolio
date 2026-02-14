
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { SectionProps } from '../types';

const Projects: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">
              A collection of projects that showcase my technical expertise and 
              commitment to creating high-quality web applications.
            </p>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#" 
            className="px-6 py-3 rounded-xl border border-primary-500 text-primary-500 font-bold hover:bg-primary-500 hover:text-white transition-all"
          >
            View All Projects
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-video bg-slate-200 dark:bg-slate-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex space-x-4">
                    <a href={project.githubUrl} className="p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-md text-white transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.liveUrl} className="p-3 bg-primary-500 hover:bg-primary-600 rounded-full text-white transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <a href={project.liveUrl} className="inline-flex items-center text-primary-500 font-bold group/link">
                  Learn More <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal Helper for arrow
const ArrowRight = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

export default Projects;
