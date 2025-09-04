import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone, Mail, MessageSquare, Clock, Award } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-[#2B2B2A] via-[#2B2B2A] to-[#1a1a19] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-5 right-5 w-72 h-72 bg-[#F0801C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 left-5 w-60 h-60 bg-[#F0801C]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Find Your Perfect 
              <span className="block text-[#F0801C]">Heating Solution?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Let our experts help you design the ideal heating system for your industrial needs. 
              Get a custom quote today and join 100+ satisfied customers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300">
                <Link to="/contact">
                  Find Your Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-black hover:bg-white hover:text-[#2B2B2A] px-8 py-3 text-lg backdrop-blur-sm">
                <Link to="/products">
                  Browse Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Options - Compact Mobile-Friendly */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {/* Phone */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <a href="tel:+919318498090" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0801C]/20 rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-[#F0801C]" />
                  </div>
                  <div className="hidden sm:block">
                    <h3 className="font-semibold text-white text-sm">Call Us</h3>
                    <p className="text-[#F0801C] text-xs font-medium">+91 9318498090</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <a href="mailto:info@telelec.com" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0801C]/20 rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#F0801C]" />
                  </div>
                  <div className="hidden sm:block">
                    <h3 className="font-semibold text-white text-sm">Email Us</h3>
                    <p className="text-[#F0801C] text-xs font-medium">info@telelec.com</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Quote */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <Link to="/contact" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0801C]/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-[#F0801C]" />
                  </div>
                  <div className="hidden sm:block">
                    <h3 className="font-semibold text-white text-sm">Get Quote</h3>
                    <p className="text-gray-300 text-xs">Custom pricing</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTASection;
