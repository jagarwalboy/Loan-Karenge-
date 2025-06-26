import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';
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

const TeamSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600">Experienced professionals dedicated to your financial success</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
              <img  alt="Akshay Kumar - Senior Loan Advisor icon" class="w-20 h-20" src="https://images.unsplash.com/flagged/photo-1608632359963-5828fa3b4141" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Akshay Kumar</h3>
            <p className="text-gray-600 mb-4">Senior Loan Advisor</p>
            <p className="text-gray-700 mb-6">10+ years of experience in financial services and loan processing</p>
            <WhatsAppButton name="Akshay Kumar" number="917737910090" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center text-white">
              <img  alt="Sunil Jatav - Financial Consultant icon" class="w-20 h-20" src="https://images.unsplash.com/flagged/photo-1608632359963-5828fa3b4141" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sunil Jatav</h3>
            <p className="text-gray-600 mb-4">Financial Consultant</p>
            <p className="text-gray-700 mb-6">Expert in home loans and investment planning with 8+ years experience</p>
            <WhatsAppButton name="Sunil Jatav" number="919024724246" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;