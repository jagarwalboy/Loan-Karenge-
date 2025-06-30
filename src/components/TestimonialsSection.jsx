import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import WeWorkForSlider from './WeWorkForSlider';

const TestimonialCard = ({ name, rating, comment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{comment}"</p>
      <p className="font-semibold text-gray-800">- {name}</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <>
      <WeWorkForSlider />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real stories from satisfied customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Priya Sharma"
              rating={5}
              comment="Got my home loan approved in just 2 days! The team was very supportive and the process was smooth."
            />
            <TestimonialCard
              name="Rajesh Kumar"
              rating={5}
              comment="Excellent service for personal loan. Quick approval and competitive rates. Highly recommended!"
            />
            <TestimonialCard
              name="Anita Patel"
              rating={5}
              comment="Professional team and transparent process. They helped me get the best deal for my business loan."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;