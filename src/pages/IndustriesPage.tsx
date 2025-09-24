import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Factory, Droplets, Fuel, Zap, Building, Cpu, Users, Globe, ArrowRight, ChevronRight, Award, FlaskConical, Flame, Wind, Settings } from 'lucide-react';

const IndustriesPage = () => {
  const industries = [
  {
    id: 'metals',
    title: 'Metals',
    subtitle: 'Metal Processing, Forging & Treatment',
    description: 'Advanced heating solutions for metal processing, forging, and treatment applications with precise temperature control.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Metal forging heating',
    'Steel processing',
    'Electroplating systems',
    'Anodizing operations',
    'Heat treatment furnaces',
    'Surface finishing'],

    keyBenefits: [
    'High-temperature capability',
    'Corrosion resistance',
    'Precise control',
    'Long service life']

  },
  {
    id: 'petrochemicals',
    title: 'Petrochemicals',
    subtitle: 'Petrochemical Processing & Refining',
    description: 'Specialized heating equipment for petrochemical processing and refining operations.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Refinery process heating',
    'Catalyst heating systems',
    'Custom heating elements',
    'Pipeline heating',
    'Storage tank heating',
    'Distillation heating'],

    keyBenefits: [
    'Explosion-proof designs',
    'High-pressure ratings',
    'Chemical resistance',
    'Remote monitoring']

  },
  {
    id: 'power',
    title: 'Power Generation',
    subtitle: 'Nuclear, Solar, Gas & Thermal Power',
    description: 'Reliable heating systems for power generation and electrical infrastructure applications.',
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
    id: 'chemicals',
    title: 'Chemicals',
    subtitle: 'Chemical Processing & Manufacturing',
    description: 'Precision heating solutions for chemical processing and manufacturing applications.',
    icon: FlaskConical,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Chemical reactor heating',
    'Distillation column heating',
    'Polymer processing',
    'Catalyst regeneration',
    'Heat exchangers',
    'Process vessels'],

    keyBenefits: [
    'Chemical compatibility',
    'Precise temperature control',
    'Energy efficiency',
    'Safety compliance']

  },
  {
    id: 'oil-gas',
    title: 'Oil & Gas',
    subtitle: 'Upstream, Midstream & Downstream Operations',
    description: 'Heavy-duty heating equipment for oil and gas extraction and processing operations.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1613123432717-e1cd14e5e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Pipeline heating systems',
    'Offshore platform heaters',
    'Wellhead heating',
    'Crude oil heating',
    'Natural gas processing',
    'Separator heating'],

    keyBenefits: [
    'Weather resistant',
    'Marine grade',
    'Freeze protection',
    'Remote monitoring']

  },
  {
    id: 'pharmaceuticals',
    title: 'Pharmaceuticals',
    subtitle: 'Pharmaceutical Manufacturing Processes',
    description: 'Clean room compatible heating solutions for pharmaceutical manufacturing processes.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Pharmaceutical processing',
    'Vaccine production',
    'Tablet coating',
    'Clean room heating',
    'Sterilization processes',
    'API manufacturing'],

    keyBenefits: [
    'Clean room compliant',
    'GMP standards',
    'Uniform temperature',
    'Validation support']

  },
  {
    id: 'new-industries',
    title: 'New Industries',
    subtitle: 'Emerging Industrial Applications',
    description: 'Innovative heating technologies for emerging industrial applications and processes.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'IoT-enabled smart heaters',
    'Renewable energy heating',
    'Advanced control systems',
    'Green technology',
    'Automation integration',
    'Digital monitoring'],

    keyBenefits: [
    'IoT connectivity',
    'Smart controls',
    'Energy optimization',
    'Future-ready design']

  },
  {
    id: 'oem-epc',
    title: 'OEM & EPC',
    subtitle: 'Original Equipment & Engineering',
    description: 'Custom engineered heating solutions for OEMs and EPC contractors worldwide.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Customised heating equipment',
    'Modular heating systems',
    'Turnkey solutions',
    'Engineering design',
    'Project management',
    'Installation support'],

    keyBenefits: [
    'Custom design',
    'Complete packages',
    'Engineering support',
    'Global delivery']

  },
  {
    id: 'industrial-gases',
    title: 'Industrial Gases',
    subtitle: 'Compressed Air & Gas Processing',
    description: 'Specialized heating systems for industrial gas production and handling operations.',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Air heaters',
    'Nitrogen heating systems',
    'Oxygen gas heaters',
    'Compressed air heating',
    'Gas drying systems',
    'Specialty gas production'],

    keyBenefits: [
    'Energy efficiency',
    'Inert atmosphere',
    'Oxygen safe design',
    'System reliability']

  },
  {
    id: 'water-treatment',
    title: 'Water Treatment',
    subtitle: 'Municipal & Industrial Water Processing',
    description: 'Corrosion-resistant heating solutions for water treatment and purification processes.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Water treatment heating',
    'Wastewater treatment',
    'Desalination plants',
    'Digester heating',
    'Chemical dosing systems',
    'Evaporator systems'],

    keyBenefits: [
    'Corrosion resistant',
    'Chemical resistant',
    'Salt resistant',
    'Environmental compliance']

  },
  {
    id: 'food-processing',
    title: 'Food Processing',
    subtitle: 'Food & Beverage Manufacturing',
    description: 'Food-grade heating solutions for food and beverage processing applications with strict hygiene standards.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: [
    'Food processing heating',
    'Beverage production',
    'Pasteurization systems',
    'Cooking equipment',
    'Cleaning systems',
    'Steam generation'],

    keyBenefits: [
    'Food-grade materials',
    'Hygienic design',
    'Easy cleaning',
    'Temperature accuracy']

  }];


  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section - Reduced Height ~500px */}
      <section className="relative bg-gradient-to-br from-slate-100 via-blue-50/30 to-orange-50/20 text-slate-900 pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden" style={{ minHeight: '500px' }}>
        
        {/* Background Elements from About Page */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1' opacity='0.3'%3E%3Cpath d='M10 10h80v80H10V10zm10 10h60v60H20V20zm10 10h40v40H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          ></div>

          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#F0801C]/10 to-[#D6701A]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1'%3E%3Cpath d='M30 5l20 11v22L30 49 10 38V16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>

          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F0801C]/8 via-transparent to-transparent transform skew-x-12 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent transform -skew-y-12"></div>

          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#F0801C]/20 rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 border-2 border-[#F0801C]/30 rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(90deg, #F0801C 1px, transparent 1px), linear-gradient(#F0801C 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Industries</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-4 py-2 mb-6 backdrop-blur-sm">
                    <Factory className="w-4 h-4 mr-2" />
                    Industries We Serve
                  </Badge>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Trusted
                    <span className="block text-[#F0801C] mt-2">
                      Solutions
                    </span>
                  </h1>
                  
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Explore Industries
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80">
                    <Award className="w-5 h-5" />
                    Our Expertise
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Factory className="h-12 w-12 text-[#F0801C] mx-auto mb-3" />
                      <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                      <div className="text-slate-600 text-sm font-medium">Years Experience</div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <Globe className="h-12 w-12 text-[#F0801C] mx-auto mb-3" />
                      <div className="text-3xl font-bold text-slate-900 mb-1">10+</div>
                      <div className="text-slate-600 text-sm font-medium">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-slate-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120V60c0,0,200-40,400-40s400,40,400,40s200-40,400-40v100H0z"></path>
          </svg>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Industries Grid Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Industries We Serve
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover our specialized heating solutions tailored for your industry's unique requirements
              </p>
            </div>

            {/* Clean Industry Cards Grid - 3 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Enhanced Industry Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-slate-700 border-white/50 backdrop-blur-sm text-xs font-medium">
                        Industry
                      </Badge>
                    </div>
                  </div>

                  {/* Enhanced Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#F0801C] transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-[#F0801C] font-semibold mb-3">
                      {industry.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Key Applications Preview */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-slate-800 mb-2 uppercase tracking-wide">Key Applications:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.applications.slice(0, 3).map((app, idx) => (
                          <span key={idx} className="inline-block bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-medium">
                            {app}
                          </span>
                        ))}
                        {industry.applications.length > 3 && (
                          <span className="inline-block bg-[#F0801C]/10 text-[#F0801C] text-xs px-2.5 py-1 rounded-full font-medium">
                            +{industry.applications.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Navigation Button */}
                    <Link 
                      to={`/industries/${industry.id}/products`}
                      className="w-full bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105 no-underline text-sm"
                    >
                      View Products
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Discuss Your Industry Requirements?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our industry experts can help you find the perfect heating solution for your specific application and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Contact Our Experts
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/10 flex items-center justify-center gap-2">
                <Factory className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default IndustriesPage;