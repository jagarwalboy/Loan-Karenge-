import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calculator, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = ({ onApplyLoanClick, onCalculatorClick }) => {
  return (
    <section className="hero-pattern py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Get Your <span className="gradient-text">Dream Loan</span> Today!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Quick approval, competitive rates, and hassle-free process. Whether it's a personal loan or home loan, we've got you covered with the best financial solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={onApplyLoanClick} className="gradient-bg text-white text-lg px-8 py-4 pulse-glow">
                Apply for Loan <Zap className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-2"
                onClick={onCalculatorClick}
              >
                <Calculator className="w-5 h-5 mr-2" />
                EMI Calculator
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text">24hrs</div>
                <div className="text-gray-600">Quick Approval</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5.9%</div>
                <div className="text-gray-600">Interest Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">₹50L</div>
                <div className="text-gray-600">Max Amount</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img  
                alt="Happy family with approved loan documents"
                className="w-full h-auto rounded-2xl shadow-2xl"
               src="https://images.unsplash.com/photo-1679335026558-3e71768f0af9" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <div className="font-semibold">Instant Approval</div>
                  <div className="text-sm text-gray-600">Get approved in minutes</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;