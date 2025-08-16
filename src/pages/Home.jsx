import React from 'react';
import { motion } from 'framer-motion';
import NeonText from '../components/NeonText';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl mb-6">
          <NeonText>Hello Mate</NeonText>
        </h1>
        <p className="text-lg mb-4 text-cyan-400 animate-pulse">
          Neon is a noble gas that creates that iconic bright glow you see in cyberpunk aesthetics. When electricity passes through neon-filled tubes, it produces that characteristic bright reddish-orange light that's become synonymous with futuristic cityscapes and retro-futuristic design.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;