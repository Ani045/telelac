import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
  Shield
} from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      title: 'Electric Heater Bundles and Inline Process Heaters',
      description: 'High-efficiency electric heater bundles designed for inline process heating applications across multiple industries.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['High Efficiency', 'Inline Installation', 'Process Heating', 'Multiple Configurations'],
      industries: ['Power', 'Oil & Gas', 'Petrochemicals', 'Chemicals']
    },
    {
      id: 2,
      title: 'Air Heaters',
      description: 'Industrial air heating systems for process air heating, space heating, and ventilation applications.',
      icon: Wind,
      image: 'https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Energy Efficient', 'Multiple Sizes', 'Process Air Heating', 'Temperature Control'],
      industries: ['Industrial Gases', 'Power', 'Manufacturing', 'HVAC']
    },
    {
      id: 3,
      title: 'Heaters for Metal Finishing Tanks',
      description: 'Corrosion-resistant immersion heaters specifically designed for electroplating, anodizing, and metal finishing operations.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Corrosion Resistant', 'Chemical Compatible', 'Precise Control', 'Long Service Life'],
      industries: ['Metals', 'Automotive', 'Electronics', 'Aerospace']
    },
    {
      id: 4,
      title: 'Heater Control Panels',
      description: 'Advanced control systems for precise temperature management and monitoring of industrial heating equipment.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Digital Control', 'Remote Monitoring', 'Safety Features', 'Custom Configuration'],
      industries: ['All Industries', 'Process Control', 'Automation', 'Safety Systems']
    },
    {
      id: 5,
      title: 'Customised Heating Equipment',
      description: 'Engineered-to-order heating solutions designed to meet specific process requirements and operating conditions.',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Custom Design', 'Application Specific', 'Engineering Support', 'Turnkey Solutions'],
      industries: ['OEM & EPC', 'New Industries', 'Special Projects', 'R&D']
    },
    {
      id: 6,
      title: 'Standard and Custom Heating Elements',
      description: 'Comprehensive range of tubular, cartridge, and specialty heating elements for industrial applications.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Wide Range', 'Custom Specifications', 'High Quality', 'Fast Delivery'],
      industries: ['Pharmaceuticals', 'Food Processing', 'Chemicals', 'Water Treatment']
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
      {/* Banner-Style Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Industrial Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Products</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <Badge className="bg-[#F0801C]/20 text-[#F0801C] border-[#F0801C]/30 px-4 py-2 mb-4 backdrop-blur-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Since 1971
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Industrial
                  <span className="block text-[#F0801C] mt-2">
                    Heating Products
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Telelec is a leading manufacturer of industrial heaters, delivering reliable heating solutions across all industries worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Phone className="w-5 h-5" />
                    Request Quote
                  </button>
                  <button className="border-2 border-white/30 hover:border-[#F0801C] text-white hover:text-[#F0801C] hover:bg-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm">
                    <FileText className="w-5 h-5" />
                    Download Catalog
                  </button>
                </div>
              </div>

              {/* Right Content - Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                  <Shield className="w-8 h-8 text-[#F0801C] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">Certified Quality</h3>
                  <p className="text-slate-300 text-sm">IS 4159 & ASME compliant</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                  <Factory className="w-8 h-8 text-[#F0801C] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">All Industries</h3>
                  <p className="text-slate-300 text-sm">Universal applications</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                  <Settings className="w-8 h-8 text-[#F0801C] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">Custom Design</h3>
                  <p className="text-slate-300 text-sm">Tailored solutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                  <Award className="w-8 h-8 text-[#F0801C] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">50+ Years</h3>
                  <p className="text-slate-300 text-sm">Proven expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Our Product Range
              </h2>
              <div className="w-24 h-1 bg-[#F0801C] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive heating solutions designed for industrial excellence
              </p>
            </div>

            {/* Products Grid - 2 columns for better B2B presentation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                    {/* Image Section - 2/5 */}
                    <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center shadow-lg">
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section - 3/5 */}
                    <div className="md:col-span-3 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F0801C] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-slate-800 mb-2 uppercase tracking-wide">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-xs text-slate-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Industries */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-slate-800 mb-2 uppercase tracking-wide">Suitable For:</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {product.industries.slice(0, 3).map((industry, idx) => (
                              <span key={idx} className="inline-block bg-[#F0801C]/10 text-[#F0801C] text-xs px-2.5 py-1 rounded-full font-medium">
                                {industry}
                              </span>
                            ))}
                            {product.industries.length > 3 && (
                              <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium">
                                +{product.industries.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex gap-3 mt-4">
                        <button className="flex-1 bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white py-2.5 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg">
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        {product.id === 2 ? (
                          <Link to="/products/air-heaters" className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center">
                            Details
                          </Link>
                        ) : (
                          <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300">
                            Details
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Need Help Selecting the Right Product?
            </h2>
            <p className="text-lg mb-6 text-white/90">
              Our technical team can recommend the ideal heating solution for your application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Technical Team
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
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