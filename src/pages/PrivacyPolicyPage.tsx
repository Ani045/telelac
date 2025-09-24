import React from 'react';
import { ChevronRight, Shield, Eye, Lock, UserCheck, Database, Globe, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
              <span className="text-slate-900 font-medium">Privacy Policy</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content - Clean Typography */}
              <div className="space-y-6">
                <div>
                  <div className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-4 py-2 mb-6 backdrop-blur-sm rounded-full inline-flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Privacy Protection
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Privacy
                    <span className="block text-[#F0801C] mt-2">
                      Policy
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Data Protection
                    <Shield className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80">
                    <Eye className="w-5 h-5" />
                    Your Rights
                  </button>
                </div>
              </div>

              {/* Right Content - Enhanced Cards */}
              <div className="space-y-6">
                {/* Last Updated Card */}
                <div className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F0801C]/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Data Security</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-2">
                        Industry-standard security measures to protect your personal information with SSL encryption
                      </p>
                      <span className="inline-block bg-[#F0801C]/10 text-[#F0801C] px-3 py-1 rounded-full text-xs font-semibold">Last updated: Sep 17, 2025</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                      <div className="text-slate-600 text-sm font-medium">Secure</div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                      <div className="text-slate-600 text-sm font-medium">Protected</div>
                    </div>
                  </div>
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Information We Collect</h2>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Personal Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Name, email address, and contact information when you submit inquiries</li>
                    <li>• Company information and project details for quotes and consultations</li>
                    <li>• Communication preferences and interaction history</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mt-6">Technical Information</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• IP address, browser type, and device information</li>
                    <li>• Website usage patterns and analytics data</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">How We Use Your Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Service Delivery</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Respond to your inquiries and provide quotes</li>
                      <li>• Process orders and deliver our heating solutions</li>
                      <li>• Provide technical support and maintenance services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Communication</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Send important updates about your projects</li>
                      <li>• Share relevant industry insights and product information</li>
                      <li>• Notify you about new products and services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Improvement</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Analyze website usage to improve user experience</li>
                      <li>• Develop better products and services</li>
                      <li>• Enhance our customer support processes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Legal Compliance</h3>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Comply with applicable laws and regulations</li>
                      <li>• Protect our rights and prevent fraud</li>
                      <li>• Respond to legal requests and court orders</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Information Sharing</h2>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <p className="text-slate-700 mb-4">
                    <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>• When required by law, court order, or government request</li>
                    <li>• To protect our rights, property, or safety, or that of our customers</li>
                    <li>• In connection with a business transfer or merger (with prior notice to you)</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Data Security</h2>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <p className="text-slate-700 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                      <Lock className="w-8 h-8 text-[#F0801C] mx-auto mb-2" />
                      <h4 className="font-semibold text-slate-900">Encryption</h4>
                      <p className="text-sm text-slate-600">SSL/TLS encryption for data transmission</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                      <Shield className="w-8 h-8 text-[#F0801C] mx-auto mb-2" />
                      <h4 className="font-semibold text-slate-900">Access Control</h4>
                      <p className="text-sm text-slate-600">Limited access to authorized personnel</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                      <Database className="w-8 h-8 text-[#F0801C] mx-auto mb-2" />
                      <h4 className="font-semibold text-slate-900">Secure Storage</h4>
                      <p className="text-sm text-slate-600">Protected servers and regular backups</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Your Rights</h2>
                </div>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <p className="text-slate-700 mb-4">You have the following rights regarding your personal information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Access:</strong> Request a copy of your personal data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Correction:</strong> Update or correct inaccurate information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Deletion:</strong> Request removal of your personal data</span>
                      </li>
                    </ul>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Portability:</strong> Receive your data in a portable format</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Object:</strong> Object to certain processing activities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 m-0">Contact Us</h2>
                </div>
                
                <div className="bg-gradient-to-r from-[#F0801C]/10 to-[#D6701A]/10 rounded-xl p-6 border border-[#F0801C]/20">
                  <p className="text-slate-700 mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                      <p className="text-slate-600">privacy@telelec.com</p>
                      <p className="text-slate-600">info@telelec.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Address</h4>
                      <p className="text-slate-600">Telelec Heating Equipment Pvt. Ltd.</p>
                      <p className="text-slate-600">B-48 Sector 81, Phase II</p>
                      <p className="text-slate-600">Noida 201305, UP, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Policy Updates</h3>
                <p className="text-slate-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;