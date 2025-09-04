import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Cpu, Shield, Zap, Gauge,
  Thermometer, Settings, Monitor, Wifi } from
'lucide-react';

const TechnologyShowcase = () => {
  const technologies = [
  {
    icon: Cpu,
    title: 'Advanced Control Systems',
    description: 'Intelligent temperature control with PID algorithms',
    benefit: '±1°C Accuracy'
  },
  {
    icon: Shield,
    title: 'Safety Features',
    description: 'Multi-layer safety systems and fail-safes',
    benefit: 'Zero Incidents'
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Optimized heating elements and insulation',
    benefit: '35% Savings'
  },
  {
    icon: Monitor,
    title: 'Remote Monitoring',
    description: 'IoT-enabled systems for real-time monitoring',
    benefit: '24/7 Oversight'
  }];


  const specs = [
  { label: 'Temperature Range', value: 'Up to 850°C' },
  { label: 'Pressure Rating', value: 'Up to 40 Bar' },
  { label: 'Power Range', value: '1kW to 2MW' },
  { label: 'Efficiency', value: '>99%' },
  { label: 'Control Accuracy', value: '±1°C' },
  { label: 'Response Time', value: '<30 seconds' }];


  return (
    <section className="py-14 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Advanced Technology
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
            Cutting-Edge Heating Technology
          </h2>
          <p className="text-[#C6C7C7] text-lg max-w-3xl mx-auto">
            Our heating systems incorporate the latest technological innovations to deliver
            superior performance, efficiency, and reliability in demanding industrial environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Technology Features */}
          <div className="space-y-8">
            {technologies.map((tech, index) =>
            <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-[#F0801C] to-[#D6701A] rounded-2xl">
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#2B2B2A] text-xl">{tech.title}</h3>
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20">
                      {tech.benefit}
                    </Badge>
                  </div>
                  <p className="text-[#C6C7C7] leading-relaxed">{tech.description}</p>
                </div>
              </div>
            )}
          </div>

          {/* Technical Specifications */}
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#2B2B2A] to-[#1a1a19] p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Settings className="h-6 w-6 mr-3 text-[#F0801C]" />
                    Technical Specifications
                  </h3>
                  <p className="text-gray-300">Industry-leading performance parameters</p>
                </div>
                <div className="p-8 bg-white">
                  <div className="grid grid-cols-1 gap-4">
                    {specs.map((spec, index) =>
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <span className="text-[#C6C7C7] font-medium">{spec.label}</span>
                        <span className="text-[#F0801C] font-bold text-lg">{spec.value}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Innovation Highlights */}
            <div className="bg-gradient-to-br from-[#F0801C]/10 to-[#D6701A]/10 rounded-2xl p-8 border border-[#F0801C]/20">
              <h4 className="font-bold text-[#2B2B2A] text-xl mb-6">Innovation Highlights</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Thermometer className="h-5 w-5 text-[#F0801C]" />
                  <span className="text-[#C6C7C7]">Smart temperature sensing and control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-[#F0801C]" />
                  <span className="text-[#C6C7C7]">IoT connectivity for remote monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="h-5 w-5 text-[#F0801C]" />
                  <span className="text-[#C6C7C7]">Predictive maintenance algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-[#F0801C]" />
                  <span className="text-[#C6C7C7]">Advanced safety interlocks and monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-[#2B2B2A] to-[#1a1a19] rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#F0801C] mb-2">99.8%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F0801C] mb-2">35%</div>
              <div className="text-gray-300">Energy Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F0801C] mb-2">±1°C</div>
              <div className="text-gray-300">Temperature Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F0801C] mb-2">30sec</div>
              <div className="text-gray-300">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TechnologyShowcase;