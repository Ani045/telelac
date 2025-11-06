import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Wind, 
  Wrench, 
  Settings, 
  Thermometer, 
  Flame,
  ChevronRight,
  ArrowRight,
  Factory,
  CheckCircle,
  Award,
  Phone,
  FileText,
  Shield,
  ExternalLink
} from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      title: 'Electric Heater Bundles & Inline Process Heaters',
      description: 'High-performance electric heating solutions up to 1MW for extreme industrial conditions',
      icon: Zap,
      image: '/electric-heater/6.png',
      features: ['Up to 1MW Power', '600°C Temperature', '300 bar Pressure', 'ASME Compliant'],
      industries: ['Power', 'Oil & Gas', 'Petrochemicals', 'Chemicals'],
      specs: ['1000kW', '600°C', '300bar'],
      link: '/products/electric-heater-bundles'
    },
    {
      id: 2,
      title: 'Air Heaters',
      description: 'Industrial air heating systems with replaceable elements up to 400kW',
      icon: Wind,
      image: '/air-heater/1.png',
      features: ['400kW Single Assembly', 'IP65 Protection', 'Replaceable Elements', 'Low Pressure Drop'],
      industries: ['Industrial Gases', 'Power', 'Manufacturing', 'HVAC'],
      specs: ['400kW', 'IP65', '6mm'],
      link: '/products/air-heaters'
    },
    {
      id: 3,
      title: 'Heaters for Metal Finishing Tanks',
      description: 'Corrosion-resistant immersion heaters for electroplating and metal finishing',
      icon: Wrench,
      image: '/heaters-for-metal-finishing/18.png',
      features: ['Corrosion Resistant', 'Chemical Compatible', 'Precise Control', 'Long Service Life'],
      industries: ['Metals', 'Automotive', 'Electronics', 'Aerospace'],
      specs: ['Multi-Material', 'Chemical Resistant', 'Custom'],
      link: '/products/metal-finishing-tanks'
    },
    {
      id: 4,
      title: 'Heater Control Panels',
      description: 'Advanced control systems for precise temperature management and monitoring',
      icon: Settings,
      image: '/heater-control-panel/15.png',
      features: ['Digital Control', 'Remote Monitoring', 'Safety Features', 'Custom Configuration'],
      industries: ['All Industries', 'Process Control', 'Automation', 'Safety'],
      specs: ['Digital', 'Remote', 'Safety'],
      link: '/products/heater-control-panels'
    },
    {
      id: 5,
      title: 'Customised Heating Equipment',
      description: 'Engineered-to-order heating solutions for specific process requirements',
      icon: Thermometer,
      image: '/customised-heating/1.png',
      features: ['Custom Design', 'Application Specific', 'Engineering Support', 'Turnkey Solutions'],
      industries: ['OEM & EPC', 'New Industries', 'Special Projects', 'R&D'],
      specs: ['Custom', 'Engineered', 'Turnkey'],
      link: '/products/customised-heating-equipment'
    },
    {
      id: 6,
      title: 'Standard & Custom Heating Elements',
      description: 'Comprehensive range of tubular, cartridge, and specialty heating elements',
      icon: Flame,
      image: '/standard-and-custom/22.png',
      features: ['Wide Range', 'Custom Specifications', 'High Quality', 'Fast Delivery'],
      industries: ['Pharmaceuticals', 'Food Processing', 'Chemicals', 'Water Treatment'],
      specs: ['Standard', 'Custom', 'Fast Delivery'],
      link: '/products/heating-elements'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Factory },
    { id: 'process', name: 'Process Heating', icon: Zap },
    { id: 'control', name: 'Control Systems', icon: Settings },
    { id: 'custom', name: 'Custom Solutions', icon: Thermometer }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Wider Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Industrial Products"
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
              <span className="text-slate-900 font-medium">Products</span>
            </div>
          </nav>

          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-center">
              {/* Left Content - Compact */}
              <div className="lg:col-span-2 space-y-2 sm:space-y-3">
                <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-3 py-1">
                  <Award className="w-4 h-4 mr-1" />
                  Since 1971
                </Badge>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Industrial <span className="text-[#F0801C]">Heating Products</span>
                </h1>
                
                <p className="text-xs sm:text-sm md:text-base text-slate-600">
                  Comprehensive heating solutions designed for industrial excellence across all industries worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-1 sm:pt-2">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-xs sm:text-sm">
                    <Phone className="w-4 h-4" />
                    Request Quote
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-xs sm:text-sm">
                    <FileText className="w-4 h-4" />
                    Download Catalog
                  </button>
                </div>
              </div>

              {/* Right - Compact Stats Grid */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Certified</h3>
                  <p className="text-xs text-slate-600">IS 4159 & ASME</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <Factory className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Universal</h3>
                  <p className="text-xs text-slate-600">All Industries</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 border border-slate-200 shadow-sm text-center">
                  <Settings className="w-5 sm:w-6 h-5 sm:h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900">Custom</h3>
                  <p className="text-xs text-slate-600">Tailored Solutions</p>
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

      {/* Horizontal Layout Products Grid Section */}
      <section className="py-6 sm:py-8 lg:py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-8xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-slate-900 mb-2 sm:mb-3">
                Our Product Range
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#F0801C] rounded-full mx-auto mb-3 sm:mb-4"></div>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
                Comprehensive heating solutions designed for industrial excellence
              </p>
            </div>

            {/* Horizontal Products Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Image Section - Top */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-3 left-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-lg flex items-center justify-center shadow-lg">
                        <product.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Quick Specs */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                      {product.specs.map((spec, idx) => (
                        <span key={idx} className="bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Section - Bottom */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#F0801C] transition-colors duration-300 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features - Show all 4 */}
                    <div className="mb-2 sm:mb-3 lg:mb-4 flex-grow">
                      <div className="grid grid-cols-1 gap-1 sm:gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-700 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="mb-2 sm:mb-3 lg:mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.industries.slice(0, 3).map((industry, idx) => (
                          <span key={idx} className="inline-block bg-[#F0801C]/10 text-[#F0801C] text-xs px-2 py-0.5 rounded-full font-medium">
                            {industry}
                          </span>
                        ))}
                        {product.industries.length > 3 && (
                          <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-medium">
                            +{product.industries.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-1 sm:gap-2 mt-auto">
                      <button className="flex-1 bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all duration-300 shadow-md hover:shadow-lg">
                        Get Quote
                        <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                      </button>
                      {product.link ? (
                        <a href={product.link} className="border-2 border-slate-300 hover:border-[#F0801C] hover:bg-[#F0801C] hover:text-white text-slate-700 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2">
                          Details
                          <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                        </a>
                      ) : (
                        <button className="border-2 border-slate-300 hover:border-[#F0801C] hover:bg-[#F0801C] hover:text-white text-slate-700 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2">
                          Details
                          <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-6 sm:py-8 lg:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">
              Need Help Selecting the Right Product?
            </h2>
            <p className="text-sm sm:text-base mb-4 sm:mb-6 text-white/90 max-w-2xl mx-auto">
              Our technical team can recommend the ideal heating solution for your application
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
              <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
                <Phone className="w-5 h-5" />
                Contact Technical Team
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <FileText className="w-5 h-5" />
                Request Product Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;