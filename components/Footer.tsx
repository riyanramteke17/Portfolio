
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent">
              DevPortfolio
            </span>
            <p className="text-slate-500 dark:text-slate-500 mt-2 text-sm">
              Built with Passion, React, and Tailwind CSS.
            </p>
          </div>

          <div className="flex space-x-8 text-sm font-medium text-slate-500 dark:text-slate-500">
            <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 uppercase tracking-widest">
          <p>© {currentYear} Alex Dev. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
