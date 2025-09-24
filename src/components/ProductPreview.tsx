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
    Star,
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
    const [selectedIndustry, setSelectedIndustry] = useState("metals");
    const tabsRef = useRef(null);

    const industries = [
        {
            id: "metals",
            name: "METALS",
            icon: Factory,
            color: "#FF5733",
            image: "Metals.png",
            description: "Advanced heating solutions for metal processing, forging, and treatment applications with precise temperature control."
        },
        {
            id: "petrochemicals",
            name: "PETROCHEMICALS", 
            icon: Flame,
            color: "#FF8C00",
            image: "PETROCHEMICALS.png",
            description: "Specialized heating equipment for petrochemical processing and refining operations."
        },
        {
            id: "power",
            name: "POWER",
            icon: Zap,
            color: "#FFD700",
            image: "POWER.png",
            description: "Reliable heating systems for power generation and electrical infrastructure applications."
        },
        {
            id: "chemicals",
            name: "CHEMICALS",
            icon: FlaskConical,
            color: "#32CD32",
            image: "CHEMICALS.png",
            description: "Precision heating solutions for chemical processing and manufacturing applications."
        },
        {
            id: "oil-gas",
            name: "OIL & GAS",
            icon: Droplets,
            color: "#1E90FF",
            image: "Oil & Gas.png",
            description: "Heavy-duty heating equipment for oil and gas extraction and processing operations."
        },
        {
            id: "pharmaceuticals",
            name: "PHARMACEUTICALS",
            icon: Cpu,
            color: "#8A2BE2",
            image: "PHARMACEUTICALS.png",
            description: "Clean room compatible heating solutions for pharmaceutical manufacturing processes."
        },
        {
            id: "new-industries",
            name: "NEW INDUSTRIES",
            icon: Settings,
            color: "#FF1493",
            image: "NEW-INDUSTRIES.png",
            description: "Innovative heating technologies for emerging industrial applications and processes."
        },
        {
            id: "oem-epc",
            name: "OEM & EPC",
            icon: Building2,
            color: "#DC143C",
            image: "OEM & EPC.png",
            description: "Custom engineered heating solutions for OEMs and EPC contractors worldwide."
        },
        {
            id: "industrial-gases",
            name: "INDUSTRIAL GASES",
            icon: Wind,
            color: "#20B2AA",
            image: "Oil &gas.png",
            description: "Specialized heating systems for industrial gas production and handling operations."
        },
        {
            id: "water-treatment",
            name: "WATER TREATMENT",
            icon: Droplets,
            color: "#708090",
            image: "Water-treatment.png",
            description: "Corrosion-resistant heating solutions for water treatment and purification processes."
        }
    ];

    // Sample product data
    const allProducts = [
        // METALS Industry
        {
            id: "metal-finishing-tanks",
            title: "Metal Finishing Tank Heaters",
            icon: Wrench,
            image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Chemical Resistant"],
            rating: 4.7,
            installations: "600+",
            industry: "metals"
        },
        {
            id: "metal-forging-heaters",
            title: "Metal Forging Heaters",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["High Temperature"],
            rating: 4.8,
            installations: "420+",
            industry: "metals"
        },
        {
            id: "steel-processing-heaters",
            title: "Steel Processing Heaters",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Heavy Duty"],
            rating: 4.9,
            installations: "380+",
            industry: "metals"
        },

        // PETROCHEMICALS Industry  
        {
            id: "heating-elements",
            title: "Custom Heating Elements",
            icon: Flame,
            image: "https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Custom Design"],
            rating: 4.6,
            installations: "1500+",
            industry: "petrochemicals"
        },
        {
            id: "refinery-heaters",
            title: "Refinery Process Heaters",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Explosion Proof"],
            rating: 4.8,
            installations: "650+",
            industry: "petrochemicals"
        },
        {
            id: "catalyst-heaters",
            title: "Catalyst Heating Systems",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Precise Control"],
            rating: 4.7,
            installations: "340+",
            industry: "petrochemicals"
        },

        // POWER Industry
        {
            id: "electric-heater-bundles",
            title: "Electric Heater Bundles",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["High Efficiency"],
            rating: 4.8,
            installations: "800+",
            industry: "power"
        },
        {
            id: "boiler-heaters",
            title: "Boiler Heating Systems",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["High Pressure"],
            rating: 4.9,
            installations: "520+",
            industry: "power"
        },
        {
            id: "turbine-heaters",
            title: "Turbine Heating Equipment",
            icon: Wind,
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Quick Response"],
            rating: 4.7,
            installations: "310+",
            industry: "power"
        },

        // CHEMICALS Industry
        {
            id: "chemical-reactor-heaters",
            title: "Chemical Reactor Heaters",
            icon: FlaskConical,
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Chemical Resistant"],
            rating: 4.8,
            installations: "720+",
            industry: "chemicals"
        },
        {
            id: "distillation-heaters",
            title: "Distillation Column Heaters",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Energy Efficient"],
            rating: 4.6,
            installations: "480+",
            industry: "chemicals"
        },
        {
            id: "polymer-heaters",
            title: "Polymer Processing Heaters",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1581092446467-bea8e69e9ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Uniform Heating"],
            rating: 4.7,
            installations: "390+",
            industry: "chemicals"
        },

        // OIL & GAS Industry
        {
            id: "pipeline-heating-systems",
            title: "Pipeline Heating Systems",
            icon: Droplets,
            image: "https://images.unsplash.com/photo-1613123432717-e1cd14e5e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Weather Resistant"],
            rating: 4.8,
            installations: "890+",
            industry: "oil-gas"
        },
        {
            id: "offshore-heaters",
            title: "Offshore Platform Heaters",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Marine Grade"],
            rating: 4.9,
            installations: "450+",
            industry: "oil-gas"
        },
        {
            id: "wellhead-heaters",
            title: "Wellhead Heating Systems",
            icon: Wrench,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Freeze Protection"],
            rating: 4.7,
            installations: "320+",
            industry: "oil-gas"
        },

        // PHARMACEUTICALS Industry
        {
            id: "pharmaceutical-heaters",
            title: "Pharmaceutical Process Heaters",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Clean Room"],
            rating: 4.9,
            installations: "450+",
            industry: "pharmaceuticals"
        },
        {
            id: "vaccine-heaters",
            title: "Vaccine Production Heaters",
            icon: Shield,
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["GMP Compliant"],
            rating: 4.8,
            installations: "180+",
            industry: "pharmaceuticals"
        },
        {
            id: "tablet-coating-heaters",
            title: "Tablet Coating Heaters",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Uniform Temperature"],
            rating: 4.7,
            installations: "260+",
            industry: "pharmaceuticals"
        },

        // NEW INDUSTRIES
        {
            id: "smart-heaters",
            title: "IoT-Enabled Smart Heaters",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["IoT Connected"],
            rating: 4.9,
            installations: "220+",
            industry: "new-industries"
        },
        {
            id: "renewable-heaters",
            title: "Renewable Energy Heaters",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1581092787765-e3bb45187d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Solar Powered"],
            rating: 4.8,
            installations: "150+",
            industry: "new-industries"
        },
        {
            id: "advanced-control-heaters",
            title: "Advanced Control Systems",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1581092918468-bea8e69e9ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["AI Control"],
            rating: 4.8,
            installations: "180+",
            industry: "new-industries"
        },

        // OEM & EPC
        {
            id: "customised-heating",
            title: "Customised Heating Equipment",
            icon: Thermometer,
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Custom Design"],
            rating: 4.9,
            installations: "350+",
            industry: "oem-epc"
        },
        {
            id: "modular-heaters",
            title: "Modular Heating Systems",
            icon: Building2,
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Modular Design"],
            rating: 4.7,
            installations: "280+",
            industry: "oem-epc"
        },
        {
            id: "turnkey-heating",
            title: "Turnkey Heating Solutions",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Complete Package"],
            rating: 4.8,
            installations: "190+",
            industry: "oem-epc"
        },

        // INDUSTRIAL GASES
        {
            id: "air-heaters",
            title: "Air Heaters",
            icon: Wind,
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Energy Efficient"],
            rating: 4.9,
            installations: "1200+",
            industry: "industrial-gases"
        },
        {
            id: "nitrogen-heaters",
            title: "Nitrogen Heating Systems",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Inert Atmosphere"],
            rating: 4.8,
            installations: "380+",
            industry: "industrial-gases"
        },
        {
            id: "oxygen-heaters",
            title: "Oxygen Gas Heaters",
            icon: Flame,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Oxygen Safe"],
            rating: 4.7,
            installations: "290+",
            industry: "industrial-gases"
        },

        // WATER TREATMENT
        {
            id: "water-treatment-heaters",
            title: "Water Treatment Heating Systems",
            icon: Droplets,
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90",
            features: ["Corrosion Resistant"],
            rating: 4.7,
            installations: "650+",
            industry: "water-treatment"
        },
        {
            id: "wastewater-heaters",
            title: "Wastewater Treatment Heaters",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1581092918319-b04e6a92bc5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Chemical Resistant"],
            rating: 4.6,
            installations: "420+",
            industry: "water-treatment"
        },
        {
            id: "desalination-heaters",
            title: "Desalination Plant Heaters",
            icon: Droplets,
            image: "https://images.unsplash.com/photo-1581092918607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Salt Resistant"],
            rating: 4.8,
            installations: "230+",
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
                {/* Header Section - Matching About section style */}
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

                {/* Smaller, Cleaner Tabs Section */}
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

                {/* Main Content - Two Column Layout like About section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Content - Industry Details */}
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#F0801C] to-[#D6701A] rounded-2xl flex items-center justify-center shadow-lg">
                                    {currentIndustry && <currentIndustry.icon className="w-8 h-8 text-white" />}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#2B2B2A] mb-2">
                                        {currentIndustry?.name} SOLUTIONS
                                    </h3>
                                    <p className="text-gray-600">
                                        {filteredProducts.length} specialized products available
                                    </p>
                                </div>
                            </div>
                            
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {currentIndustry?.description}
                            </p>
                        </div>

                        {/* Products Grid - Matching About section features style */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {filteredProducts.slice(0, 4).map((product, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                >
                                    <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-1 left-1">
                                            <div className="p-1 bg-white/90 rounded shadow-sm">
                                                <product.icon className="h-2.5 w-2.5 text-[#F0801C]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#2B2B2A] mb-2">
                                            {product.title}
                                        </h4>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge
                                                variant="outline"
                                                className="border-[#F0801C]/30 text-[#F0801C] text-xs px-2 py-0 font-medium"
                                            >
                                                {product.features[0]}
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                                <span className="text-xs font-medium text-gray-600">
                                                    {product.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            {product.installations} installations worldwide
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            View All {currentIndustry?.name} Products
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    {/* Right Content - Visual Elements */}
                    <div className="space-y-8">
                        {/* Main Industry Image */}
                        <Card className="overflow-hidden shadow-lg">
                            <CardContent className="p-0 relative">
                                <img
                                    src={currentIndustry?.image || "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                                    alt={currentIndustry?.name}
                                    className="w-full h-80 object-cover"
                                />

                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#F0801C] to-[#D6701A] text-white p-6 rounded-2xl shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <Factory className="h-8 w-8" />
                                        <div>
                                            <div className="text-3xl font-bold">
                                                {filteredProducts.length}
                                            </div>
                                            <div className="text-sm opacity-90">
                                                Product Solutions
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Industry Features */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
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
