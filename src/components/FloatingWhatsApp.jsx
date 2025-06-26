import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = ({ name, number }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi ${name}, I'm interested in loan services from Loan Karenge. Please provide more information.`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 w-full"
    >
      <MessageCircle className="w-4 h-4" />
      Chat with {name}
    </Button>
  );
};

const FloatingWhatsApp = () => {
  return (
    <div className="whatsapp-float">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="space-y-3"
      >
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-800 mb-2">Need Help? Chat with us!</p>
          <div className="space-y-2">
            <WhatsAppButton name="Akshay Kumar" number="917737910090" />
            <WhatsAppButton name="Sunil Kumar" number="919024724246" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingWhatsApp;