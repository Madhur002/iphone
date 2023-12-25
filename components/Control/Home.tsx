"use client"
import { motion } from 'framer-motion';
import { useState } from 'react';

// This component represents a single control in the control center
function Control({ name }:any) {
  return <div>{name}</div>;
}

// This component represents the control center itself
function ControlCenter({ isOpen, onClose }:any) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: isOpen ? '0%' : '100%' }}
      transition={{ duration: 0.5 }}
      style={{ position: 'fixed', bottom: 0, width: '100%', background: 'white' }}
    >
      <button onClick={onClose}>Close</button>
      <Control name="Control 1" />
      <Control name="Control 2" />
      {/* Add more controls here */}
    </motion.div>
  );
}

// This component represents the entire app
export default function App() {
  const [isControlCenterOpen, setControlCenterOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setControlCenterOpen(true)}>Open Control Center</button>
      <ControlCenter isOpen={isControlCenterOpen} onClose={() => setControlCenterOpen(false)} />
    </div>
  );
}
