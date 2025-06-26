import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Home, DollarSign, CheckCircle, ArrowRight, Car, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoanCard = ({ icon: Icon, title, description, features, color, onApplyLoanClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="loan-card p-8 rounded-2xl flex flex-col"
    >
      <div className={`feature-icon ${color} mx-auto`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center flex-grow">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        onClick={() => onApplyLoanClick(title)}
        className="w-full gradient-bg text-white hover:opacity-90 transition-all duration-300 mt-auto"
      >
        Apply Now <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  );
};

const ServicesSection = ({ onApplyLoanClick }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Loan Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your financial needs
          </p>
        </motion.div>

        {/* Bank slider section */}
        <div className="mb-12">
          {/* <h3 className="text-2xl font-semibold text-gray-700 mb-4">We Work For</h3> */}
          <div className="overflow-x-auto whitespace-nowrap py-2">
            <div className="inline-flex gap-8 items-center animate-scroll-x min-h-[48px]">
              {/* No bank images available */}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <LoanCard
            icon={CreditCard}
            title="Personal Loan"
            description="Quick personal loans for all your immediate financial needs."
            features={[
              "Loan amount up to ₹1 Crore",
              "Interest rates from 10.5%",
              "Tenure up to 8 years",
              "Minimal documentation",
              "Quick disbursal in 24 hours"
            ]}
            color="bg-gradient-to-br from-blue-500 to-purple-600"
            onApplyLoanClick={onApplyLoanClick}
          />
          
          <LoanCard
            icon={Home}
            title="Home Loan"
            description="Make your dream home a reality with our affordable home loans."
            features={[
              "Loan amount up to ₹5 Crores",
              "Interest rates from 8.5%",
              "Tenure up to 30 years",
              "Special offers available",
              "Free property valuation"
            ]}
            color="bg-gradient-to-br from-green-500 to-teal-600"
            onApplyLoanClick={onApplyLoanClick}
          />
          
          <LoanCard
            icon={DollarSign}
            title="Business Loan"
            description="Fuel your business growth with our flexible business loans."
            features={[
              "Loan amount up to ₹1 Crore",
              "Interest rates from 14%",
              "Tenure up to 4 years",
              "Collateral-free options",
              "Quick approval process"
            ]}
            color="bg-gradient-to-br from-orange-500 to-red-600"
            onApplyLoanClick={onApplyLoanClick}
          />

          <LoanCard
            icon={Building}
            title="Mortgage Loan"
            description="Unlock the value of your property with our mortgage loan options."
            features={[
              "Loan against property",
              "Attractive interest rates",
              "Flexible repayment tenure",
              "Higher loan eligibility",
              "Quick processing"
            ]}
            color="bg-gradient-to-br from-indigo-500 to-pink-500"
            onApplyLoanClick={onApplyLoanClick}
          />

          <LoanCard
            icon={Car}
            title="Car Refinance"
            description="Lower your car loan EMI or get cash by refinancing your car."
            features={[
              "Refinance existing car loan",
              "Top-up loan available",
              "Competitive interest rates",
              "Easy documentation",
              "Fast approval"
            ]}
            color="bg-gradient-to-br from-yellow-400 to-orange-500"
            onApplyLoanClick={onApplyLoanClick}
          />

          <LoanCard
            icon={CreditCard}
            title="Flexi Loan / OD"
            description="Flexible overdraft facility for your evolving financial needs."
            features={[
              "Loan amount up to ₹40 Lakhs",
              "Interest rate from 13.5%",
              "Tenure up to 8 years",
              "Flexible withdrawals and repayments",
              "Pay interest only on the amount used"
            ]}
            color="bg-gradient-to-br from-pink-500 to-blue-500"
            onApplyLoanClick={onApplyLoanClick}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;