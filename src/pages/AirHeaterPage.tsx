import { Badge } from '@/components/ui/badge';
import { 
  Wind, 
  ChevronRight,
  CheckCircle,
  Award,
  Phone,
  Shield,
  Zap,
  Factory,
  ThermometerSun,
  Gauge,
  Wrench,
  Download,
  Mail
} from 'lucide-react';

const AirHeaterPage = () => {
  const keyFeatures = [
    "Single assembly up to 400kW",
    "Remove any heating element without removing heater assembly from duct",
    "Enclosures with ingress protection up to IP65",
    "Enclosures fabricated in-house up to 6mm thickness",
    "Various heating element and fin material options",
    "Can be used as resistive load banks",
    "Available with or without axial/centrifugal blowers",
    "Replaceable heating element design"
  ];

  const specifications = [
    { label: "Power Range", value: "Up to 400kW single assembly" },
    { label: "Ingress Protection", value: "Up to IP65" },
    { label: "Enclosure Material", value: "M.S., S.S 304, S.S. 316L" },
    { label: "Enclosure Thickness", value: "Up to 6mm" },
    { label: "Pressure Drop", value: "Low pressure drop design" },
    { label: "Heat Exchange", value: "High heat exchange rates" },
    { label: "Air Type", value: "Forced, uncompressed air" },
    { label: "Maintenance", value: "Individual element replacement" }
  ];

  const applications = [
    "Process air heating",
    "Space heating systems", 
    "Industrial ventilation",
    "Drying applications",
    "Load bank testing",
    "HVAC systems",
    "Manufacturing processes",
    "Temperature control systems"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Product Header */}
      <section className="bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <nav className="mb-4">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <a href="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/products" className="hover:text-[#F0801C] transition-colors duration-200">Products</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Air Heaters</span>
            </div>
          </nav>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Air Heaters</h1>
                <p className="text-slate-600">Electric air heating assemblies up to 400kW</p>
              </div>
            </div>
            
            <div className="hidden md:flex gap-3">
              <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg text-sm">
                <Phone className="w-4 h-4" />
                Get Quote
              </button>
              <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 text-sm">
                <Download className="w-4 h-4" />
                Datasheet
              </button>
            </div>
          </div>

          {/* Mobile CTAs */}
          <div className="flex md:hidden gap-3 mt-4">
            <button className="flex-1 bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg text-sm">
              <Phone className="w-4 h-4" />
              Get Quote
            </button>
            <button className="flex-1 border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-6 py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm">
              <Download className="w-4 h-4" />
              Datasheet
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section - Image with Specs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left - Product Image with Stats Overlay */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/public/images/air-heater.png"
                    alt="Air Heater Assembly"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Key Stats Overlays */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#F0801C]">400kW</div>
                      <div className="text-xs text-slate-700">Max Power</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#F0801C]">IP65</div>
                      <div className="text-xs text-slate-700">Protection</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#F0801C]">6mm</div>
                      <div className="text-xs text-slate-700">Enclosure</div>
                    </div>
                  </div>
                </div>

                {/* Innovation Highlight */}
                <div className="mt-6 bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">Pioneering Innovation</h3>
                      <p className="text-sm text-white/90">
                        Telelec's patented replaceable heating element design allows removal of any individual element without dismantling the entire assembly - minimizing downtime and maintenance costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Technical Specifications */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Technical Specifications
                </h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Precision-engineered for industrial reliability
                </p>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                  <div className="grid grid-cols-2 divide-x divide-slate-200">
                    {specifications.slice(0, 4).map((spec, index) => (
                      <div key={index} className="p-5 text-center hover:bg-slate-50 transition-colors duration-200">
                        <div className="text-2xl font-bold text-[#F0801C] mb-1">
                          {spec.value.includes('400kW') ? '400kW' : 
                           spec.value.includes('IP65') ? 'IP65' : 
                           spec.value.includes('6mm') ? '6mm' : 
                           spec.value.split(' ')[0]}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 mb-0.5">{spec.label}</div>
                        <div className="text-xs text-slate-600">
                          {spec.value.includes('400kW') ? 'Single assembly' :
                           spec.value.includes('IP65') ? 'Maximum protection' :
                           spec.value.includes('6mm') ? 'Heavy duty' :
                           spec.value.substring(spec.value.indexOf(' ') + 1)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 p-6 border-t border-slate-200">
                    <div className="space-y-3">
                      {specifications.slice(4).map((spec, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-slate-600 font-semibold text-sm">{spec.label}</span>
                          <span className="text-slate-900 font-bold text-right text-sm">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                    Request Datasheet
                  </button>
                  <button className="flex-1 border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered for Performance & Real-World Applications - Combined Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Engineered for Performance */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Engineered for Performance
                </h2>
                <div className="w-20 h-1 bg-[#F0801C] rounded-full mb-4"></div>
                <p className="text-slate-600 text-lg mb-8">
                  Industrial-grade electric air heaters designed for demanding applications with superior heat exchange efficiency and minimal pressure drop
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-all duration-200">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-World Applications */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Real-World Applications
                </h2>
                <div className="w-20 h-1 bg-[#F0801C] rounded-full mb-4"></div>
                <p className="text-slate-600 text-lg mb-8">
                  Proven performance across critical industrial processes
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center group">
                      <ThermometerSun className="w-8 h-8 text-[#F0801C] mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                      <h3 className="text-sm font-bold text-slate-900">{application}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Images Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Product Gallery
              </h2>
              <div className="w-24 h-1 bg-[#F0801C] rounded-full mx-auto mb-4"></div>
              <p className="text-slate-600 text-lg">See our air heaters in action</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Air Heater Installation"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Installation View</h3>
                  <p className="text-sm">Complete assembly</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Control Panel"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Control Systems</h3>
                  <p className="text-sm">Precision temperature control</p>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Heating Elements"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Heating Elements</h3>
                  <p className="text-sm">Replaceable design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Upgrade Your Air Heating System?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get a custom quote for your air heating requirements from our technical experts
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                <Phone className="w-6 h-6" />
                Get Custom Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <Mail className="w-6 h-6" />
                Technical Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirHeaterPage;