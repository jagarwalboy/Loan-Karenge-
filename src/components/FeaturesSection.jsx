import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Users, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="feature-icon">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Loan Karenge?</h2>
          <p className="text-xl text-gray-600">Experience the difference with our customer-first approach</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={Clock}
            title="Quick Processing"
            description="Get your loan approved and disbursed within 24 hours"
          />
          <FeatureCard
            icon={Shield}
            title="Secure & Safe"
            description="Your data is protected with bank-grade security measures"
          />
          <FeatureCard
            icon={Users}
            title="Expert Support"
            description="Dedicated relationship managers to guide you through the process"
          />
          <FeatureCard
            icon={CheckCircle}
            title="High Approval Rate"
            description="95% approval rate with competitive interest rates"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;