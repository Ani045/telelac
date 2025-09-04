import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Users, Target, Factory, Globe, Calendar, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
  {
    year: '1971',
    title: 'Company Founded',
    description: 'Telelec Heating Equipment Pvt. Ltd. established with a vision to provide reliable electric heating solutions.'
  },
  {
    year: '1985',
    title: 'Presidential Recognition',
    description: 'Founder received recognition from the President of India for excellence in manufacturing and innovation.'
  },
  {
    year: '1995',
    title: 'International Expansion',
    description: 'First international installations completed, marking our entry into global markets.'
  },
  {
    year: '2005',
    title: 'Quality Certifications',
    description: 'Achieved IS 4159, IS/IEC 60079, and ASME Section VIII certifications.'
  },
  {
    year: '2015',
    title: '1000+ Installations',
    description: 'Reached milestone of 1000+ successful installations across various industries.'
  },
  {
    year: '2024',
    title: '50+ Years of Excellence',
    description: 'Continuing our legacy with 3000+ installations across 10+ countries.'
  }];


  const values = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'We maintain the highest quality standards in design, manufacturing, and service delivery.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers\' success is our priority. We provide solutions tailored to their specific needs.'
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuous innovation drives us to develop cutting-edge heating solutions.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our business operations.'
  }];


  const certifications = [
  'IS 4159 - Electric Heating Equipment Standard',
  'IS/IEC 60079 - Explosive Atmospheres',
  'ASME Section VIII - Pressure Vessels',
  'ISO 9001:2015 - Quality Management System',
  'CE Marking - European Conformity',
  'RoHS Compliance - Environmental Standards'];


  const capabilities = [
  {
    title: 'Design & Engineering',
    description: 'Advanced CAD/CAM facilities with experienced design engineers',
    icon: Target
  },
  {
    title: 'Manufacturing',
    description: 'State-of-the-art manufacturing facility with modern equipment',
    icon: Factory
  },
  {
    title: 'Quality Control',
    description: 'Comprehensive quality control processes and testing facilities',
    icon: Shield
  },
  {
    title: 'Global Support',
    description: 'Worldwide installation and after-sales support services',
    icon: Globe
  }];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#2B2B2A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Telelec Heating Equipment
            </h1>
            <p className="text-xl text-gray-600">
              Over 50 years of excellence in industrial electric heating solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-[#F0801C] hover:bg-[#D6701A] mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-6">
                Five Decades of Innovation
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Established in 1971, Telelec Heating Equipment Pvt. Ltd. has been at the forefront of industrial electric heating solutions for over five decades. What started as a small enterprise with a vision to provide reliable heating solutions has grown into a leading manufacturer serving industries across India and internationally.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our founder's dedication to quality and innovation was recognized by the President of India, setting the foundation for our company's commitment to excellence. Today, we continue this legacy with cutting-edge technology and unwavering focus on customer satisfaction.
              </p>
              <p className="text-gray-600 text-lg">
                With over 3,000 successful installations across 10+ countries, we have established ourselves as a trusted partner for industrial heating solutions in sectors ranging from chemicals and petrochemicals to power generation and water treatment.
              </p>
            </div>
            <div>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Manufacturing facility"
                    className="w-full h-96 object-cover" />

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our 50+ year journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#F0801C]"></div>
              
              {timeline.map((item, index) =>
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-[#F0801C] hover:bg-[#D6701A]">
                            {item.year}
                          </Badge>
                          <Calendar className="h-5 w-5 text-[#F0801C]" />
                        </div>
                        <CardTitle className="text-[#2B2B2A]">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F0801C] rounded-full border-4 border-white shadow-lg"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) =>
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#2B2B2A] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              Manufacturing Capabilities
            </h2>
            <p className="text-gray-600 text-lg">
              Advanced facilities and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) =>
            <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <capability.icon className="h-8 w-8 text-[#F0801C]" />
                  <CardTitle className="text-[#2B2B2A]">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              Quality Certifications
            </h2>
            <p className="text-gray-600 text-lg">
              Certified for quality, safety, and environmental standards
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-[#2B2B2A] flex items-center justify-center">
                  <Award className="mr-2 h-6 w-6 text-[#F0801C]" />
                  Our Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) =>
                  <div key={index} className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-[#F0801C] flex-shrink-0" />
                      <span className="text-gray-600">{cert}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16 bg-[#F0801C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our Philosophy
            </h2>
            <blockquote className="text-xl lg:text-2xl font-medium mb-8 italic">
              "Excellence in engineering, reliability in performance, and dedication to customer success - these principles have guided us for over five decades and continue to drive our innovation."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p>Always striving to enhance our products and services</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer Partnership</h3>
                <p>Building long-term relationships based on trust and reliability</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                <p>Serving industries worldwide with local support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default AboutPage;