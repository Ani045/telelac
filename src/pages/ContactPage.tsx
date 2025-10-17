import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, MessageSquare, ChevronRight, ArrowRight, Globe, Award, CheckCircle, Send, Building, ExternalLink } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 9318498090', '+91-120-4125460'],
      action: 'Call Now',
      primary: '+91 9318498090'
    },
    {
      icon: Mail,
      title: 'Email Addresses', 
      details: ['info@telelec.com', 'sales@telelec.com'],
      action: 'Send Email',
      primary: 'info@telelec.com'
    },
    {
      icon: Building,
      title: 'Manufacturing Plant',
      details: ['B-48 Sector 81, Phase II', 'Noida 201305, UP, India'],
      action: 'Get Directions',
      primary: 'Noida Plant'
    },
    {
      icon: MapPin,
      title: 'Registered Office',
      details: ['8/72, Anand Parvat Industrial Area', 'New Delhi - 110005, India'],
      action: 'Get Directions',
      primary: 'Delhi Office'
    }
  ];


  const quickContacts = [
    { type: 'Technical Support', contact: '+91 9318498090', available: '24/7' },
    { type: 'Sales Inquiry', contact: 'sales@telelec.com', available: 'Business Hours' },
    { type: 'General Information', contact: 'info@telelec.com', available: 'Business Hours' }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact Telelec"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-orange-50/75"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Contact Us</span>
            </div>
          </nav>

          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-center">
              {/* Left Content - Compact */}
              <div className="lg:col-span-2 space-y-2 sm:space-y-3">
                <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-3 py-1">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Get In Touch
                </Badge>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Contact <span className="text-[#F0801C]">Telelec</span>
                </h1>
                
                <p className="text-xs sm:text-sm md:text-base text-slate-600">
                  Connect with our heating experts for consultation, quotes, and tailored industrial solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-1 sm:pt-2">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-xs sm:text-sm">
                    <Send className="w-4 h-4" />
                    Get Quote
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-xs sm:text-sm">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>

              {/* Right - Compact Stats Grid */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">24/7</h3>
                  <p className="text-xs text-slate-600">Support</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <Globe className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">10+</h3>
                  <p className="text-xs text-slate-600">Countries</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Fast</h3>
                  <p className="text-xs text-slate-600">Response</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <Award className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">50+ Years</h3>
                  <p className="text-xs text-slate-600">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-8xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                Get In Touch
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#F0801C] rounded-full mx-auto mb-3 sm:mb-4"></div>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                Multiple ways to reach our expert team for all your heating solution needs
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center shadow-lg">
                        <info.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 sm:mb-3 text-center">{info.title}</h3>
                    <div className="space-y-1 mb-3 sm:mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-xs sm:text-sm text-slate-600 text-center">{detail}</p>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white py-1.5 sm:py-2 px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg">
                      {info.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Options */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">Quick Contacts</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {quickContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{contact.type}</h4>
                        <p className="text-xs sm:text-sm text-[#F0801C] font-medium">{contact.contact}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        {contact.available}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                Request a Quote
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#F0801C] rounded-full mx-auto mb-3 sm:mb-4"></div>
              <p className="text-sm sm:text-base text-slate-600">
                Tell us about your heating requirements and get a customized solution
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Location & CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-6 sm:py-8 lg:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left - Location Info */}
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">
                  Visit Our Facilities
                </h2>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white/90">
                  Experience our state-of-the-art manufacturing capabilities and meet our expert team
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="w-5 h-5 text-white" />
                      <h3 className="font-semibold text-white">Manufacturing Plant</h3>
                    </div>
                    <p className="text-sm text-white/80">
                      B-48 Sector 81, Phase II<br />
                      Noida 201305, UP, India
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-white" />
                      <h3 className="font-semibold text-white">Registered Office</h3>
                    </div>
                    <p className="text-sm text-white/80">
                      8/72, Anand Parvat Industrial Area<br />
                      New Delhi - 110005, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white/90">
                  Contact our technical team for expert consultation and customized heating solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
                  <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                  <button 
                    className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>);

};

export default ContactPage;