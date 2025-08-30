import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Award, Globe, Play, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#2B2B2A] via-[#2B2B2A] to-[#1a1a19] text-white py-14 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }} />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2A]/90 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#F0801C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F0801C]/5 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#F0801C]/20 text-[#F0801C] border-[#F0801C]/30 backdrop-blur-sm">
                <Award className="w-4 h-4 mr-2" />
                Trusted Since 1971
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reliable Electric
                <span className="block text-[#F0801C]">Heating Solutions</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Engineered industrial electric heating solutions that you can depend on
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">3000+ Installations</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Global Presence</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">

                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-black hover:bg-white/60 hover:text-[#2B2B2A] px-8 py-4 text-lg backdrop-blur-sm">

                <Link to="/products" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  View Products
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Key Features */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F0801C]/20 rounded-xl">
                    <Shield className="h-8 w-8 text-[#F0801C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                    <p className="text-gray-300 leading-relaxed">IS 4159 & ASME Certified products with rigorous quality standards</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F0801C]/20 rounded-xl">
                    <Award className="h-8 w-8 text-[#F0801C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">50+ Years Experience</h3>
                    <p className="text-gray-300 leading-relaxed">Five decades of expertise in industrial heating solutions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#F0801C]/20 rounded-xl">
                    <Globe className="h-8 w-8 text-[#F0801C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                    <p className="text-gray-300 leading-relaxed">Serving industries across India and 10+ countries worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;