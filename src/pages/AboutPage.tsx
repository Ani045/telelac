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
    { 
      title: 'Standards Compliance', 
      items: ['IS 4159, IS/IEC 60079', 'ASME Sec. VIII, TEMA'], 
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      title: 'Manufacturing and Inspection ', 
      items: ['Tubular heating elements', 'Ceramic elements', 'Heater assemblies'], 
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      title: 'Design Engineering', 
      items: ['PVElite mechanical design', 'HTRI thermal design'], 
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      title: 'Testing & Inspection', 
      items: ['200 bar hydrostatic test', 'GTAW welding equipment'], 
      icon: TestTube,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
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
        <div className="grid grid-cols-1 gap-6">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Content - Left 2/3 */}
                <div className="md:col-span-2 p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold">{capability.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-[#F0801C] flex-shrink-0" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image - Right 1/3 */}
                <div className="md:col-span-1 relative h-48 md:h-auto">
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Same as Products Page */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="About Telelec"
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
              <span className="text-slate-900 font-medium">About Us</span>
            </div>
          </nav>

          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Left Content - Compact */}
              <div className="lg:col-span-2 space-y-3">
                <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-3 py-1">
                  <Award className="w-4 h-4 mr-1" />
                  Since 1971
                </Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  About <span className="text-[#F0801C]">Telelec</span>
                </h1>
                
                <p className="text-sm md:text-base text-slate-600">
                  For over five decades, we've been engineering reliable electric heating solutions that industries depend on worldwide.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm">
                    <ArrowRight className="w-4 h-4" />
                    Our Story
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm">
                    <Factory className="w-4 h-4" />
                    Our Capabilities
                  </button>
                </div>
              </div>

              {/* Right - Compact Stats Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <Award className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">{stats[0].number}</h3>
                  <p className="text-xs text-slate-600">{stats[0].label}</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <Globe className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">{stats[1].number}</h3>
                  <p className="text-xs text-slate-600">{stats[1].label}</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <Factory className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">{stats[2].number}</h3>
                  <p className="text-xs text-slate-600">{stats[2].label}</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <Shield className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">{stats[3].number}</h3>
                  <p className="text-xs text-slate-600">{stats[3].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                { id: 'timeline', label: 'Our Journey', icon: Calendar },
                { id: 'overview', label: 'Overview', icon: Star },
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