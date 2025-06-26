import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Indian Banks Logo Slider Section */}
        <div className="mb-12">
          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="inline-flex gap-8 items-center animate-scroll-x">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/State_Bank_of_India_logo.svg" alt="SBI" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/HDFC_Bank_Logo.svg" alt="HDFC" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/ICICI_Bank_Logo.svg" alt="ICICI" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Axis_Bank_logo.svg" alt="Axis" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Kotak_Mahindra_Bank_logo.svg" alt="Kotak" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Bank_of_Baroda_logo.svg" alt="Bank of Baroda" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/IDFC_FIRST_Bank_Logo.svg" alt="IDFC First" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/IndusInd_Bank_logo.svg" alt="IndusInd" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Yes_Bank_logo.svg" alt="Yes Bank" className="h-12 w-auto bg-white rounded shadow" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Punjab_National_Bank_Logo.svg" alt="PNB" className="h-12 w-auto bg-white rounded shadow" />
            </div>
          </div>
        </div>

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
  );
};

export default TestimonialsSection;