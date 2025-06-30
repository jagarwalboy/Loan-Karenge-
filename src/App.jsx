import React, { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FeaturesSection from '@/components/FeaturesSection';
import BankSliderSection from '@/components/BankSliderSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LoanApplicationModal from '@/components/LoanApplicationModal';
import EMICalculatorModal from '@/components/EMICalculatorModal';

function App() {
  const [isLoanModalOpen, setIsLoanModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [initialLoanTypeForModal, setInitialLoanTypeForModal] = useState('Personal Loan');

  const handleOpenLoanModal = (loanType) => {
    if (typeof loanType === 'string' && loanType.length > 0) {
      setInitialLoanTypeForModal(loanType);
    } else {
      setInitialLoanTypeForModal('Personal Loan'); 
    }
    setIsLoanModalOpen(true);
    setIsCalculatorModalOpen(false); // Close calculator if open
  };

  const handleCloseLoanModal = () => {
    setIsLoanModalOpen(false);
  };

  const handleOpenCalculatorModal = () => {
    setIsCalculatorModalOpen(true);
    setIsLoanModalOpen(false); // Close loan form if open
  };

  const handleCloseCalculatorModal = () => {
    setIsCalculatorModalOpen(false);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Header onApplyLoanClick={() => handleOpenLoanModal()} />
      <HeroSection onApplyLoanClick={() => handleOpenLoanModal()} onCalculatorClick={handleOpenCalculatorModal} />
      <ServicesSection onApplyLoanClick={handleOpenLoanModal} />
      <FeaturesSection />
      <BankSliderSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer onCalculatorClick={handleOpenCalculatorModal} />
      <FloatingWhatsApp />
      <LoanApplicationModal 
        isOpen={isLoanModalOpen} 
        onClose={handleCloseLoanModal} 
        initialLoanType={initialLoanTypeForModal}
      />
      <EMICalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={handleCloseCalculatorModal}
      />
    </div>
  );
}

export default App;