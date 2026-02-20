
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Full Stack Developer', 'React Specialist', 'Problem Solver', 'Open Source Enthusiast'];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  const handleTyping = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    if (isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setTypingSpeed(50);
    } else {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(200);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6 uppercase tracking-wider">
              Available for New Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Hi, I'm <span className="text-primary-500">Riyan Dev</span> <br />
              <span className="inline-block h-16 md:h-24">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Crafting scalable full-stack applications with modern technologies.
              I specialize in building robust backends and elegant frontends that deliver
              exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 transition-all flex items-center group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center group"
              >
                Let's Talk
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-bold rounded-xl hover:bg-primary-200 dark:hover:bg-primary-900/40 transition-all flex items-center group text-sm"
              >
                Download CV
                <Download className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Connect with me:</span>
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={22} />, href: "https://github.com/riyanramteke17" },
                  { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/riyan-dev/" },
                  { icon: <Mail size={22} />, href: "mailto:riyanramteke17@gmail.com" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Scrolling Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-transparent rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
