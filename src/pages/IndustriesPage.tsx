import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Factory, Droplets, Fuel, Zap, Building, Cpu, Users, Globe, ArrowRight, ChevronRight, Award, FlaskConical, Flame, Wind, Settings } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
    {
      id: 'chemicals',
      title: 'Chemicals',
      description: 'Precision heating solutions for chemical processing and manufacturing applications.',
      icon: FlaskConical,
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'food-processing',
      title: 'Food Processing',
      description: 'Food-grade heating solutions with strict hygiene standards.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'industrial-gases',
      title: 'Industrial Gases',
      description: 'Specialized heating systems for industrial gas production and handling.',
      icon: Wind,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'metals',
      title: 'Metals',
      description: 'Advanced heating solutions for metal processing, forging, and treatment.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'new-industries',
      title: 'New Industries',
      description: 'Innovative heating technologies for emerging industrial applications.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'oem-epc',
      title: 'OEM & EPC',
      description: 'Custom engineered heating solutions for OEMs and EPC contractors.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas',
      description: 'Heavy-duty heating equipment for oil and gas operations.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1613123432717-e1cd14e5e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'petrochemicals',
      title: 'Petrochemicals',
      description: 'Specialized heating equipment for petrochemical processing and refining.',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pharmaceuticals',
      title: 'Pharmaceuticals',
      description: 'Clean room compatible heating solutions for pharmaceutical manufacturing.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'power',
      title: 'Power Generation',
      description: 'Reliable heating systems for power generation and electrical infrastructure.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'water-treatment',
      title: 'Water Treatment',
      description: 'Corrosion-resistant heating solutions for water treatment and purification.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
  ];

  const stats = [
    { number: '50+', label: 'Years Experience', icon: Award },
    { number: '11', label: 'Industries Served', icon: Factory },
    { number: '10+', label: 'Countries', icon: Globe },
    { number: '3000+', label: 'Installations', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner-Style Hero Section - Same as About Page */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Industrial Heating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Industries</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div>
                  <Badge className="bg-[#F0801C]/20 text-[#F0801C] border-[#F0801C]/30 px-4 py-2 mb-6 backdrop-blur-sm">
                    <Factory className="w-4 h-4 mr-2" />
                    Industries We Serve
                  </Badge>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Industry-Specific
                    <span className="block text-[#F0801C] mt-2">
                      Heating Solutions
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
                    Delivering specialized heating equipment tailored to meet the unique demands of diverse industrial sectors worldwide.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-white/30 hover:border-[#F0801C] text-white hover:text-[#F0801C] hover:bg-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm">
                    <Users className="w-5 h-5" />
                    Contact Sales
                  </button>
                </div>
              </div>

              {/* Right Content - Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/15 hover:shadow-lg transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-[#F0801C] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Industries Grid Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Industries We Serve
              </h2>
              <div className="w-24 h-1 bg-[#F0801C] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Browse our comprehensive range of industry-specific heating solutions
              </p>
            </div>

            {/* Compact Industry Cards Grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Compact Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-lg flex items-center justify-center shadow-lg">
                        <industry.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Compact Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#F0801C] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* View Products Link */}
                    <div className="flex items-center text-[#F0801C] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      View Products
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compact CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Need a Custom Solution for Your Industry?
            </h2>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Our experts can help you find the perfect heating solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Contact Our Experts
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;