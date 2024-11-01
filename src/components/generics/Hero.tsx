import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-16">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-5xl font-bold text-gray-800 mb-6"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          transition={{ duration: 0.5 }}
        >
          Welcome to Our Store
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our exclusive collection of products tailored just for you!
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/products"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
