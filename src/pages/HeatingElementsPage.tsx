import { Badge } from '@/components/ui/badge';
import { 
  Flame, 
  ChevronRight,
  CheckCircle,
  Award,
  Phone,
  Shield,
  Factory,
  ThermometerSun,
  Gauge,
  Download,
  Mail,
  ZoomIn,
  Zap,
  Clock
} from 'lucide-react';
import { useState } from 'react';

const HeatingElementsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const keyFeatures = [
    "Comprehensive range of tubular heating elements",
    "Cartridge heaters for precision applications",
    "Custom specifications and configurations",
    "High-quality materials and construction",
    "Fast delivery for standard elements",
    "Wide range of power and voltage options",
    "Various sheath materials available",
    "Expert technical support and consultation"
  ];

  const specifications = [
    { label: "Power Range", value: "100W to 50kW" },
    { label: "Voltage", value: "12V to 480V" },
    { label: "Sheath Materials", value: "SS304, SS316L, Incoloy" },
    { label: "Temperature", value: "Up to 800°C" },
    { label: "Diameter", value: "6mm to 32mm" },
    { label: "Length", value: "50mm to 6000mm" },
    { label: "Delivery", value: "Fast turnaround" },
    { label: "Customization", value: "Full custom design" }
  ];

  const applications = [
    "Pharmaceutical",
    "Food processing", 
    "Chemical industry",
    "Water treatment",
    "Plastic processing",
    "Textile industry",
    "Laboratory equipment",
    "Industrial machinery"
  ];

  const productImages = [
    {
      src: "https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Tubular Heating Elements",
      title: "Tubular Elements",
      description: "Standard and custom configurations"
    },
    {
      src: "https://images.unsplash.com/photo-1559662780-33bb7299ca58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cartridge Heaters",
      title: "Cartridge Heaters",
      description: "Precision heating applications"
    },
    {
      src: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Custom Elements",
      title: "Custom Design",
      description: "Engineered to specification"
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Quality Control",
      title: "Quality Testing",
      description: "Rigorous quality assurance"
    },
    {
      src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Manufacturing",
      title: "Manufacturing",
      description: "Advanced production facility"
    },
    {
      src: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Packaging",
      title: "Fast Delivery",
      description: "Quick turnaround times"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Zoomed product image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
              <span className="text-slate-900 font-medium">Standard & Custom Heating Elements</span>
            </div>
          </nav>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Standard & Custom Heating Elements</h1>
                <p className="text-slate-600">Comprehensive range of tubular, cartridge, and specialty elements</p>
              </div>
            </div>
            
            <div className="hidden md:flex gap-3">
              <button className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#F0801C] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg text-sm">
                <Phone className="w-4 h-4" />
                Get Quote
              </button>
              <button className="border-2 border-slate-300 hover:border-[#F0801C] text-slate-700 hover:text-[#F0801C] px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 text-sm">
                <Download className="w-4 h-4" />
                Catalog
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
              Catalog
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
                    src="https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Heating Elements Collection"
                    className="w-full h-96 object-cover cursor-pointer"
                    onClick={() => setSelectedImage("https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn className="w-4 h-4 text-slate-700" />
                  </div>
                  
                  {/* Key Stats Overlays */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#F0801C]">50kW</div>
                      <div className="text-xs text-slate-700">Max Power</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#F0801C]">800°C</div>
                      <div className="text-xs text-slate-700">Max Temp</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#F0801C]">Fast</div>
                      <div className="text-xs text-slate-700">Delivery</div>
                    </div>
                  </div>
                </div>

                {/* Innovation Highlight */}
                <div className="mt-6 bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-2">Quality & Speed</h3>
                      <p className="text-sm text-white/90">
                        Telelec's heating elements combine superior quality with fast delivery times. Our extensive range covers standard products for immediate delivery and custom elements engineered to your exact specifications.
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
                  Wide range of options for diverse applications
                </p>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                  <div className="grid grid-cols-2 divide-x divide-slate-200">
                    {specifications.slice(0, 4).map((spec, index) => (
                      <div key={index} className="p-5 text-center hover:bg-slate-50 transition-colors duration-200">
                        <div className="text-2xl font-bold text-[#F0801C] mb-1">
                          {spec.value.includes('50kW') ? '50kW' : 
                           spec.value.includes('480V') ? '480V' : 
                           spec.value.includes('SS304') ? 'Multi' : 
                           spec.value.includes('800°C') ? '800°C' :
                           spec.value.split(' ')[0]}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 mb-0.5">{spec.label}</div>
                        <div className="text-xs text-slate-600">
                          {spec.value.includes('50kW') ? 'Maximum power' :
                           spec.value.includes('480V') ? 'Voltage range' :
                           spec.value.includes('SS304') ? 'Material options' :
                           spec.value.includes('800°C') ? 'Temperature rating' :
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
                    Request Catalog
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

      {/* Overview Description Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
              Overview
            </h2>
            <div className="w-20 h-1 bg-[#F0801C] rounded-full mx-auto mb-8"></div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <p className="text-slate-700 text-lg leading-relaxed">
                Telelec offers a comprehensive range of standard and custom heating elements including tubular heaters, cartridge heaters, and specialty elements. Our extensive inventory of standard elements ensures fast delivery for common applications, while our custom engineering capabilities allow us to develop specialized elements for unique requirements. All elements are manufactured to the highest quality standards using premium materials and are available with various sheath materials, power ratings, and configurations to meet diverse industrial needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Applications - Combined Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Key Features
                </h2>
                <div className="w-20 h-1 bg-[#F0801C] rounded-full mb-4"></div>
                <p className="text-slate-600 text-lg mb-8">
                  Superior quality heating elements with extensive customization options and fast delivery
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-200">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">
                  Applications
                </h2>
                <div className="w-20 h-1 bg-[#F0801C] rounded-full mb-4"></div>
                <p className="text-slate-600 text-lg mb-8">
                  Serving diverse industries with reliable heating element solutions
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 text-center group">
                      <Flame className="w-8 h-8 text-[#F0801C] mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
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
              <p className="text-slate-600 text-lg">See our extensive range of heating elements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl cursor-pointer" onClick={() => setSelectedImage(image.src.replace('w=800', 'w=1600'))}>
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Standard or Custom Heating Elements?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Browse our extensive catalog or request a custom quote for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-[#F0801C] hover:bg-slate-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-lg">
                <Phone className="w-6 h-6" />
                Get Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#F0801C] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <Download className="w-6 h-6" />
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeatingElementsPage;