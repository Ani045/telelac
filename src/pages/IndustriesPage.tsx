import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Factory, Droplets, Fuel, Zap, Building, Cpu, Users, Globe } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
  {
    title: 'Process Industry',
    subtitle: 'Chemicals, Fertilizers, Petrochemicals, Cement',
    description: 'Our heating solutions are extensively used in chemical processing plants, fertilizer manufacturing, petrochemical facilities, and cement production. We provide reliable heating systems for reactors, distillation columns, and various process equipment.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Chemical reactor heating',
    'Distillation column reboilers',
    'Heat exchangers',
    'Storage tank heating',
    'Pipeline heating',
    'Catalyst regeneration'],

    keyBenefits: [
    'Precise temperature control',
    'Energy efficiency',
    'Corrosion resistance',
    'Safety compliance']

  },
  {
    title: 'Oil & Gas',
    subtitle: 'Upstream, Midstream & Downstream Operations',
    description: 'Comprehensive heating solutions for the oil and gas industry including upstream exploration, midstream transportation, and downstream refining operations. Our equipment withstands harsh environments and meets stringent safety standards.',
    icon: Fuel,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Crude oil heating',
    'Natural gas processing',
    'Pipeline freeze protection',
    'Separator heating',
    'Refinery process heating',
    'Storage tank heating'],

    keyBenefits: [
    'Explosion-proof designs',
    'High-pressure ratings',
    'Corrosion resistance',
    'Remote monitoring']

  },
  {
    title: 'Water Treatment',
    subtitle: 'Municipal & Industrial Water Processing',
    description: 'Advanced heating solutions for water and wastewater treatment facilities. Our systems ensure optimal performance in various treatment processes while maintaining energy efficiency and environmental compliance.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Digester heating',
    'Chemical dosing systems',
    'Sludge treatment',
    'Evaporator systems',
    'Desalination plants',
    'Reverse osmosis systems'],

    keyBenefits: [
    'Chemical compatibility',
    'Energy efficiency',
    'Low maintenance',
    'Environmental compliance']

  },
  {
    title: 'Power Generation',
    subtitle: 'Nuclear, Solar, Gas & Thermal Power',
    description: 'Reliable heating equipment for power generation facilities including nuclear plants, solar thermal systems, gas turbines, and thermal power stations. Our solutions meet the highest safety and reliability standards.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Boiler feedwater heating',
    'Steam generation systems',
    'Turbine heating',
    'Nuclear facility heating',
    'Solar thermal systems',
    'Auxiliary heating systems'],

    keyBenefits: [
    'Nuclear qualified',
    'High reliability',
    'Safety systems',
    'Performance monitoring']

  },
  {
    title: 'Metals & Minerals',
    subtitle: 'Refining, Processing & Production',
    description: 'Specialized heating solutions for metal refining, mineral processing, and production facilities. Our equipment handles extreme temperatures and corrosive environments typical in metallurgical processes.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Metal smelting processes',
    'Electroplating systems',
    'Anodizing operations',
    'Heat treatment furnaces',
    'Pickling and etching',
    'Surface finishing'],

    keyBenefits: [
    'High-temperature capability',
    'Corrosion resistance',
    'Precise control',
    'Long service life']

  },
  {
    title: 'Industrial Gases',
    subtitle: 'Compressed Air & Gas Processing',
    description: 'Efficient heating systems for industrial gas applications including compressed air systems, gas processing, and specialty gas production. Our solutions ensure optimal gas quality and system efficiency.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Compressed air heating',
    'Gas drying systems',
    'Nitrogen generation',
    'Oxygen processing',
    'Specialty gas production',
    'Gas purification'],

    keyBenefits: [
    'Energy efficiency',
    'Moisture removal',
    'Gas purity',
    'System reliability']

  }];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#2B2B2A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Delivering reliable heating solutions across diverse industries with over 50 years of expertise
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-[#F0801C] mx-auto mb-2" />
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-300">Industries Served</div>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-[#F0801C] mx-auto mb-2" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <Building className="h-12 w-12 text-[#F0801C] mx-auto mb-2" />
                <div className="text-2xl font-bold">3000+</div>
                <div className="text-sm text-gray-300">Installations</div>
              </div>
              <div className="text-center">
                <Factory className="h-12 w-12 text-[#F0801C] mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {industries.map((industry, index) =>
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="overflow-hidden h-full">
                    <div className="relative">
                      <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-64 lg:h-80 object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <industry.icon className="h-12 w-12 text-[#F0801C]" />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Badge className="bg-[#F0801C] hover:bg-[#D6701A] mb-4">
                    Industry Focus
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-2">
                    {industry.title}
                  </h2>
                  <p className="text-xl text-[#F0801C] font-semibold mb-4">
                    {industry.subtitle}
                  </p>
                  <p className="text-gray-600 text-lg mb-6">
                    {industry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2B2B2A] mb-3">Key Applications:</h4>
                      <ul className="space-y-2">
                        {industry.applications.map((app, idx) =>
                      <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F0801C] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{app}</span>
                          </li>
                      )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2B2B2A] mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {industry.keyBenefits.map((benefit, idx) =>
                      <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#F0801C] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                      )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0801C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Discuss Your Industry Requirements?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our industry experts can help you find the perfect heating solution for your specific application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#F0801C] hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors">
              Contact Our Experts
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-3 rounded-md font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>);

};

export default IndustriesPage;