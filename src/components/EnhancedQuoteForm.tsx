import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, X } from 'lucide-react';

interface EnhancedQuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const EnhancedQuoteForm: React.FC<EnhancedQuoteFormProps> = ({ 
  isOpen, 
  onClose, 
  productName 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    airFlowRate: '',
    operatingPressure: '',
    heaterCapacity: '',
    primaryApplication: [] as string[],
    additionalInfo: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      primaryApplication: checked 
        ? [...prev.primaryApplication, value]
        : prev.primaryApplication.filter(item => item !== value)
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a detailed quote."
      });

      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        mobile: '',
        airFlowRate: '',
        operatingPressure: '',
        heaterCapacity: '',
        primaryApplication: [],
        additionalInfo: ''
      });
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <Card className="shadow-2xl">
          <CardHeader className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>
            <CardTitle className="text-2xl text-center pr-12">
              Get Your Custom Quote
              {productName && (
                <span className="block text-lg font-normal opacity-90 mt-1">
                  for {productName}
                </span>
              )}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Your Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mobile">What is your mobile number (ten digit number) *</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    placeholder="9XXXXXXXXX"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                  Technical Requirements
                </h3>
                
                <div>
                  <Label htmlFor="airFlowRate">What is the air flow rate? *</Label>
                  <Input
                    id="airFlowRate"
                    name="airFlowRate"
                    value={formData.airFlowRate}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 1000 m³/h or 500 CFM"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="operatingPressure">What is the operating pressure? (Please specify the unit in Pa, or mm WC) *</Label>
                  <Input
                    id="operatingPressure"
                    name="operatingPressure"
                    value={formData.operatingPressure}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 500 Pa or 50 mm WC"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Do you know the heater capacity or would you like us to calculate? *</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="capacity-known"
                        name="heaterCapacity"
                        value="known"
                        checked={formData.heaterCapacity === 'known'}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-[#F0801C] focus:ring-[#F0801C] border-gray-300"
                      />
                      <Label htmlFor="capacity-known" className="text-sm">
                        I know the heater capacity
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="capacity-calculate"
                        name="heaterCapacity"
                        value="calculate"
                        checked={formData.heaterCapacity === 'calculate'}
                        onChange={handleRadioChange}
                        className="w-4 h-4 text-[#F0801C] focus:ring-[#F0801C] border-gray-300"
                      />
                      <Label htmlFor="capacity-calculate" className="text-sm">
                        Please calculate for me
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>What is the primary application - temperature increase / moisture control / both? *</Label>
                  <div className="mt-2 space-y-2">
                    {[
                      'Temperature increase',
                      'Moisture control',
                      'Both temperature increase and moisture control',
                      'Process air heating',
                      'Space heating',
                      'Drying applications'
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={`application-${option.toLowerCase().replace(/\s+/g, '-')}`}
                          name="primaryApplication"
                          value={option}
                          checked={formData.primaryApplication.includes(option)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-[#F0801C] focus:ring-[#F0801C] border-gray-300 rounded"
                        />
                        <Label 
                          htmlFor={`application-${option.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="text-sm"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <Label htmlFor="additionalInfo">Any other relevant information you would like to provide?</Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  placeholder="Please provide any additional technical specifications, operating conditions, installation requirements, or other relevant details..."
                  className="mt-1 min-h-[120px]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#F0801C] hover:bg-[#D6701A] text-white"
                >
                  {isSubmitting ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Quote Request
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-slate-500 text-center">
                * Required fields. We'll respond within 24 hours with a detailed quote.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedQuoteForm;