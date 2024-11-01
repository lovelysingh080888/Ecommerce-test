import React from "react";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Great products and fast shipping!" },
    { id: 2, name: "Jane Smith", text: "Absolutely love my new shoes!" },
    { id: 3, name: "Mark Johnson", text: "Excellent customer service!" },
  ];

  // Animation variants for testimonials
  const testimonialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105"
            initial="hidden"
            whileInView="visible"
            variants={testimonialVariants}
            transition={{ duration: 0.5, delay: 0.1 * testimonial.id }} // Staggered effect
          >
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <p className="font-semibold text-gray-800">{testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
