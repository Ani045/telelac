import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Users, Target, ArrowRight, Trophy, Zap } from 'lucide-react';

const AboutPreview = () => {
  const features = [
  {
    icon: Award,
    title: 'Presidential Recognition',
    description: 'Our founder received recognition from the President of India for excellence in manufacturing',
    color: 'bg-yellow-500'
  },
  {
    icon: Shield,
    title: 'Quality Certified',
    description: 'IS 4159, IS/IEC 60079, ASME Sec. VIII certified manufacturing processes',
    color: 'bg-green-500'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '50+ years of combined expertise in industrial heating solutions',
    color: 'bg-blue-500'
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'Dedicated to providing reliable, efficient, and cost-effective heating solutions',
    color: 'bg-purple-500'
  }];

  const milestones = [
  { year: '1971', event: 'Company Founded', desc: 'Started with a vision for excellence' },
  { year: '1985', event: 'First Export', desc: 'Expanded to international markets' },
  { year: '2000', event: 'ISO Certification', desc: 'Achieved quality standards' },
  { year: '2024', event: '50+ Years Strong', desc: 'Continuing the legacy' }];


  return (
      <section className="py-14  bg-orange-50 overflow-hidden">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <div>
                      <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                          <Trophy className="w-4 h-4 mr-2" />
                          About Telelec
                      </Badge>
                      <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-6">
                          Five Decades of Heating Excellence
                      </h2>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          Established in 1971, Telelec Heating Equipment Pvt.
                          Ltd. has been at the forefront of industrial electric
                          heating solutions for over five decades. We specialize
                          in custom-designed heating equipment that meets the
                          most demanding industrial requirements.
                      </p>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          With installations across India and 10+ countries
                          worldwide, we have built a reputation for reliability,
                          quality, and innovation in the industrial heating
                          sector.
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          {features.map((feature, index) => (
                              <div
                                  key={index}
                                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                                  <div
                                      className={`p-3 ${feature.color} rounded-xl`}>
                                      <feature.icon className="h-6 w-6 text-white" />
                                  </div>
                                  <div>
                                      <h4 className="font-semibold text-[#2B2B2A] mb-2">
                                          {feature.title}
                                      </h4>
                                      <p className="text-gray-600 text-sm leading-relaxed">
                                          {feature.description}
                                      </p>
                                  </div>
                              </div>
                          ))}
                      </div>

                      <Button
                          asChild
                          size="lg"
                          className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                          <Link to="/about">
                              Learn More About Us
                              <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                      </Button>
                  </div>

                  {/* Visual Content */}
                  <div className="space-y-8">
                      {/* Main Image */}
                      <Card className="overflow-hidden shadow-2xl">
                          <CardContent className="p-0 relative">
                              <img
                                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                  alt="Manufacturing facility"
                                  className="w-full h-80 object-cover"
                              />

                              {/* Overlay Stats */}
                              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white p-6 rounded-2xl shadow-xl">
                                  <div className="flex items-center space-x-3">
                                      <Zap className="h-8 w-8" />
                                      <div>
                                          <div className="text-3xl font-bold">
                                              50+
                                          </div>
                                          <div className="text-sm opacity-90">
                                              Years of Excellence
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>

                      {/* Timeline */}
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                          <h3 className="text-xl font-bold text-[#2B2B2A] mb-6 text-center">
                              Our Journey
                          </h3>
                          <div className="space-y-4">
                              {milestones.map((milestone, index) => (
                                  <div
                                      key={index}
                                      className="flex items-center space-x-4">
                                      <div className="w-16 h-16 bg-[#F0801C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                                          <span className="text-[#F0801C] font-bold text-sm">
                                              {milestone.year}
                                          </span>
                                      </div>
                                      <div>
                                          <h4 className="font-semibold text-[#2B2B2A]">
                                              {milestone.event}
                                          </h4>
                                          <p className="text-gray-600 text-sm">
                                              {milestone.desc}
                                          </p>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );

};

export default AboutPreview;