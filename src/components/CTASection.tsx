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
                  Get Custom Quote
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

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#F0801C]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-6 w-6 text-[#F0801C]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Call Us Directly</h3>
                <p className="text-gray-300 mb-3 text-sm">Speak with our experts immediately</p>
                <p className="text-[#F0801C] font-semibold">+91 9318498090</p>
                <p className="text-gray-400 text-xs">Available Mon-Fri 9:30 AM - 6:30 PM</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#F0801C]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-[#F0801C]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Email Us</h3>
                <p className="text-gray-300 mb-3 text-sm">Get detailed technical information</p>
                <p className="text-[#F0801C] font-semibold">info@telelec.com</p>
                <p className="text-gray-400 text-xs">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#F0801C]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="h-6 w-6 text-[#F0801C]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">Request Quote</h3>
                <p className="text-gray-300 mb-3 text-sm">Get custom pricing for your project</p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </div>
    </section>);

};

export default CTASection;