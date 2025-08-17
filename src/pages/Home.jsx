import React from 'react';
import NeonText from '../components/NeonText';

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <NeonText>Welcome to Cyberpunk World</NeonText>
      <div className="text-[#ff00ff] mt-4 text-2xl font-cyber animate-pulse">
        hello adnan
      </div>
    </div>
  );
};

export default Home;