import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, DollarSign, User, Phone, Briefcase, Info, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const LoanApplicationModal = ({ isOpen, onClose, initialLoanType }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    loanAmount: '',
    loanType: initialLoanType || 'Personal Loan',
    employmentType: '',
    monthlyIncome: '',
    city: '',
    panNumber: '',
  });

  useEffect(() => {
    if (initialLoanType) {
      setFormData(prev => ({ ...prev, loanType: initialLoanType }));
    }
  }, [initialLoanType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('loanApplication', JSON.stringify(formData));

    const emailTo = 'jagarwalboy@gmail.com';
    const emailSubject = `New Loan Application - ${formData.fullName}`;
    const emailBody = `
      A new loan application has been submitted:

      Full Name: ${formData.fullName}
      Mobile Number: ${formData.mobileNumber}
      Loan Amount: ₹${formData.loanAmount}
      Loan Type: ${formData.loanType}
      Employment Type: ${formData.employmentType}
      Monthly Income: ₹${formData.monthlyIncome}
      City: ${formData.city}
      PAN Number: ${formData.panNumber || 'Not Provided'}
    `;

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    try {
      window.location.href = mailtoLink;
      toast({
        title: "Application Ready! 🎉",
        description: "Your loan application details are ready to be sent. Please complete sending it via your email client.",
      });
    } catch (error) {
      console.error("Failed to open mailto link:", error);
      toast({
        title: "Error 🚧",
        description: "Could not open email client. Please try submitting manually or contact support.",
        variant: "destructive",
      });
    }

    onClose();
    setFormData({ 
      fullName: '', 
      mobileNumber: '', 
      loanAmount: '', 
      loanType: initialLoanType || 'Personal Loan', 
      employmentType: '', 
      monthlyIncome: '',
      city: '',
      panNumber: '',
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[1001] p-4"
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
            <h2 className="text-3xl font-bold gradient-text">Apply for a Loan</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <X className="w-6 h-6" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="flex items-center mb-2 text-gray-700 font-medium">
                  <User className="w-4 h-4 mr-2 text-primary" /> Full Name
                </Label>
                <Input 
                  type="text" 
                  name="fullName" 
                  id="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  placeholder="E.g., John Doe" 
                  required 
                  className="focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="mobileNumber" className="flex items-center mb-2 text-gray-700 font-medium">
                  <Phone className="w-4 h-4 mr-2 text-primary" /> Mobile Number
                </Label>
                <Input 
                  type="tel" 
                  name="mobileNumber" 
                  id="mobileNumber" 
                  value={formData.mobileNumber} 
                  onChange={handleChange} 
                  placeholder="E.g., 9876543210" 
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  required 
                  className="focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="loanAmount" className="flex items-center mb-2 text-gray-700 font-medium">
                  <DollarSign className="w-4 h-4 mr-2 text-primary" /> Loan Amount Needed (₹)
                </Label>
                <Input 
                  type="number" 
                  name="loanAmount" 
                  id="loanAmount" 
                  value={formData.loanAmount} 
                  onChange={handleChange} 
                  placeholder="E.g., 500000" 
                  required 
                  min="10000"
                  className="focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="loanType" className="flex items-center mb-2 text-gray-700 font-medium">
                  <Briefcase className="w-4 h-4 mr-2 text-primary" /> Loan Type
                </Label>
                <Select name="loanType" value={formData.loanType} onValueChange={(value) => handleSelectChange('loanType', value)}>
                  <SelectTrigger className="w-full focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal Loan">Personal Loan</SelectItem>
                    <SelectItem value="Home Loan">Home Loan</SelectItem>
                    <SelectItem value="Business Loan">Business Loan</SelectItem>
                    <SelectItem value="Mortgage Loan">Mortgage Loan</SelectItem>
                    <SelectItem value="Car Refinance">Car Refinance</SelectItem>
                    <SelectItem value="Education Loan">Education Loan</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="employmentType" className="flex items-center mb-2 text-gray-700 font-medium">
                  <Info className="w-4 h-4 mr-2 text-primary" /> Employment Type
                </Label>
                <Select name="employmentType" value={formData.employmentType} onValueChange={(value) => handleSelectChange('employmentType', value)}>
                  <SelectTrigger className="w-full focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Salaried">Salaried</SelectItem>
                    <SelectItem value="Self-employed Business">Self-employed Business</SelectItem>
                    <SelectItem value="Self-employed Professional">Self-employed Professional</SelectItem>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Unemployed">Unemployed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="monthlyIncome" className="flex items-center mb-2 text-gray-700 font-medium">
                  <DollarSign className="w-4 h-4 mr-2 text-primary" /> Net Monthly Income (₹)
                </Label>
                <Input 
                  type="number" 
                  name="monthlyIncome" 
                  id="monthlyIncome" 
                  value={formData.monthlyIncome} 
                  onChange={handleChange} 
                  placeholder="E.g., 50000" 
                  min="0"
                  className="focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="city" className="flex items-center mb-2 text-gray-700 font-medium">
                  <MapPin className="w-4 h-4 mr-2 text-primary" /> Current City
                </Label>
                <Input 
                  type="text" 
                  name="city" 
                  id="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  placeholder="E.g., Jodhpur" 
                  className="focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="panNumber" className="flex items-center mb-2 text-gray-700 font-medium">
                  <Info className="w-4 h-4 mr-2 text-primary" /> PAN Number (Optional)
                </Label>
                <Input 
                  type="text" 
                  name="panNumber" 
                  id="panNumber" 
                  value={formData.panNumber} 
                  onChange={handleChange} 
                  placeholder="E.g., ABCDE1234F" 
                  pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                  title="Please enter a valid PAN number"
                  className="focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="mr-4">
                Cancel
              </Button>
              <Button type="submit" className="gradient-bg text-white pulse-glow">
                Submit Application
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoanApplicationModal;