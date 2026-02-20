
import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';
import { User, Code, Heart, Zap } from 'lucide-react';

const About: React.FC<SectionProps> = ({ id }) => {
  const features = [
    { icon: <Code className="text-primary-500" />, title: 'Clean Code', text: 'I write maintainable, scalable, and well-documented code following best practices.' },
    { icon: <Zap className="text-yellow-500" />, title: 'Performance', text: 'Speed is a feature. I optimize every byte to ensure lightning-fast interactions.' },
    { icon: <User className="text-blue-500" />, title: 'User Centric', text: 'User experience is at the heart of everything I build.' },
    { icon: <Heart className="text-red-500" />, title: 'Passion', text: 'I love what I do, and it shows in the quality of my work.' },
  ];

  return (
    <section id={id} className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://picsum.photos/seed/dev/600/700"
                alt="Developer Working"
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 p-6 glass-card rounded-xl text-white">
                <p className="text-2xl font-bold">Fresher</p>
                <p className="text-xs opacity-80 uppercase tracking-tighter">Ready to Contribute</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
              <span className="w-12 h-1 bg-primary-500 inline-block mr-4 rounded-full"></span>
              About Me
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Hi, I’m a self-employed and motivated Full Stack Developer (Fresher) with hands-on experience in building real-world and academic projects. During my time at NavGurukul, I developed projects like Long Leave Management System and Smart Attendance System to solve practical problems.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I have also built an e-commerce furniture website, multiple web pages, and my own portfolio website.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              I am passionate about coding, continuously improving my technical and problem-solving skills, and delivering clean and efficient solutions. I follow a disciplined work approach and always complete tasks on time.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium text-primary-600 dark:text-primary-400">
              Currently, I am seeking an internship opportunity where I can apply my skills in a professional environment and contribute to real-world projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-500">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
