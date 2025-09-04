import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CheckCircle, Download, Phone, Mail } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const ProductDetailPage = () => {
  const { productId } = useParams();

  const productData: Record<string, any> = {
    'heater-bundles': {
      title: 'Electric Heater Bundles',
      subtitle: 'Inline Process Heaters',
      description: 'Our electric heater bundles are custom-designed inline process heaters engineered for industrial applications requiring precise temperature control and reliable operation.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      specifications: {
        'Power Range': '1 kW to 2000 kW',
        'Voltage': '240V to 11kV',
        'Temperature Range': 'Up to 650°C',
        'Pressure Rating': 'Up to 40 bar',
        'Materials': 'SS304, SS316, Inconel, Hastelloy',
        'Certification': 'IS 4159, ASME Sec VIII'
      },
      features: [
      'Custom-designed for specific applications',
      'Precise temperature control with PID controllers',
      'Energy-efficient operation',
      'Robust construction for harsh environments',
      'Easy installation and maintenance',
      'Multiple safety systems integrated'],

      applications: [
      'Chemical processing and petrochemicals',
      'Oil and gas upstream/downstream',
      'Water and wastewater treatment',
      'Food and beverage processing',
      'Pharmaceutical manufacturing',
      'Power generation facilities'],

      benefits: [
      'Reduced energy consumption',
      'Improved process efficiency',
      'Lower maintenance costs',
      'Enhanced safety features',
      'Longer operational life',
      'Environmental compliance']

    },
    'air-heaters': {
      title: 'Air Heaters',
      subtitle: 'Industrial Air Heating Solutions',
      description: 'Comprehensive range of air heaters designed for compressed air, process air, and HVAC applications in industrial environments.',
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      specifications: {
        'Power Range': '0.5 kW to 500 kW',
        'Air Flow Rate': '10 to 10,000 CFM',
        'Temperature Range': 'Up to 400°C',
        'Pressure Rating': 'Up to 16 bar',
        'Materials': 'SS304, SS316, Carbon Steel',
        'Certification': 'IS 4159, CE Marking'
      },
      features: [
      'High thermal efficiency design',
      'Corrosion-resistant construction',
      'Advanced temperature control',
      'Low pressure drop',
      'Compact and lightweight',
      'Easy maintenance access'],

      applications: [
      'Compressed air system heating',
      'Industrial HVAC applications',
      'Process air heating',
      'Gas stream heating',
      'Drying applications',
      'Environmental conditioning'],

      benefits: [
      'Energy-efficient operation',
      'Reduced compressed air moisture',
      'Improved system reliability',
      'Lower operating costs',
      'Enhanced process quality',
      'Minimal maintenance requirements']

    },
    'metal-finishing': {
      title: 'Metal Finishing Tank Heaters',
      subtitle: 'Electroplating & Surface Treatment',
      description: 'Specialized heating solutions designed for metal finishing processes including electroplating, anodizing, and chemical treatment applications.',
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      specifications: {
        'Power Range': '1 kW to 100 kW',
        'Voltage': '240V to 480V',
        'Temperature Range': 'Up to 200°C',
        'Tank Size': '100L to 10,000L',
        'Materials': 'Titanium, PTFE, Quartz, SS316',
        'Certification': 'RoHS Compliant, CE Marking'
      },
      features: [
      'Chemical-resistant materials',
      'Precision temperature control',
      'Uniform heat distribution',
      'Corrosion-proof construction',
      'Easy installation and removal',
      'Digital temperature displays'],

      applications: [
      'Electroplating processes',
      'Anodizing operations',
      'Chemical etching baths',
      'Metal cleaning processes',
      'Surface treatment applications',
      'Pickling and passivation'],

      benefits: [
      'Extended equipment life',
      'Consistent process results',
      'Reduced chemical consumption',
      'Improved product quality',
      'Energy-efficient heating',
      'Minimal maintenance downtime']

    }
  };

  const product = productData[productId || ''] || productData['heater-bundles'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg" />

            </div>
            <div className="flex flex-col justify-center">
              <Badge className="bg-[#F0801C] hover:bg-[#D6701A] w-fit mb-4">
                Industrial Grade
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2B2B2A] mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-[#F0801C] font-semibold mb-6">
                {product.subtitle}
              </p>
              <p className="text-[#C6C7C7] text-lg mb-8">
                {product.description}
              </p>
              <div className="flex space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F0801C] hover:bg-[#D6701A] text-white">

                  <Link to="/contact">Request Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white">

                  <Download className="mr-2 h-4 w-4" />
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2B2B2A]">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) =>
                  <div key={key}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-[#2B2B2A]">{key}:</span>
                        <span className="text-[#C6C7C7]">{value}</span>
                      </div>
                      <Separator className="mt-2" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2B2B2A]">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature: string, index: number) =>
                  <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#F0801C] mt-0.5 flex-shrink-0" />
                      <span className="text-[#C6C7C7]">{feature}</span>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2B2B2A]">Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.applications.map((application: string, index: number) =>
                  <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#F0801C] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#C6C7C7]">{application}</span>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] text-center mb-12">
            Benefits & Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit: string, index: number) =>
            <Card key={index} className="text-center p-6">
                <CardContent>
                  <CheckCircle className="h-12 w-12 text-[#F0801C] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#2B2B2A] mb-2">{benefit}</h3>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                Request a Quote
              </h2>
              <p className="text-[#C6C7C7] text-lg">
                Get a customized quote for your specific requirements
              </p>
            </div>
            <QuoteForm productName={product.title} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#F0801C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Technical Support?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to help you select the right heating solution for your application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#F0801C]">

              <Phone className="mr-2 h-5 w-5" />
              +91 9318498090
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#F0801C]">

              <Mail className="mr-2 h-5 w-5" />
              info@telelec.com
            </Button>
          </div>
        </div>
      </section>
    </div>);

};

export default ProductDetailPage;