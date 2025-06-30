import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Ready to start your loan journey? Contact us today!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Address</h3>
                <p className="text-gray-600">
                  First Floor Plot no 22<br />
                  Shyam Nagar<br />
                  Jodhpur 342001
                </p>
                <p className="text-gray-600 mt-4">
                  Office No -33, Swarndeep Apartment,<br />
                  High Court Colony, Ratanada,<br />
                  Jodhpur 342001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                <p className="text-gray-600">
                  +91 9024724246 (Sunil Kumar)<br />
                  +91 7737910090 (Akshay Kumar)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@loankarenge.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact Form</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Loan Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select loan type</option>
                  <option>Personal Loan</option>
                  <option>Home Loan</option>
                  <option>Business Loan</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full gradient-bg text-white py-3"
                onClick={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Message Sent! 📧",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
                  });
                }}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;