import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#2B2B2A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team for expert consultation and customized heating solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
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