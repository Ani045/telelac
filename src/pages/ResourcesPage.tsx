import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, BookOpen, Lightbulb, TrendingUp, Award, ChevronRight, ArrowRight, Globe, Shield, MessageSquare, Factory } from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
  {
    category: 'Technical Documentation',
    items: [
    {
      title: 'Electric Heater Selection Guide',
      description: 'Comprehensive guide for selecting the right electric heating solution for your application.',
      type: 'PDF Guide',
      icon: FileText,
      downloadUrl: '#'
    },
    {
      title: 'Installation & Maintenance Manual',
      description: 'Step-by-step instructions for proper installation and maintenance of heating equipment.',
      type: 'Manual',
      icon: BookOpen,
      downloadUrl: '#'
    },
    {
      title: 'Technical Specifications Sheet',
      description: 'Detailed technical specifications for all our heating products.',
      type: 'Specification',
      icon: FileText,
      downloadUrl: '#'
    }]

  },
  {
    category: 'Case Studies',
    items: [
    {
      title: 'Chemical Plant Efficiency Improvement',
      description: 'How Telelec heaters increased efficiency by 25% in a major chemical processing facility.',
      type: 'Case Study',
      icon: TrendingUp,
      downloadUrl: '#'
    },
    {
      title: 'Oil Refinery Modernization Project',
      description: 'Complete heating system upgrade for a 50,000 barrel per day refinery.',
      type: 'Case Study',
      icon: TrendingUp,
      downloadUrl: '#'
    },
    {
      title: 'Power Plant Auxiliary Heating Solution',
      description: 'Custom heating solution for critical auxiliary systems in thermal power plant.',
      type: 'Case Study',
      icon: TrendingUp,
      downloadUrl: '#'
    }]

  },
  {
    category: 'Industry Insights',
    items: [
    {
      title: 'Energy Efficiency in Industrial Heating',
      description: 'Best practices for improving energy efficiency in industrial heating applications.',
      type: 'White Paper',
      icon: Lightbulb,
      downloadUrl: '#'
    },
    {
      title: 'Safety Standards for Electric Heating',
      description: 'Overview of international safety standards and compliance requirements.',
      type: 'White Paper',
      icon: Award,
      downloadUrl: '#'
    },
    {
      title: 'Future of Industrial Heating Technology',
      description: 'Emerging trends and technologies in the industrial heating sector.',
      type: 'Report',
      icon: Lightbulb,
      downloadUrl: '#'
    }]

  }];


  const comparisonData = {
    title: 'Why Choose Electric Heaters?',
    subtitle: 'Electric vs Fired Heaters Comparison',
    comparisons: [
    {
      aspect: 'Efficiency',
      electric: '95-98% thermal efficiency',
      fired: '70-85% thermal efficiency',
      advantage: 'electric'
    },
    {
      aspect: 'Environmental Impact',
      electric: 'Zero direct emissions',
      fired: 'CO2, NOx, SOx emissions',
      advantage: 'electric'
    },
    {
      aspect: 'Control Precision',
      electric: '±1°C temperature control',
      fired: '±5-10°C temperature control',
      advantage: 'electric'
    },
    {
      aspect: 'Maintenance',
      electric: 'Low maintenance requirements',
      fired: 'High maintenance needs',
      advantage: 'electric'
    },
    {
      aspect: 'Safety',
      electric: 'No combustion risks',
      fired: 'Fire and explosion hazards',
      advantage: 'electric'
    },
    {
      aspect: 'Installation',
      electric: 'Simple electrical connection',
      fired: 'Complex fuel systems required',
      advantage: 'electric'
    }]

  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Same as Products Page */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Resources & Documentation"
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
              <span className="text-slate-900 font-medium">Resources</span>
            </div>
          </nav>

          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Left Content - Compact */}
              <div className="lg:col-span-2 space-y-3">
                <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-3 py-1">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Technical Resources
                </Badge>
                
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Resources & <span className="text-[#F0801C]">Documentation</span>
                </h1>
                
                <p className="text-sm md:text-base text-slate-600">
                  Access comprehensive technical resources, case studies, and industry insights to make informed decisions about your heating solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm">
                    <Download className="w-4 h-4" />
                    Download Resources
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-5 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm">
                    <FileText className="w-4 h-4" />
                    View Catalog
                  </button>
                </div>
              </div>

              {/* Right - Compact Stats Grid */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <FileText className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">50+</h3>
                  <p className="text-xs text-slate-600">Documents</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <TrendingUp className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">25+</h3>
                  <p className="text-xs text-slate-600">Case Studies</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <Lightbulb className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">Latest</h3>
                  <p className="text-xs text-slate-600">Insights</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm text-center">
                  <Award className="w-6 h-6 text-[#F0801C] mx-auto mb-1" />
                  <h3 className="text-sm font-bold text-slate-900">Expert</h3>
                  <p className="text-xs text-slate-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electric vs Fired Heaters Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#F0801C] hover:bg-[#D6701A] mb-4">
              Industry Comparison
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              {comparisonData.title}
            </h2>
            <p className="text-xl text-gray-600">
              {comparisonData.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-[#2B2B2A]">
                  Comparative Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-4 font-semibold text-[#2B2B2A]">Aspect</th>
                        <th className="text-center py-4 px-4 font-semibold text-[#F0801C]">Electric Heaters</th>
                        <th className="text-center py-4 px-4 font-semibold text-gray-600">Fired Heaters</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.comparisons.map((comparison, index) =>
                      <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-4 font-medium text-[#2B2B2A]">
                            {comparison.aspect}
                          </td>
                          <td className={`py-4 px-4 text-center ${comparison.advantage === 'electric' ? 'text-[#F0801C] font-semibold' : 'text-gray-600'}`}>
                            {comparison.electric}
                          </td>
                          <td className={`py-4 px-4 text-center ${comparison.advantage === 'fired' ? 'text-[#F0801C] font-semibold' : 'text-gray-600'}`}>
                            {comparison.fired}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {resources.map((section, sectionIndex) =>
          <div key={sectionIndex} className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-8 text-center">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) =>
              <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <item.icon className="h-8 w-8 text-[#F0801C]" />
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <CardTitle className="text-[#2B2B2A] text-lg">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <Button
                    className="w-full bg-[#F0801C] hover:bg-[#D6701A] text-white"
                    onClick={() => console.log(`Downloading: ${item.title}`)}>

                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
              )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
              Additional Resources
            </h2>
            <p className="text-gray-600 text-lg">
              More resources to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2B2B2A] mb-2">Product Catalogs</h3>
                <p className="text-gray-600 text-sm mb-4">Complete product line catalogs with specifications</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2B2B2A] mb-2">Application Guides</h3>
                <p className="text-gray-600 text-sm mb-4">Industry-specific application guidelines</p>
                <Button variant="outline" size="sm">Download</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2B2B2A] mb-2">Certifications</h3>
                <p className="text-gray-600 text-sm mb-4">Quality certifications and compliance documents</p>
                <Button variant="outline" size="sm">View</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                <h3 className="font-semibold text-[#2B2B2A] mb-2">Innovation Hub</h3>
                <p className="text-gray-600 text-sm mb-4">Latest innovations and technology updates</p>
                <Button variant="outline" size="sm">Explore</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0801C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Custom Documentation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our technical team can provide customized documentation and specifications for your specific requirements
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#F0801C] px-8 bg-white text-[#2b2b2a]">

            Contact Technical Team
          </Button>
        </div>
      </section>
    </div>);

};

export default ResourcesPage;