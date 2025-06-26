import React from 'react';
import { DollarSign } from 'lucide-react';

const Footer = ({ onCalculatorClick }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Company Logo"
                className="w-20 h-20 rounded-full shadow object-cover bg-white"
              />
              <span className="text-xl font-bold">Loan Karenge</span>
            </div>
            <p className="text-gray-400">
              Your trusted financial partner for all loan requirements. Quick, reliable, and customer-focused service.
            </p>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li>
                <button 
                  onClick={onCalculatorClick}
                  className="hover:text-white transition-colors text-left"
                >
                  EMI Calculator
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Loan Types</span>
            <ul className="space-y-2 text-gray-400">
              <li>Personal Loan</li>
              <li>Home Loan</li>
              <li>Business Loan</li>
              <li>Education Loan</li>
            </ul>
          </div>
          
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-2 text-gray-400">
              <p>First Floor Plot no 22, Shyam Nagar</p>
              <p>Jodhpur 342001</p>
              <p>Office No -33, Swarndeep Apartment, High Court Colony, Ratanada, Jodhpur 342001</p>
              <p>+91 7737910090</p>
              <p>info@loankarenge.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Loan Karenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;