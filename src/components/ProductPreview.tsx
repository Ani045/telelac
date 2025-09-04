import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    FlaskConical
} from "lucide-react";

const ProductPreview = () => {
    const [selectedIndustry, setSelectedIndustry] = useState("all");

    const industries = [
        {
            id: "metals",
            name: "METALS",
            icon: Factory,
            sectorIndex: 0,
            color: "#FF5733",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "petrochemicals",
            name: "PETROCHEMICALS", 
            icon: Flame,
            sectorIndex: 1,
            color: "#FF8C00",
            image: "https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "power",
            name: "POWER",
            icon: Zap,
            sectorIndex: 2,
            color: "#FFD700",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "chemicals",
            name: "CHEMICALS",
            icon: FlaskConical,
            sectorIndex: 3,
            color: "#32CD32",
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "oil-gas",
            name: "OIL & GAS",
            icon: Droplets,
            sectorIndex: 4,
            color: "#1E90FF",
            image: "https://images.unsplash.com/photo-1613123432717-e1cd14e5e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "pharmaceuticals",
            name: "PHARMACEUTICALS",
            icon: Cpu,
            sectorIndex: 5,
            color: "#8A2BE2",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "new-industries",
            name: "NEW INDUSTRIES",
            icon: Settings,
            sectorIndex: 6,
            color: "#FF1493",
            image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "oem-epc",
            name: "OEM & EPC",
            icon: Building2,
            sectorIndex: 7,
            color: "#DC143C",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "industrial-gases",
            name: "INDUSTRIAL GASES",
            icon: Wind,
            sectorIndex: 8,
            color: "#20B2AA",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        },
        {
            id: "water-treatment",
            name: "WATER TREATMENT",
            icon: Droplets,
            sectorIndex: 9,
            color: "#708090",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90"
        }
    ];

    // SVG pie chart calculation functions
    const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const describeArc = (x, y, radius, startAngle, endAngle) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        const d = [
            "M", x, y,
            "L", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            "Z"
        ].join(" ");
        return d;
    };

    const getSectorPath = (index, centerX, centerY, radius) => {
        const anglePerSector = 360 / industries.length;
        const startAngle = index * anglePerSector;
        const endAngle = startAngle + anglePerSector;
        return describeArc(centerX, centerY, radius, startAngle, endAngle);
    };

    const getLabelPosition = (index, centerX, centerY, radius) => {
        const anglePerSector = 360 / industries.length;
        const angle = (index * anglePerSector) + (anglePerSector / 2);
        const labelRadius = radius + 120; // Increased from 80 to 120 for better visibility
        return polarToCartesian(centerX, centerY, labelRadius, angle);
    };

    // Product data with industry mapping
    const allProducts = [
        {
            id: "electric-heater-bundles",
            title: "Electric Heater Bundles & Inline Process Heaters",
            description: "Custom-designed inline process heaters for industrial applications with precise temperature control and energy efficiency.",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Custom Design", "High Efficiency", "Precise Control"],
            rating: 4.8,
            installations: "800+",
            industry: "power"
        },
        {
            id: "air-heaters",
            title: "Air Heaters",
            description: "Advanced air heating solutions for compressed air, process air, and HVAC applications across various industries.",
            icon: Wind,
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Energy Efficient", "Corrosion Resistant", "Low Maintenance"],
            rating: 4.9,
            installations: "1200+",
            industry: "industrial-gases"
        },
        {
            id: "metal-finishing-tanks",
            title: "Heaters for Metal Finishing Tanks",
            description: "Specialized heating solutions for electroplating, anodizing, and metal treatment processes with superior durability.",
            icon: Wrench,
            image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Chemical Resistant", "Precision Heating", "Long Life"],
            rating: 4.7,
            installations: "600+",
            industry: "metals"
        },
        {
            id: "heater-control-panels",
            title: "Heater Control Panels",
            description: "Advanced control systems for precise temperature management and process automation.",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Smart Control", "Remote Monitoring", "Safety Systems"],
            rating: 4.8,
            installations: "400+",
            industry: "new-industries"
        },
        {
            id: "customised-heating",
            title: "Customised Heating Equipment",
            description: "Tailored heating solutions designed to meet specific industrial requirements and applications.",
            icon: Thermometer,
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Custom Design", "Application Specific", "Expert Engineering"],
            rating: 4.9,
            installations: "350+",
            industry: "oem-epc"
        },
        {
            id: "heating-elements",
            title: "Standard and Custom Heating Elements",
            description: "Wide range of heating elements for various industrial applications and temperature requirements.",
            icon: Flame,
            image: "https://images.unsplash.com/photo-1581092918484-8313bbc2c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Standard & Custom", "High Temperature", "Durable Materials"],
            rating: 4.6,
            installations: "1500+",
            industry: "petrochemicals"
        },
        {
            id: "chemical-reactor-heaters",
            title: "Chemical Reactor Heaters",
            description: "Precision heating solutions for chemical reaction vessels and processing equipment.",
            icon: FlaskConical,
            image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Precise Control", "Chemical Resistant", "Custom Design"],
            rating: 4.8,
            installations: "720+",
            industry: "chemicals"
        },
        {
            id: "pipeline-heating-systems",
            title: "Pipeline Heating Systems",
            description: "Specialized heating solutions for oil and gas pipeline temperature maintenance.",
            icon: Droplets,
            image: "https://images.unsplash.com/photo-1613123432717-e1cd14e5e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Weather Resistant", "Long Distance", "Energy Efficient"],
            rating: 4.8,
            installations: "890+",
            industry: "oil-gas"
        },
        {
            id: "pharmaceutical-heaters",
            title: "Pharmaceutical Process Heaters",
            description: "Clean room compatible heating solutions for pharmaceutical manufacturing processes.",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            features: ["Clean Room", "FDA Compliant", "Sterile Design"],
            rating: 4.9,
            installations: "450+",
            industry: "pharmaceuticals"
        },
        {
            id: "water-treatment-heaters",
            title: "Water Treatment Heating Systems",
            description: "Efficient heating solutions for water treatment and purification processes.",
            icon: Droplets,
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=90",
            features: ["Corrosion Resistant", "Energy Efficient", "Low Maintenance"],
            rating: 4.7,
            installations: "650+",
            industry: "water-treatment"
        }
    ];

    const highlights = [
        {
            icon: Thermometer,
            title: "Precise Control",
            description: "Advanced temperature management",
            gradient: "from-orange-500 via-orange-600 to-red-600"
        },
        {
            icon: Shield,
            title: "Safety Certified",
            description: "International standards compliance",
            gradient: "from-amber-500 via-orange-600 to-orange-700"
        },
        {
            icon: Gauge,
            title: "Energy Efficient",
            description: "Maximum efficiency solutions",
            gradient: "from-yellow-500 via-orange-600 to-red-600"
        }
    ];

    // Filtered products using useMemo for performance
    const filteredProducts = useMemo(() => {
        if (selectedIndustry === "all") {
            return allProducts;
        }
        return allProducts.filter(product => product.industry === selectedIndustry);
    }, [selectedIndustry, allProducts]);

    const handleSectorClick = (industry) => {
        setSelectedIndustry(industry.id);
    };

    return (
        <div className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 min-h-screen w-full">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-300px] left-[-300px] w-96 h-96 bg-orange-400 rounded-full opacity-[0.02] filter blur-3xl"></div>
                <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-400 rounded-full opacity-[0.02] filter blur-3xl"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-400 rounded-full opacity-[0.015] filter blur-3xl"></div>
            </div> */}

            {/* Full Width Container with extra padding for labels */}
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
                <div className="py-4 sm:py-6 md:py-8 lg:py-12">
                    <div className="text-center mb-4 sm:mb-6 md:mb-8">
                        <Badge className="bg-[#F0801C]/15 text-[#F0801C] border-[#F0801C]/30 mb-2 sm:mb-3 px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                            Industries We Serve
                        </Badge>
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#2B2B2A] mb-1 sm:mb-2 md:mb-3 tracking-tight">
                            Select Your Industry
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-2">
                            Click on any industry segment to see our specialized heating solutions
                        </p>
                    </div>

                    {/* Main Content - Removed background container */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 mb-3 sm:mb-4 md:mb-6 lg:mb-8 mx-auto max-w-7xl overflow-visible">
                        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                            
                            {/* Interactive SVG Pie Chart - With improved label visibility */}
                            <div className="lg:col-span-3 flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20">
                                <div className="w-full max-w-[800px] aspect-square"> {/* Increased from 700px */}
                                    
                                    <svg 
                                        width="100%" 
                                        height="100%" 
                                        viewBox="0 0 800 800"  /* Increased from 700 700 */
                                        preserveAspectRatio="xMidYMid meet"
                                        className="overflow-visible"
                                    >
                                        {/* Define patterns for images with proper scaling */}
                                        <defs>
                                            {industries.map((industry, index) => (
                                                <pattern 
                                                    key={`pattern-${index}`}
                                                    id={`image-pattern-${index}`} 
                                                    patternUnits="userSpaceOnUse" 
                                                    x="0" 
                                                    y="0" 
                                                    width="800" 
                                                    height="800"
                                                >
                                                    <image 
                                                        href={industry.image} 
                                                        x="0" 
                                                        y="0" 
                                                        width="800" 
                                                        height="800" 
                                                        preserveAspectRatio="xMidYMid slice"
                                                    />
                                                </pattern>
                                            ))}
                                            
                                            {/* Define clip paths for precise sector shapes */}
                                            {industries.map((industry, index) => {
                                                const path = getSectorPath(index, 400, 400, 240); /* Updated center coordinates */
                                                return (
                                                    <clipPath key={`clip-${index}`} id={`sector-clip-${index}`}>
                                                        <path d={path} />
                                                    </clipPath>
                                                );
                                            })}
                                            
                                            {/* Center gradient */}
                                            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                                                <stop offset="0%" stopColor="#F0801C" />
                                                <stop offset="100%" stopColor="#1a1a1a" />
                                            </radialGradient>
                                        </defs>
                                        
                                        {/* Pie sectors with fully visible images */}
                                        {industries.map((industry, index) => {
                                            const isSelected = selectedIndustry === industry.id;
                                            const path = getSectorPath(index, 400, 400, 240); /* Updated center coordinates */
                                            const labelPos = getLabelPosition(index, 400, 400, 240); /* Updated center coordinates */
                                            
                                            return (
                                                <g key={industry.id}>
                                                    {/* Sector filled with pattern */}
                                                    <path
                                                        d={path}
                                                        fill={`url(#image-pattern-${index})`}
                                                        stroke="#ffffff"
                                                        strokeWidth="4"
                                                        className={`cursor-pointer transition-all duration-300 ${
                                                            isSelected ? 'opacity-90' : 'hover:opacity-80'
                                                        }`}
                                                        onClick={() => handleSectorClick(industry)}
                                                    />
                                                    
                                                    {/* Selection overlay */}
                                                    {isSelected && (
                                                        <path
                                                            d={path}
                                                            fill={industry.color}
                                                            fillOpacity="0.25"
                                                            stroke="#F0801C"
                                                            strokeWidth="5"
                                                            className="pointer-events-none"
                                                        />
                                                    )}
                                                    
                                                    {/* Industry labels positioned outside without background boxes */}
                                                    <g className="cursor-pointer" onClick={() => handleSectorClick(industry)}>
                                                        <text
                                                            x={labelPos.x}
                                                            y={labelPos.y}
                                                            textAnchor="middle"
                                                            dominantBaseline="middle"
                                                            className={`font-bold transition-all duration-300 drop-shadow-lg ${
                                                                isSelected ? 'fill-orange-600' : 'fill-gray-800 hover:fill-orange-600'
                                                            }`}
                                                            style={{ 
                                                                fontSize: 'clamp(12px, 2.2vw, 20px)',
                                                                filter: 'drop-shadow(2px 2px 4px rgba(255,255,255,0.8)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.6))'
                                                            }}
                                                        >
                                                            {industry.name}
                                                        </text>
                                                    </g>
                                                </g>
                                            );
                                        })}
                                        
                                        {/* Center logo */}
                                        <circle 
                                            cx="400" 
                                            cy="400" 
                                            r="90" 
                                            fill="url(#centerGradient)"
                                            stroke="#ffffff"
                                            strokeWidth="6"
                                        />
                                        
                                        <text 
                                            x="400" 
                                            y="410" 
                                            textAnchor="middle" 
                                            dominantBaseline="middle"
                                            className="font-black fill-white tracking-wider"
                                            style={{ fontSize: 'clamp(36px, 8vw, 60px)' }}
                                        >
                                            ET
                                        </text>
                                        
                                        <text 
                                            x="400" 
                                            y="440" 
                                            textAnchor="middle" 
                                            dominantBaseline="middle"
                                            className="font-medium fill-white/80"
                                            style={{ fontSize: 'clamp(14px, 2.5vw, 20px)' }}
                                        >
                                            HEATING
                                        </text>
                                    </svg>
                                </div>
                            </div>

                            {/* Products List - With background */}
                            <div className="lg:col-span-2 space-y-2 sm:space-y-3 md:space-y-4">
                                <div className="sticky top-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                                    <div className="text-left mb-2 sm:mb-3 md:mb-4">
                                        <Badge className="bg-[#F0801C]/15 text-[#F0801C] border-[#F0801C]/30 mb-2 sm:mb-3 text-xs font-semibold">
                                            {selectedIndustry === "all" ? "All Products" : "Industry Solutions"}
                                        </Badge>
                                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#2B2B2A] mb-1 sm:mb-2 leading-tight">
                                            {selectedIndustry === "all" ? "Complete Product Range" : 
                                             industries.find(i => i.id === selectedIndustry)?.name + " Solutions" || "All Products"}
                                        </h3>
                                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                                            {filteredProducts.length} specialized heating solution{filteredProducts.length !== 1 ? 's' : ''}
                                        </p>
                                        
                                        <Button
                                            onClick={() => setSelectedIndustry("all")}
                                            size="sm"
                                            variant={selectedIndustry === "all" ? "default" : "outline"}
                                            className={`mb-3 sm:mb-4 text-xs ${selectedIndustry === "all" 
                                                ? "bg-[#F0801C] hover:bg-[#D6701A]" 
                                                : "border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white"
                                            }`}
                                        >
                                            Show All Industries
                                        </Button>
                                    </div>

                                    {/* Filtered Products List */}
                                    <div className="space-y-2 sm:space-y-3 max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
                                        {filteredProducts.map((product) => (
                                            <Card
                                                key={product.id}
                                                className="group hover:shadow-lg transition-all duration-300 border border-gray-200 bg-white/70 backdrop-blur-sm hover:bg-white">
                                                <div className="flex p-2 sm:p-3">
                                                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 overflow-hidden rounded-md">
                                                        <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        />
                                                        <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1">
                                                            <div className="p-0.5 bg-white/90 backdrop-blur-sm rounded shadow">
                                                                <product.icon className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 text-[#F0801C]" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex-1 ml-2 sm:ml-3">
                                                        <h4 className="font-semibold text-[#2B2B2A] text-xs sm:text-sm md:text-base group-hover:text-[#F0801C] transition-colors line-clamp-2 leading-tight mb-1">
                                                            {product.title}
                                                        </h4>
                                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-1 sm:mb-2 line-clamp-2">
                                                            {product.description}
                                                        </p>
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-1 sm:gap-2">
                                                                <Badge
                                                                    variant="outline"
                                                                    className="border-[#F0801C]/30 text-[#F0801C] text-xs px-1 sm:px-2 py-0 font-medium">
                                                                    {product.features[0]}
                                                                </Badge>
                                                                <div className="flex items-center space-x-1">
                                                                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-yellow-500 fill-current" />
                                                                    <span className="text-xs font-medium text-gray-600">
                                                                        {product.rating}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <Badge className="bg-[#F0801C] text-white text-xs px-1 sm:px-2 py-0 font-medium">
                                                                {product.installations}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Highlights - Updated to match theme */}
                    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border border-orange-200/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative mx-auto max-w-7xl">
                        {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div> */}
                        {/* <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div> */}
                        
                        <div className="text-center mb-4 sm:mb-6 relative z-10">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2B2B2A] mb-1 sm:mb-2">
                                Why Choose Our Solutions
                            </h3>
                            <p className="text-gray-700 text-xs sm:text-sm">
                                Advanced features ensuring superior performance
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 relative z-10">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="text-center group">
                                    <div className={`p-2 sm:p-3 bg-gradient-to-r ${highlight.gradient} rounded-lg sm:rounded-xl w-fit mx-auto mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300`}>
                                        <highlight.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                                    </div>
                                    <h4 className="font-semibold text-[#2B2B2A] text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                        {highlight.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-4 sm:mt-6 relative z-10">
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-[#F0801C] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm transition-all duration-300">
                                View All Products
                                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Scrollbar */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #F0801C;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #D6701A;
                }
            `}</style>
        </div>
    );
};

export default ProductPreview;