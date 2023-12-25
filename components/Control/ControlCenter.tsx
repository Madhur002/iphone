// components/ControlCenter.js
import { motion } from 'framer-motion';

const ControlCenter = ({ isOpen, onClose }: any) => {
  const variants = {
    open: { y: 0 },
    closed: { y: '100%' },
  };

  return (
    <motion.div
      className="control-center"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      {/* Content of the control center */}
      {/* Add your sections and functionalities here */}
      
      {/* Close button */}
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

export default ControlCenter;
