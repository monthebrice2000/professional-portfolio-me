import { motion } from 'framer-motion';
import React from 'react';

function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <a href="mailto:monthedjeumoubrice2000@gmail.com" className="email-link">
        monthedjeumoubrice2000@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
