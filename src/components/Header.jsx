import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ onApplyLoanClick }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Loan Karenge</h1>
              <p className="text-sm text-gray-600">Your Financial Partner</p>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <Button onClick={onApplyLoanClick} className="gradient-bg text-white">Get Started</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;