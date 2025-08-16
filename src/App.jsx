import React from 'react'
import { motion } from 'framer-motion'
import { NeonText } from './components/NeonText'

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NeonText text="hello mate" className="text-6xl font-cyberpunk" />
      </motion.div>
    </div>
  )
}

export default App