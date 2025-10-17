import React, { useState, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Zap,
    Wind,
    Wrench,
    Settings,
    Thermometer,
    Shield,
    Gauge,
    Factory,
    Flame,
    Droplets,
    Cpu,
    Building2,
    FlaskConical,
    ChevronLeft,
    ChevronRight,
    Trophy
} from "lucide-react";

const ProductPreview = () => {
    const [selectedIndustry, setSelectedIndustry] = useState("chemicals");
    const tabsRef = useRef(null);

    // Industries sorted alphabetically by name
    const industries = [
        {
            id: "chemicals",
            name: "CHEMICALS",
            icon: FlaskConical,
            color: "#32CD32",
            image: "/public/images/chemicals.jpg",
            description: "Precision heating solutions for chemical processing and manufacturing applications."
        },
        {
            id: "industrial-gases",
            name: "INDUSTRIAL GASES",
            icon: Wind,
            color: "#20B2AA",
            image: "/public/images/chemical-industry/img301.jpg",
            description: "Specialized heating systems for industrial gas production and handling operations."
        },
        {
            id: "metals",
            name: "METALS",
            icon: Factory,
            color: "#FF5733",
            image: "/public/images/metal-industry/img110.jpg",
            description: "Advanced heating solutions for metal processing, forging, and treatment applications with precise temperature control."
        },
        {
            id: "new-industries",
            name: "NEW INDUSTRIES",
            icon: Settings,
            color: "#FF1493",
            image: "/public/images/new-industries/img412.jpg",
            description: "Innovative heating technologies for emerging industrial applications and processes."
        },
        {
            id: "oem-epc",
            name: "OEM & EPC",
            icon: Building2,
            color: "#DC143C",
            image: "/public/images/oem-epc/img114.jpg",
            description: "Custom engineered heating solutions for OEMs and EPC contractors worldwide."
        },
        {
            id: "oil-gas",
            name: "OIL & GAS",
            icon: Droplets,
            color: "#1E90FF",
            image: "/public/images/oil-gas.jpg",
            description: "Heavy-duty heating equipment for oil and gas extraction and processing operations."
        },
        {
            id: "petrochemicals",
            name: "PETROCHEMICALS", 
            icon: Flame,
            color: "#FF8C00",
            image: "/public/images/petrochemical-industry/img265.jpg",
            description: "Specialized heating equipment for petrochemical processing and refining operations."
        },
        {
            id: "pharmaceuticals",
            name: "PHARMACEUTICALS",
            icon: Cpu,
            color: "#8A2BE2",
            image: "/public/images/pharma-industry/img303.jpg",
            description: "Clean room compatible heating solutions for pharmaceutical manufacturing processes."
        },
        {
            id: "power",
            name: "POWER",
            icon: Zap,
            color: "#FFD700",
            image: "/public/images/power.jpg",
            description: "Reliable heating systems for power generation and electrical infrastructure applications."
        },
        {
            id: "water-treatment",
            name: "WATER TREATMENT",
            icon: Droplets,
            color: "#708090",
            image: "/public/images/electric-heater.jpg",
            description: "Corrosion-resistant heating solutions for water treatment and purification processes."
        }
    ];

    // Sample product data - Sorted alphabetically by title within each industry
    const allProducts = [
        // METALS Industry - Alphabetically sorted
        {
            id: "metal-finishing-tanks",
            title: "Metal Finishing Tank Heaters",
            image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "metals"
        },
        {
            id: "metal-forging-heaters",
            title: "Metal Forging Heaters",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "metals"
        },
        {
            id: "steel-processing-heaters",
            title: "Steel Processing Heaters",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "metals"
        },
        {
            id: "steel-processing-heaters-2",
            title: "Steel Heat Treatment",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "metals"
        },

        // PETROCHEMICALS Industry - Alphabetically sorted
        {
            id: "catalyst-heaters",
            title: "Catalyst Heating Systems",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "petrochemicals"
        },
        {
            id: "heating-elements",
            title: "Custom Heating Elements",
            image: "https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "petrochemicals"
        },
        {
            id: "refinery-heaters",
            title: "Refinery Process Heaters",
            image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "petrochemicals"
        },
        {
            id: "refinery-heaters-2",
            title: "Industrial Heating Systems",
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "petrochemicals"
        },

        // POWER Industry - Alphabetically sorted
        {
            id: "boiler-heaters",
            title: "Boiler Heating Systems",
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "power"
        },
        {
            id: "electric-heater-bundles",
            title: "Electric Heater Bundles",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "power"
        },
        {
            id: "turbine-heaters",
            title: "Turbine Heating Equipment",
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "power"
        },
        {
            id: "turbine-heaters-2",
            title: "Power Generation Heaters",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "power"
        },

        // CHEMICALS Industry - Alphabetically sorted
        {
            id: "chemical-reactor-heaters",
            title: "Chemical Reactor Heaters",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "chemicals"
        },
        {
            id: "distillation-heaters",
            title: "Distillation Column Heaters",
            image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "chemicals"
        },
        {
            id: "polymer-heaters",
            title: "Polymer Processing Heaters",
            image: "https://images.unsplash.com/photo-1581092446467-bea8e69e9ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "chemicals"
        },
        {
            id: "polymer-heaters-2",
            title: "Chemical Processing Equipment",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "chemicals"
        },

        // OIL & GAS Industry - Alphabetically sorted
        {
            id: "offshore-heaters",
            title: "Offshore Platform Heaters",
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oil-gas"
        },
        {
            id: "pipeline-heating-systems",
            title: "Pipeline Heating Systems",
            image: "https://images.unsplash.com/photo-1613123432717-e1cd14e5e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oil-gas"
        },
        {
            id: "wellhead-heaters",
            title: "Wellhead Heating Systems",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oil-gas"
        },
        {
            id: "wellhead-heaters-2",
            title: "Oil & Gas Processing",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oil-gas"
        },

        // PHARMACEUTICALS Industry - Alphabetically sorted
        {
            id: "pharmaceutical-heaters",
            title: "Pharmaceutical Process Heaters",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "pharmaceuticals"
        },
        {
            id: "tablet-coating-heaters",
            title: "Tablet Coating Heaters",
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "pharmaceuticals"
        },
        {
            id: "vaccine-heaters",
            title: "Vaccine Production Heaters",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "pharmaceuticals"
        },
        {
            id: "vaccine-heaters-2",
            title: "Pharma Manufacturing Equipment",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "pharmaceuticals"
        },

        // NEW INDUSTRIES - Alphabetically sorted
        {
            id: "advanced-control-heaters",
            title: "Advanced Control Systems",
            image: "https://images.unsplash.com/photo-1581092918468-bea8e69e9ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "new-industries"
        },
        {
            id: "smart-heaters",
            title: "IoT-Enabled Smart Heaters",
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "new-industries"
        },
        {
            id: "renewable-heaters",
            title: "Renewable Energy Heaters",
            image: "https://images.unsplash.com/photo-1581092787765-e3bb45187d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "new-industries"
        },
        {
            id: "renewable-heaters-2",
            title: "Next-Gen Heating Solutions",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "new-industries"
        },

        // OEM & EPC - Alphabetically sorted
        {
            id: "customised-heating",
            title: "Customised Heating Equipment",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oem-epc"
        },
        {
            id: "modular-heaters",
            title: "Modular Heating Systems",
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oem-epc"
        },
        {
            id: "turnkey-heating",
            title: "Turnkey Heating Solutions",
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oem-epc"
        },
        {
            id: "turnkey-heating-2",
            title: "Custom Engineering Solutions",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "oem-epc"
        },

        // INDUSTRIAL GASES - Alphabetically sorted
        {
            id: "air-heaters",
            title: "Air Heaters",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "industrial-gases"
        },
        {
            id: "nitrogen-heaters",
            title: "Nitrogen Heating Systems",
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "industrial-gases"
        },
        {
            id: "oxygen-heaters",
            title: "Oxygen Gas Heaters",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "industrial-gases"
        },
        {
            id: "oxygen-heaters-2",
            title: "Gas Processing Equipment",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "industrial-gases"
        },

        // WATER TREATMENT - Alphabetically sorted
        {
            id: "desalination-heaters",
            title: "Desalination Plant Heaters",
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "water-treatment"
        },
        {
            id: "wastewater-heaters",
            title: "Wastewater Treatment Heaters",
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "water-treatment"
        },
        {
            id: "water-treatment-heaters",
            title: "Water Treatment Heating Systems",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90",
            industry: "water-treatment"
        },
        {
            id: "water-treatment-heaters-2",
            title: "Water Purification Equipment",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            industry: "water-treatment"
        }
    ];

    // Filtered products
    const filteredProducts = useMemo(() => {
        return allProducts.filter(product => product.industry === selectedIndustry);
    }, [selectedIndustry]);

    // Get current industry data
    const currentIndustry = industries.find(industry => industry.id === selectedIndustry);

    // Scroll functions for tabs
    const scrollTabs = (direction) => {
        if (tabsRef.current) {
            const scrollAmount = 200;
            tabsRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-14 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                        <Trophy className="w-4 h-4 mr-2" />
                        Industries We Serve
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-6">
                        Specialized Heating Solutions Across Industries
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                        With over five decades of experience, we provide custom-designed heating equipment 
                        for diverse industries worldwide. Our solutions are engineered to meet the most 
                        demanding industrial requirements with precision and reliability.
                    </p>
                </div>

                {/* Tabs Section */}
                <div className="mb-12">
                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => scrollTabs('left')}
                            className="hidden lg:flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all mr-4"
                        >
                            <ChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>

                        <div
                            ref={tabsRef}
                            className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth pb-2 max-w-5xl"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {industries.map((industry) => {
                                const IconComponent = industry.icon;
                                const isActive = selectedIndustry === industry.id;
                                
                                return (
                                    <button
                                        key={industry.id}
                                        onClick={() => setSelectedIndustry(industry.id)}
                                        className={`flex-shrink-0 px-3 py-2 rounded-lg border transition-all duration-300 min-w-[110px] h-[36px] ${
                                            isActive 
                                                ? 'border-[#F0801C] bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white shadow-md' 
                                                : 'border-gray-200 bg-white hover:border-[#F0801C]/40 hover:bg-gray-50 text-gray-700'
                                        }`}
                                    >
                                        <div className="flex items-center justify-center gap-2">
                                            <IconComponent className={`w-4 h-4 ${
                                                isActive ? 'text-white' : 'text-[#F0801C]'
                                            }`} />
                                            <span className={`text-xs font-medium ${
                                                isActive ? 'text-white' : 'text-gray-700'
                                            }`}>
                                                {industry.name}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => scrollTabs('right')}
                            className="hidden lg:flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all ml-4"
                        >
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content - Industry Details */}
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-2xl flex items-center justify-center shadow-lg">
                                    {currentIndustry && <currentIndustry.icon className="w-8 h-8 text-white" />}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#2B2B2A] mb-1">
                                        {currentIndustry?.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        Comprehensive heating solutions
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {currentIndustry?.description}
                            </p>
                        </div>

                        {/* Products Image Grid - Equal sized images in 2 rows */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {filteredProducts.slice(0, 4).map((product, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Visual Elements */}
                    <div className="space-y-12">
                        {/* Main Industry Image */}
                        <Card className="overflow-hidden shadow-lg">
                            <CardContent className="p-0 relative">
                                <img
                                    src={currentIndustry?.image || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                                    alt={currentIndustry?.name}
                                    className="w-full h-80 object-cover"
                                />

                                {/* Overlay with View All Products Button */}
                                <div className="absolute bottom-6 left-6">
                                    <Button
                                        size="lg"
                                        onClick={() => window.location.href = `/products/${selectedIndustry}`}
                                        className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                                    >
                                        View All Products
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Industry Features */}
                        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 mt-1">
                            <h3 className="text-xl font-bold text-[#2B2B2A] mb-6 text-center">
                                Why Choose Our Solutions
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2B2A]">
                                            Quality Certified
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            International standards compliance
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Thermometer className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2B2A]">
                                            Precise Control
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Advanced temperature management
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Gauge className="w-6 h-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2B2A]">
                                            Energy Efficient
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Maximum efficiency solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default ProductPreview;