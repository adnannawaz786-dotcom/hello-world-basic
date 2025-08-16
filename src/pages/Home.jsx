import React from 'react';
import { NeonText } from '../components/NeonText';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <NeonText className="text-5xl mb-6">Cyberpunk World</NeonText>
      <NeonText 
        className="text-xl text-center max-w-2xl" 
        color="#ff00ff"
      >
        Enter a world of neon-lit streets and digital dreams. Where technology meets
        style in a symphony of electric brilliance. Welcome to the future.
      </NeonText>
    </div>
  );
}