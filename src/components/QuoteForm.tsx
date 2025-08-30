import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface QuoteFormProps {
  productName?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ productName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#2B2B2A] text-center">
          Get Your Custom Quote
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                className="mt-1" />

            </div>
            <div>
              <Label htmlFor="company">Company Name *</Label>
              <Input
                id="company"
                name="company"
                required
                placeholder="Your company name"
                className="mt-1" />

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your.email@company.com"
                className="mt-1" />

            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+91 9XXXXXXXXX"
                className="mt-1" />

            </div>
          </div>

          <div>
            <Label htmlFor="product">Product Interest</Label>
            <Select name="product" defaultValue={productName}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Electric Heater Bundles">Electric Heater Bundles</SelectItem>
                <SelectItem value="Air Heaters">Air Heaters</SelectItem>
                <SelectItem value="Metal Finishing Tank Heaters">Metal Finishing Tank Heaters</SelectItem>
                <SelectItem value="Process Heaters">Process Heaters</SelectItem>
                <SelectItem value="Immersion Heaters">Immersion Heaters</SelectItem>
                <SelectItem value="Control Panels">Control Panels</SelectItem>
                <SelectItem value="Other">Other (specify in message)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="power">Power Requirement</Label>
              <Input
                id="power"
                name="power"
                placeholder="e.g., 50 kW"
                className="mt-1" />

            </div>
            <div>
              <Label htmlFor="voltage">Voltage</Label>
              <Input
                id="voltage"
                name="voltage"
                placeholder="e.g., 415V"
                className="mt-1" />

            </div>
          </div>

          <div>
            <Label htmlFor="application">Application/Industry</Label>
            <Input
              id="application"
              name="application"
              placeholder="e.g., Chemical Processing, Oil & Gas"
              className="mt-1" />

          </div>

          <div>
            <Label htmlFor="message">Detailed Requirements *</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Please describe your heating requirements, operating conditions, and any specific technical specifications..."
              className="mt-1 min-h-[120px]" />

          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-[#F0801C] hover:bg-[#D6701A] text-white">

            {isSubmitting ?
            "Sending Request..." :

            <>
                <Send className="mr-2 h-4 w-4" />
                Send Quote Request
              </>
            }
          </Button>

          <p className="text-sm text-[#C6C7C7] text-center">
            * Required fields. We'll respond within 24 hours with a detailed quote.
          </p>
        </form>
      </CardContent>
    </Card>);

};

export default QuoteForm;