import React from 'react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 text-center bg-gray-100 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Fast Shipping</h4>
            <p className="text-gray-600">Get your products delivered quickly and safely.</p>
          </motion.div>

          <motion.div
            className="p-6 text-center bg-gray-100 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Top Quality</h4>
            <p className="text-gray-600">Our products meet the highest quality standards.</p>
          </motion.div>

          <motion.div
            className="p-6 text-center bg-gray-100 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Great Customer Support</h4>
            <p className="text-gray-600">We're here to help you with any questions you may have.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
