import React from 'react';
import { ChevronRight, FileText, AlertTriangle, Scale, CreditCard, Truck, Shield, Phone } from 'lucide-react';

const TermsConditionsPage = () => {
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
              <span className="text-slate-900 font-medium">Terms & Conditions</span>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content - Clean Typography */}
              <div className="space-y-6">
                <div>
                  <div className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 px-4 py-2 mb-6 backdrop-blur-sm rounded-full inline-flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Legal Agreement
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Terms &
                    <span className="block text-[#F0801C] mt-2">
                      Conditions
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                    Please read these terms and conditions carefully before using our services or products.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    View Terms
                    <Scale className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80">
                    <AlertTriangle className="w-5 h-5" />
                    Important Notes
                  </button>
                </div>
              </div>

              {/* Right Content - Enhanced Cards */}
              <div className="space-y-6">
                {/* Legal Compliance Card */}
                <div className="bg-white/70 backdrop-blur-sm shadow-xl border border-white/20 rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F0801C]/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">Legal Compliance</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-2">
                        Governed by Indian laws with jurisdiction in Noida, Uttar Pradesh for dispute resolution
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
                      <div className="text-3xl font-bold text-slate-900 mb-1">24</div>
                      <div className="text-slate-600 text-sm font-medium">Months Warranty</div>
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F0801C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                      <div className="text-slate-600 text-sm font-medium">Guaranteed</div>
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
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-slate-700 leading-relaxed">
                  By accessing and using Telelec Heating Equipment Pvt. Ltd.'s website, products, and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Use License */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Use License</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-700">
                  Permission is granted to temporarily download one copy of the materials on Telelec's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Modify or copy the materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Use the materials for any commercial purpose or for any public display</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Attempt to reverse engineer any software contained on the website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Remove any copyright or other proprietary notations from the materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Product Sales & Services</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Orders & Quotations</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• All orders are subject to acceptance by Telelec</li>
                    <li>• Quotations are valid for 30 days unless otherwise specified</li>
                    <li>• Custom orders may require advance payment</li>
                    <li>• Technical specifications may be subject to revision</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Terms</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Payment terms are typically 30 days from invoice date</li>
                    <li>• Late payments may incur additional charges</li>
                    <li>• All prices are exclusive of taxes unless stated</li>
                    <li>• Foreign orders may require letters of credit</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Delivery</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Delivery dates are estimates and not guaranteed</li>
                    <li>• Risk passes to buyer upon delivery to carrier</li>
                    <li>• Delays due to force majeure are not our responsibility</li>
                    <li>• Customer must inspect goods upon delivery</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Returns & Cancellations</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Custom products are generally non-returnable</li>
                    <li>• Returns must be authorized within 30 days</li>
                    <li>• Restocking fees may apply to returned items</li>
                    <li>• Order cancellations may incur charges</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Warranties */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Warranties & Guarantees</h2>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Product Warranty</h3>
                <p className="text-slate-700 mb-4">
                  Telelec warrants its products to be free from defects in material and workmanship under normal use and service for a period specified in the product documentation, typically:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-[#F0801C]">12</div>
                    <div className="text-sm text-slate-600">Months Standard Warranty</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-[#F0801C]">24</div>
                    <div className="text-sm text-slate-600">Months for Premium Products</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-[#F0801C]">60</div>
                    <div className="text-sm text-slate-600">Months Extended Available</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  Warranty excludes damage due to misuse, normal wear and tear, or unauthorized modifications.
                </p>
              </div>
            </div>

            {/* Limitations */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Limitations</h2>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Disclaimer</h3>
                <p className="text-slate-700 mb-4">
                  The materials on Telelec's website are provided on an 'as is' basis. Telelec makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Limitations of Liability</h3>
                <p className="text-slate-700">
                  In no event shall Telelec or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Telelec's website, even if Telelec or its authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Intellectual Property</h2>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  All content, trademarks, service marks, trade names, logos, and icons are proprietary to Telelec Heating Equipment Pvt. Ltd. Nothing contained in this website should be construed as granting any license or right to use any trademark, logo, or service mark without our written permission.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Protected Materials</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• Product designs and specifications</li>
                      <li>• Technical documentation</li>
                      <li>• Software and applications</li>
                      <li>• Marketing materials and content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Usage Rights</h4>
                    <ul className="space-y-1 text-slate-600 text-sm">
                      <li>• View content for personal use only</li>
                      <li>• No redistribution without permission</li>
                      <li>• No commercial use of content</li>
                      <li>• Respect all copyright notices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Governing Law & Jurisdiction</h2>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6">
                <p className="text-slate-700 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts of Noida, Uttar Pradesh for any disputes arising out of or in connection with these terms.
                </p>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Dispute Resolution</h4>
                  <p className="text-slate-600 text-sm">
                    Any disputes arising from these terms or your use of our services will be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 2015, conducted in Noida, Uttar Pradesh.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
              </div>
              
              <div className="bg-gradient-to-r from-[#F0801C]/10 to-[#D6701A]/10 rounded-xl p-6 border border-[#F0801C]/20">
                <p className="text-slate-700 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Legal Department</h4>
                    <p className="text-slate-600">legal@telelec.com</p>
                    <p className="text-slate-600">info@telelec.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Corporate Office</h4>
                    <p className="text-slate-600">Telelec Heating Equipment Pvt. Ltd.</p>
                    <p className="text-slate-600">B-48 Sector 81, Phase II</p>
                    <p className="text-slate-600">Noida 201305, UP, India</p>
                    <p className="text-slate-600">+91 9318498090</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Notice */}
            <div className="bg-slate-100 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Terms Updates</h3>
              <p className="text-slate-600">
                Telelec reserves the right to revise these terms at any time without notice. By using this website and our services, you are agreeing to be bound by the then current version of these terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;