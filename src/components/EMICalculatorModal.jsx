import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, DollarSign, Percent, CalendarDays, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const EMICalculatorModal = ({ isOpen, onClose }) => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(5); 
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; 
    const time = parseFloat(loanTenure) * 12; 

    if (principal > 0 && rate > 0 && time > 0) {
      const calculatedEmi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
      const totalPaymentValue = calculatedEmi * time;
      const totalInterestValue = totalPaymentValue - principal;
      
      setEmi(calculatedEmi.toFixed(2));
      setTotalInterest(totalInterestValue.toFixed(2));
      setTotalPayment(totalPaymentValue.toFixed(2));
    } else {
      setEmi(null);
      setTotalInterest(null);
      setTotalPayment(null);
    }
  };

  React.useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, loanTenure]);

  if (!isOpen) return null;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits:0 }).format(value);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1002] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold gradient-text">EMI Calculator</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="loanAmountCalc" className="flex items-center mb-2 text-gray-700 font-medium">
                <DollarSign className="w-4 h-4 mr-2 text-primary" /> Loan Amount (₹)
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="loanAmountCalc"
                  min={50000}
                  max={5000000}
                  step={10000}
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Math.max(50000, Math.min(5000000, Number(e.target.value))))}
                  className="w-32 focus:ring-primary focus:border-primary"
                  min="50000"
                  max="5000000"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="interestRateCalc" className="flex items-center mb-2 text-gray-700 font-medium">
                <Percent className="w-4 h-4 mr-2 text-primary" /> Interest Rate (% p.a.)
              </Label>
               <div className="flex items-center gap-4">
                <Slider
                  id="interestRateCalc"
                  min={5}
                  max={25}
                  step={0.1}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Math.max(5, Math.min(25, Number(e.target.value))))}
                  className="w-32 focus:ring-primary focus:border-primary"
                  min="5"
                  max="25"
                  step="0.1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="loanTenureCalc" className="flex items-center mb-2 text-gray-700 font-medium">
                <CalendarDays className="w-4 h-4 mr-2 text-primary" /> Loan Tenure (Years)
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="loanTenureCalc"
                  min={1}
                  max={30}
                  step={1}
                  value={[loanTenure]}
                  onValueChange={(value) => setLoanTenure(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Math.max(1, Math.min(30, Number(e.target.value))))}
                  className="w-32 focus:ring-primary focus:border-primary"
                  min="1"
                  max="30"
                />
              </div>
            </div>

            {emi && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-md border border-primary/20"
              >
                <h3 className="text-2xl font-semibold text-center mb-6 gradient-text">Your EMI Details</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Monthly EMI:</span>
                    <span className="text-primary font-bold text-2xl">{formatCurrency(emi)}</span>
                  </div>
                  <hr/>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Principal Amount:</span>
                    <span className="text-gray-800 font-medium">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Interest Payable:</span>
                    <span className="text-gray-800 font-medium">{formatCurrency(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3 mt-3 border-primary/30">
                    <span className="text-gray-700 font-semibold">Total Amount Payable:</span>
                    <span className="text-primary font-bold text-xl">{formatCurrency(totalPayment)}</span>
                  </div>
                </div>
                 <div className="mt-6 text-center">
                    <Button className="gradient-bg text-white" onClick={onClose}>
                        <TrendingUp className="w-5 h-5 mr-2" /> Apply for Loan Now
                    </Button>
                </div>
              </motion.div>
            )}
          </div>
          
          <div className="flex justify-end pt-8">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EMICalculatorModal;