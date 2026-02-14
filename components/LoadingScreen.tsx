
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-24 h-24 mb-8"
      >
        <div className="absolute inset-0 rounded-full border-4 border-primary-500/20"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-t-primary-500"
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-primary-500 font-bold text-2xl">A</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white font-mono tracking-widest text-sm"
      >
        LOADING_EXPERIENCE...
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
