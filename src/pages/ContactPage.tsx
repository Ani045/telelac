import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const ContactPage = () => {
  const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['+91 9318498090', '+91-120-4125460'],
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Addresses',
    details: ['info@telelec.com', 'sales@telelec.com'],
    action: 'Send Email'
  },
  {
    icon: MapPin,
    title: 'Manufacturing Plant',
    details: ['B-48 Sector 81, Phase II', 'Noida 201305, UP, India'],
    action: 'Get Directions'
  },
  {
    icon: MapPin,
    title: 'Registered Office',
    details: ['8/72, Anand Parvat Industrial Area', 'New Delhi - 110005, India'],
    action: 'Get Directions'
  }];


  const officeHours = [
  { day: 'Monday - Friday', hours: '9:30 AM to 6:30 PM' },
  { day: 'Saturday', hours: '9:30 AM to 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' }];


  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section with Rich Background */}
      <section className="relative bg-gradient-to-br from-slate-100 via-blue-50/30 to-orange-50/20 text-slate-900 pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
        
        {/* Complex Background Layers */}
        <div className="absolute inset-0">
          {/* Industrial Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1' opacity='0.3'%3E%3Cpath d='M10 10h80v80H10V10zm10 10h60v60H20V20zm10 10h40v40H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          ></div>

          {/* Geometric Shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#F0801C]/10 to-[#D6701A]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Hexagonal Pattern */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1'%3E%3Cpath d='M30 5l20 11v22L30 49 10 38V16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>

          {/* Circuit Board Pattern */}
          <div 
            className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-15"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1'%3E%3Cpath d='M20 20h40v40H20V20zm10 10h20v20H30V30z'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='60' cy='20' r='3'/%3E%3Ccircle cx='20' cy='60' r='3'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          ></div>

          {/* Diagonal Industrial Lines */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F0801C]/8 via-transparent to-transparent transform skew-x-12 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent transform -skew-y-12"></div>

          {/* Floating Geometric Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#F0801C]/20 rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 border-2 border-[#F0801C]/30 rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

          {/* Technical Lines Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(90deg, #F0801C 1px, transparent 1px), linear-gradient(#F0801C 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Simple Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Contact Us</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content - Clean Typography */}
              <div className="space-y-6">
                <div>
                  <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-4 py-2 mb-6 backdrop-blur-sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Badge>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Contact
                    <span className="block text-[#F0801C] mt-2">
                      Us
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Get in touch with our team for expert consultation and customized heating solutions.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Get Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </button>
                </div>
              </div>

              {/* Right Content - Enhanced Cards */}
              <div className="space-y-6">
                {/* Quick Contact Card */}
                <div className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F0801C]/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Quick Contact</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-2">
                        +91 9318498090 • Available Mon-Fri 9:30 AM - 6:30 PM
                      </p>
                      <span className="inline-block bg-[#F0801C]/10 text-[#F0801C] px-3 py-1 rounded-full text-xs font-semibold">Immediate Response</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                      <div className="text-slate-600 text-sm font-medium">Support</div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-slate-900 mb-1">10+</div>
                      <div className="text-slate-600 text-sm font-medium">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-slate-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120V60c0,0,200-40,400-40s400,40,400,40s200-40,400-40v100H0z"></path>
          </svg>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-1/3 left-10 animate-float">
          <div className="w-8 h-8 border-2 border-[#F0801C]/30 rotate-45 transform"></div>
        </div>
        <div className="absolute top-2/3 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-[#F0801C]/20 rounded-full"></div>
        </div>

        {/* Custom CSS for floating animation */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) =>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <info.icon className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                  <CardTitle className="text-[#2B2B2A]">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) =>
                <p key={idx} className="text-[#C6C7C7] mb-2">{detail}</p>
                )}
                  <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white">

                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Office Hours */}
          <div className="max-w-md mx-auto mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-[#2B2B2A] flex items-center justify-center">
                  <Clock className="mr-2 h-6 w-6 text-[#F0801C]" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) =>
                  <div key={index} className="flex justify-between items-center">
                      <span className="text-[#2B2B2A] font-medium">{schedule.day}:</span>
                      <span className="text-[#C6C7C7]">{schedule.hours}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              Find Us
            </h2>
            <p className="text-[#C6C7C7] text-lg">
              Visit our manufacturing facility in Noida
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Placeholder for map - in a real implementation, you would integrate with Google Maps */}
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-[#F0801C] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#2B2B2A] mb-2">
                      Manufacturing Plant
                    </h3>
                    <p className="text-[#C6C7C7]">
                      B-48 Sector 81, Phase II<br />
                      Noida 201305, UP, India
                    </p>
                    <Button
                      className="mt-4 bg-[#F0801C] hover:bg-[#D6701A] text-white"
                      onClick={() => window.open('https://maps.google.com', '_blank')}>

                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



    </div>);

};

export default ContactPage;