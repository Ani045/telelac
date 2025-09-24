import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Shield, 
  Users, 
  Target, 
  Factory, 
  Globe, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Zap, 
  Settings, 
  TestTube,
  ArrowRight,
  Play,
  ChevronDown,
  ChevronUp,
  ChevronRight
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { number: '50+', label: 'Years Experience' },
    { number: '10+', label: 'Countries Served' },
    { number: '1000+', label: 'Installations' },
    { number: '100%', label: 'Quality Assured' }
  ];

  const whyChooseUs = [
    { title: '50+ Years of Proven Experience', description: 'Product quality and features refined over four decades of continuous innovation and improvement.', icon: Star, color: 'from-[#F0801C] to-[#D6701A]' },
    { title: 'Lightning-Fast Response', description: 'Dedicated customer service - we never miss responding to customer inquiries and requirements.', icon: Zap, color: 'from-blue-500 to-blue-600' },
    { title: 'Customer-Centric Approach', description: 'Dedicated to providing exceptional customer experience and building long-term partnerships.', icon: Users, color: 'from-green-500 to-green-600' },
    { title: 'Exceptional Value', description: 'Quality, durable products at competitive prices with unmatched return on investment.', icon: Target, color: 'from-purple-500 to-purple-600' }
  ];

  const timeline = [
    { year: '1971', title: 'Company Founded', description: 'Started as a small manufacturer of heating elements' },
    { year: '1985', title: 'Presidential Recognition', description: 'Entrepreneur\'s Award from President of India' },
    { year: '1995', title: 'International Expansion', description: 'Extended operations across multiple countries' },
    { year: '2005', title: 'Quality Certifications', description: 'Achieved comprehensive industry certifications' },
    { year: '2024', title: '50+ Years Strong', description: 'Operations in 10+ countries with industry leadership' }
  ];

  const capabilities = [
    { title: 'Standards Compliance', items: ['IS 4159, IS/IEC 60079', 'ASME Sec. VIII, TEMA'], icon: Shield },
    { title: 'Manufacturing', items: ['Tubular heating elements', 'Ceramic elements', 'Heater assemblies'], icon: Factory },
    { title: 'Design Engineering', items: ['PVElite mechanical design', 'HTRI thermal design'], icon: Settings },
    { title: 'Testing & Fabrication', items: ['200 bar hydrostatic test', 'GTAW welding equipment'], icon: TestTube }
  ];

  const tabContent = {
    overview: (
      <div className="space-y-8">
        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Industry Leaders Choose Telelec</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border-l-4 border-[#F0801C]">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#F0801C]" />
              <h4 className="text-lg font-bold text-slate-900">Quality Policy</h4>
            </div>
            <p className="text-slate-600 text-sm">
              Committed to achieving the highest level of customer satisfaction by providing quality electrical heating products, solutions and services with innovation and continual improvement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border-l-4 border-[#F0801C]">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#F0801C]" />
              <h4 className="text-lg font-bold text-slate-900">Our Philosophy</h4>
            </div>
            <p className="text-slate-600 text-sm">
              With 50+ years of experience, we've evolved from heating elements manufacturer to a leading provider of custom-designed electric heating equipment and comprehensive solutions.
            </p>
          </div>
        </div>
      </div>
    ),
    timeline: (
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Journey Through Time</h3>
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                {item.year.slice(-2)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
                <span className="text-xs text-[#F0801C] font-medium">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    capabilities: (
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Manufacturing Excellence</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold">{capability.title}</h4>
              </div>
              <ul className="space-y-2">
                {capability.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#F0801C] flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section with Rich Background */}
      <section className="relative bg-gradient-to-br from-slate-100 via-blue-50/30 to-orange-50/20 text-slate-900 pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
        
        {/* Complex Background Layers */}
        <div className="absolute inset-0">
          {/* Industrial Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1' opacity='0.3'%3E%3Cpath d='M10 10h80v80H10V10zm10 10h60v60H20V20zm10 10h40v40H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          ></div>

          {/* Geometric Shapes */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#F0801C]/10 to-[#D6701A]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Hexagonal Pattern */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1'%3E%3Cpath d='M30 5l20 11v22L30 49 10 38V16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          ></div>

          {/* Circuit Board Pattern */}
          <div 
            className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-15"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F0801C' stroke-width='1'%3E%3Cpath d='M20 20h40v40H20V20zm10 10h20v20H30V30z'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='60' cy='20' r='3'/%3E%3Ccircle cx='20' cy='60' r='3'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          ></div>

          {/* Diagonal Industrial Lines */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F0801C]/8 via-transparent to-transparent transform skew-x-12 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent transform -skew-y-12"></div>

          {/* Floating Geometric Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#F0801C]/20 rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-6 h-6 border-2 border-[#F0801C]/30 rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500/20 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>

          {/* Technical Lines Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(90deg, #F0801C 1px, transparent 1px), linear-gradient(#F0801C 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Simple Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">About Us</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content - Clean Typography */}
              <div className="space-y-6">
                <div>
                  <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-4 py-2 mb-6 backdrop-blur-sm">
                    <Award className="w-4 h-4 mr-2" />
                    Since 1971
                  </Badge>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    About
                    <span className="block text-[#F0801C] mt-2">
                      Telelec
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    For over five decades, we've been engineering reliable electric heating solutions that industries depend on worldwide.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Our Story
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80">
                    <Factory className="w-5 h-5" />
                    Our Capabilities
                  </button>
                </div>
              </div>

              {/* Right Content - Enhanced Cards */}
              <div className="space-y-6">
                {/* Presidential Award - Glass Morphism */}
                <div className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F0801C]/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Presidential Recognition</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-2">
                        Entrepreneur's Award by Hon'ble President of India Shri Zail Singh to founder Mr. R.C. Aggarwal
                      </p>
                      <span className="inline-block bg-[#F0801C]/10 text-[#F0801C] px-3 py-1 rounded-full text-xs font-semibold">1985</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                        <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-slate-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120V60c0,0,200-40,400-40s400,40,400,40s200-40,400-40v100H0z"></path>
          </svg>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute top-1/3 left-10 animate-float">
          <div className="w-8 h-8 border-2 border-[#F0801C]/30 rotate-45 transform"></div>
        </div>
        <div className="absolute top-2/3 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-[#F0801C]/20 rounded-full"></div>
        </div>

        {/* Custom CSS for floating animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* About Section with Tabs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                About Telelec
              </h2>
              <div className="w-24 h-1 bg-[#F0801C] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover our story, capabilities, and commitment to excellence
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { id: 'overview', label: 'Overview', icon: Star },
                { id: 'timeline', label: 'Our Journey', icon: Calendar },
                { id: 'capabilities', label: 'Capabilities', icon: Factory }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#F0801C] text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              {tabContent[activeTab]}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
