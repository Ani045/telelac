import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Factory, ArrowRight, ChevronRight, ExternalLink, Package, Star, Award } from 'lucide-react';

const IndustryProductsPage = () => {
  const { industryId } = useParams<{ industryId: string }>();

  const industryData = {
    'process-industry': {
      title: 'Process Industry',
      description: 'Chemicals, Fertilizers, Petrochemicals, Cement',
      products: [
        {
          id: 'air-heaters',
          name: 'Air Heaters',
          description: 'High-efficiency air heating systems designed for process industry applications',
          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['High Temperature Capability', 'Corrosion Resistant', 'Energy Efficient'],
          applications: ['Chemical Processing', 'Fertilizer Production', 'Cement Manufacturing']
        },
        {
          id: 'electric-heater-bundles',
          name: 'Electric Heater Bundles & Inline Process Heaters',
          description: 'Custom-designed heater bundles for inline process heating applications',
          image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Modular Design', 'Precise Temperature Control', 'Easy Maintenance'],
          applications: ['Petrochemical Plants', 'Chemical Reactors', 'Process Streams']
        },
        {
          id: 'heater-control-panels',
          name: 'Heater Control Panels',
          description: 'Advanced control systems for precise temperature management',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Digital Control', 'Safety Interlocks', 'Remote Monitoring'],
          applications: ['Process Control', 'Safety Systems', 'Automation']
        },
        {
          id: 'customised-heating-equipment',
          name: 'Customised Heating Equipment',
          description: 'Tailor-made heating solutions for specific process requirements',
          image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Custom Engineering', 'Application Specific', 'Performance Optimized'],
          applications: ['Specialized Processes', 'Unique Requirements', 'Custom Applications']
        }
      ]
    },
    'industrial-gases': {
      title: 'Industrial Gases / Compressed Air Heating',
      description: 'Nitrogen, Hydrogen, Oxygen, Air Separation Units, Air Dryers',
      products: [
        {
          id: 'air-heaters',
          name: 'Air Heaters',
          description: 'Specialized air heating systems for industrial gas applications',
          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Gas Compatibility', 'Explosion Proof', 'High Purity'],
          applications: ['Air Separation Units', 'Gas Processing', 'Air Dryers']
        },
        {
          id: 'heater-bundles',
          name: 'Heater Bundles / Inline Process Heaters',
          description: 'Inline heating solutions for gas processing applications',
          image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Gas Safe Design', 'Uniform Heating', 'Compact Installation'],
          applications: ['Gas Preheating', 'Process Streams', 'Compressed Air']
        },
        {
          id: 'heating-elements',
          name: 'Standard & Custom Heating Elements',
          description: 'High-quality heating elements for industrial gas applications',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Material Compatibility', 'Long Life', 'Reliable Performance'],
          applications: ['Gas Heating', 'Temperature Maintenance', 'Process Control']
        }
      ]
    },
    'oil-gas': {
      title: 'Oil & Gas',
      description: 'Desalination, SWRO, RO‐CIP, ZLD',
      products: [
        {
          id: 'electric-heater-bundles',
          name: 'Electric Heater Bundles & Inline Process Heaters',
          description: 'Robust heating solutions for oil and gas operations',
          image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Explosion Proof', 'Hazardous Area Rated', 'Heavy Duty Construction'],
          applications: ['Oil Processing', 'Gas Processing', 'Desalination']
        },
        {
          id: 'customised-heating-equipment',
          name: 'Customised Heating Equipment',
          description: 'Specialized heating equipment for harsh oil and gas environments',
          image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Corrosion Resistant', 'High Pressure Rated', 'Custom Engineered'],
          applications: ['Offshore Platforms', 'Refineries', 'Pipeline Heating']
        },
        {
          id: 'heating-elements',
          name: 'Standard & Custom Heating Elements',
          description: 'Durable heating elements for oil and gas applications',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Chemical Resistant', 'High Temperature', 'Maintenance Free'],
          applications: ['Process Heating', 'Tank Heating', 'Pipeline Maintenance']
        }
      ]
    },
    'metals-minerals': {
      title: 'Metals & Minerals Refining / Production',
      description: 'Advanced heating solutions for metal processing, forging, and treatment',
      products: [
        {
          id: 'customised-heating-equipment',
          name: 'Customised Heating Equipment',
          description: 'Heavy-duty heating equipment for metals and minerals processing',
          image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['High Temperature Rating', 'Thermal Shock Resistant', 'Industrial Grade'],
          applications: ['Metal Processing', 'Forging Operations', 'Heat Treatment']
        },
        {
          id: 'electric-heater-bundles',
          name: 'Electric Heater Bundles & Inline Process Heaters',
          description: 'Robust inline heating solutions for metal processing',
          image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Heavy Duty Construction', 'Precise Control', 'Long Service Life'],
          applications: ['Metal Heating', 'Process Streams', 'Temperature Control']
        },
        {
          id: 'heating-elements',
          name: 'Standard & Custom Heating Elements',
          description: 'High-performance heating elements for metals industry',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['High Power Density', 'Oxidation Resistant', 'Custom Shapes'],
          applications: ['Furnace Heating', 'Metal Treatment', 'Temperature Maintenance']
        }
      ]
    },
    'water-treatment': {
      title: 'Water Treatment',
      description: 'All metals with some finishing and paint finishing',
      products: [
        {
          id: 'metal-finishing-tanks',
          name: 'Heaters for Metal Finishing Tanks',
          description: 'Specialized heaters for metal finishing and treatment processes',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Chemical Resistant', 'Uniform Heating', 'Easy Maintenance'],
          applications: ['Electroplating', 'Anodizing', 'Paint Finishing']
        },
        {
          id: 'customised-heating-equipment',
          name: 'Customised Heating Equipment',
          description: 'Custom heating solutions for water treatment applications',
          image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Corrosion Resistant', 'Sanitary Design', 'Energy Efficient'],
          applications: ['Water Heating', 'Chemical Processing', 'Treatment Tanks']
        },
        {
          id: 'heating-elements',
          name: 'Standard & Custom Heating Elements',
          description: 'Corrosion-resistant heating elements for water treatment',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Stainless Steel Construction', 'Low Maintenance', 'Long Life'],
          applications: ['Tank Heating', 'Process Control', 'Temperature Maintenance']
        }
      ]
    },
    'power-generation': {
      title: 'Power Generation',
      description: 'Nuclear / Solar / Gas / Thermal, ZLD',
      products: [
        {
          id: 'air-heaters',
          name: 'Air Heaters',
          description: 'High-efficiency air heaters for power generation applications',
          image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['High Efficiency', 'Reliable Operation', 'Low Emissions'],
          applications: ['Thermal Plants', 'Solar Heating', 'Power Systems']
        },
        {
          id: 'electric-heater-bundles',
          name: 'Electric Heater Bundles & Inline Process Heaters',
          description: 'Reliable heating systems for power generation facilities',
          image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['Nuclear Grade', 'Safety Certified', 'High Reliability'],
          applications: ['Nuclear Plants', 'Gas Turbines', 'Steam Systems']
        },
        {
          id: 'heating-elements',
          name: 'Standard & Custom Heating Elements',
          description: 'High-quality heating elements for power generation',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          features: ['High Temperature Rating', 'Radiation Resistant', 'Long Service Life'],
          applications: ['Power Systems', 'Heat Exchangers', 'Process Heating']
        }
      ]
    }
  };

  const currentIndustry = industryData[industryId as keyof typeof industryData];

  if (!currentIndustry) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
          <Link to="/industries" className="text-[#F0801C] hover:underline">
            Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt={currentIndustry.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-orange-50/75"></div>
        </div>

        <div className="relative z-10 container mx-auto px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Link to="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/industries" className="hover:text-[#F0801C] transition-colors duration-200">Industries</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">{currentIndustry.title}</span>
            </div>
          </nav>

          <div className="max-w-4xl">
            <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-3 py-1 mb-4">
              <Factory className="w-4 h-4 mr-1" />
              {currentIndustry.title}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              <span className="text-[#F0801C]">Products</span> for {currentIndustry.title}
            </h1>
            
            <p className="text-lg text-slate-600 mb-6">
              {currentIndustry.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg">
                <Package className="w-5 h-5" />
                View All Products
              </button>
              <Link 
                to="/contact"
                className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Our Products for {currentIndustry.title}
              </h2>
              <div className="w-20 h-1 bg-[#F0801C] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Discover our comprehensive range of heating solutions specifically designed for {currentIndustry.title.toLowerCase()} applications.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentIndustry.products.map((product, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-full flex items-center justify-center shadow-lg">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#F0801C] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, i) => (
                          <span key={i} className="text-xs bg-[#F0801C]/10 text-[#F0801C] px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Applications:</h4>
                      <div className="text-sm text-slate-600">
                        {product.applications.slice(0, 2).join(', ')}
                        {product.applications.length > 2 && '...'}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link 
                        to={`/products/${product.id}`}
                        className="flex-1 bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-4 py-2 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link 
                        to="/contact"
                        className="px-4 py-2 border border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Choose Our Solutions for {currentIndustry.title}?
              </h2>
              <div className="w-20 h-1 bg-[#F0801C] rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Industry Expertise</h3>
                <p className="text-slate-600">
                  50+ years of experience serving the {currentIndustry.title.toLowerCase()} sector with specialized solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Assured</h3>
                <p className="text-slate-600">
                  All products meet industry standards and are rigorously tested for reliability and performance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Solutions</h3>
                <p className="text-slate-600">
                  Tailored heating solutions designed to meet your specific operational requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find the Perfect Solution for Your {currentIndustry.title} Needs?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Contact our experts to discuss your specific requirements and get a customized heating solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-[#F0801C] hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Get Expert Consultation
              </Link>
              <Link 
                to="/industries"
                className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                View All Industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryProductsPage;