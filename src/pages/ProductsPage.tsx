import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Wind, Wrench, Settings, Thermometer, Cpu, ChevronRight } from 'lucide-react';

const ProductsPage = () => {
  const { industry } = useParams();
  
  // Industry mapping for filtering products
  const industryApplicationMap = {
    'metals': ['Metal Processing', 'Metal Forging', 'Steel Processing', 'Electroplating', 'Anodizing', 'Chemical Treatment'],
    'petrochemicals': ['Petrochemicals', 'Refinery Process', 'Chemical Processing', 'Catalyst Heating'],
    'power': ['Power Generation', 'Boiler Heating', 'Steam Generation', 'Turbine Heating', 'Nuclear Facility'],
    'chemicals': ['Chemical Processing', 'Chemical Plants', 'Manufacturing', 'Chemical Reactor', 'Distillation'],
    'oil-gas': ['Oil & Gas', 'Oil Heating', 'Gas Heating', 'Pipeline Heating', 'Offshore Platform'],
    'pharmaceuticals': ['Pharmaceutical Processing', 'Vaccine Production', 'Clean Room', 'Sterilization'],
    'new-industries': ['Smart Heaters', 'IoT', 'Renewable Energy', 'Advanced Control', 'Automation'],
    'oem-epc': ['Custom Design', 'Modular Systems', 'Turnkey Solutions', 'Engineering Design'],
    'industrial-gases': ['Industrial Gases', 'Compressed Air Systems', 'Gas Heating', 'Industrial Drying', 'Nitrogen', 'Oxygen'],
    'water-treatment': ['Water Treatment', 'Water Heating', 'Chemical Tanks', 'Wastewater', 'Desalination'],
    'food-processing': ['Food Processing', 'Food & Beverage', 'Pasteurization', 'Cooking Equipment', 'Steam Generation']
  };

  const industryTitles = {
    'metals': 'Metals',
    'petrochemicals': 'Petrochemicals',
    'power': 'Power Generation',
    'chemicals': 'Chemicals',
    'oil-gas': 'Oil & Gas',
    'pharmaceuticals': 'Pharmaceuticals',
    'new-industries': 'New Industries',
    'oem-epc': 'OEM & EPC',
    'industrial-gases': 'Industrial Gases',
    'water-treatment': 'Water Treatment',
    'food-processing': 'Food Processing'
  };

  const products = [
  {
    id: 'heater-bundles',
    title: 'Electric Heater Bundles',
    subtitle: 'Inline Process Heaters',
    description: 'Custom-designed electric heater bundles for industrial process heating applications. Features precise temperature control, robust construction, and energy-efficient operation.',
    features: ['Custom Design', 'Temperature Control', 'Energy Efficient', 'Industrial Grade'],
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: ['Chemical Processing', 'Oil & Gas', 'Petrochemicals', 'Food Processing']
  },
  {
    id: 'air-heaters',
    title: 'Air Heaters',
    subtitle: 'Industrial Air Heating Solutions',
    description: 'Comprehensive range of air heaters for compressed air, process air, and HVAC applications. Designed for reliability and energy efficiency in demanding industrial environments.',
    features: ['High Efficiency', 'Corrosion Resistant', 'Temperature Control', 'Low Maintenance'],
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: ['Compressed Air Systems', 'HVAC Applications', 'Industrial Drying', 'Gas Heating']
  },
  {
    id: 'metal-finishing',
    title: 'Metal Finishing Tank Heaters',
    subtitle: 'Electroplating & Surface Treatment',
    description: 'Specialized heating solutions for metal finishing processes including electroplating, anodizing, and chemical treatment tanks. Built to withstand harsh chemical environments.',
    features: ['Chemical Resistant', 'Precision Heating', 'Durable Construction', 'Easy Installation'],
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: ['Electroplating', 'Anodizing', 'Chemical Treatment', 'Metal Processing']
  },
  {
    id: 'process-heaters',
    title: 'Process Heaters',
    subtitle: 'Custom Engineering Solutions',
    description: 'Engineered heating solutions for specific industrial processes. Custom-designed to meet unique requirements with advanced control systems and monitoring capabilities.',
    features: ['Custom Engineering', 'Advanced Controls', 'Process Integration', 'Remote Monitoring'],
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: ['Chemical Plants', 'Manufacturing', 'Research Labs', 'Pilot Plants']
  },
  {
    id: 'immersion-heaters',
    title: 'Immersion Heaters',
    subtitle: 'Direct Liquid Heating',
    description: 'High-quality immersion heaters for direct heating of liquids in tanks, vessels, and process equipment. Available in various materials and configurations.',
    features: ['Direct Heating', 'Multiple Materials', 'Custom Lengths', 'High Wattage'],
    icon: Thermometer,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: ['Water Heating', 'Chemical Tanks', 'Oil Heating', 'Industrial Vessels']
  },
  {
    id: 'control-panels',
    title: 'Control Panels',
    subtitle: 'Heating System Controls',
    description: 'Advanced control panels and systems for heating equipment with temperature controllers, safety systems, and remote monitoring capabilities.',
    features: ['Digital Controls', 'Safety Systems', 'Remote Access', 'Data Logging'],
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    applications: ['Process Control', 'Temperature Monitoring', 'Safety Systems', 'Automation']
  }];

  // Filter products based on industry
  const filteredProducts = useMemo(() => {
    if (!industry) {
      return products;
    }
    
    const industryApps = industryApplicationMap[industry];
    if (!industryApps) {
      return products;
    }
    
    return products.filter(product => 
      product.applications.some(app => 
        industryApps.some(industryApp => 
          app.toLowerCase().includes(industryApp.toLowerCase()) || 
          industryApp.toLowerCase().includes(app.toLowerCase())
        )
      )
    );
  }, [industry]);

  const pageTitle = industry ? `${industryTitles[industry]} Products` : 'Our Products';
  const pageDescription = industry 
    ? `Specialized heating solutions for ${industryTitles[industry]} applications`
    : 'Comprehensive range of industrial electric heating solutions engineered for reliability, efficiency, and performance';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#2B2B2A] text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs for industry-specific pages */}
          {industry && (
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Link to="/" className="hover:text-[#F0801C] transition-colors duration-200">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/industries" className="hover:text-[#F0801C] transition-colors duration-200">Industries</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-medium">{industryTitles[industry]} Products</span>
              </div>
            </nav>
          )}
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-300">
              {pageDescription}
            </p>
            
            {industry && (
              <div className="mt-6">
                <Badge className="bg-[#F0801C] hover:bg-[#D6701A] text-white px-4 py-2">
                  {industryTitles[industry]} Specialized
                </Badge>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) =>
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <product.icon className="h-10 w-10 text-[#F0801C]" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#F0801C] hover:bg-[#D6701A]">
                      Industrial Grade
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-[#2B2B2A] mb-1">
                        {product.title}
                      </CardTitle>
                      <p className="text-[#F0801C] font-medium">{product.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-[#C6C7C7] mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#2B2B2A] mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) =>
                    <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                    )}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2B2B2A] mb-2">Applications:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-[#C6C7C7]">
                      {product.applications.map((app, index) =>
                    <div key={index}>• {app}</div>
                    )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                    asChild
                    className="bg-[#F0801C] hover:bg-[#D6701A] text-white flex-1">

                      <Link to={`/products/${product.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                    asChild
                    variant="outline"
                    className="border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white">

                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0801C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our engineering team can design and manufacture custom heating solutions tailored to your specific requirements
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#F0801C] px-8">

            <Link to="/contact">
              Discuss Your Requirements
            </Link>
          </Button>
        </div>
      </section>
    </div>);

};

export default ProductsPage;