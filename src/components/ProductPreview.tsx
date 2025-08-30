import React from "react";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const ProductPreview = () => {
    const products = [
        {
            id: "heater-bundles",
            title: "Electric Heater Bundles",
            description:
                "Custom-designed inline process heaters for industrial applications with precise temperature control and energy efficiency.",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["Custom Design", "High Efficiency", "Precise Control"],
            applications: "Chemical Processing, Oil & Gas",
            rating: 4.8,
            installations: "800+",
        },
        {
            id: "air-heaters",
            title: "Industrial Air Heaters",
            description:
                "Advanced air heating solutions for compressed air, process air, and HVAC applications across various industries.",
            icon: Wind,
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: [
                "Energy Efficient",
                "Corrosion Resistant",
                "Low Maintenance",
            ],
            applications: "Power Generation, Manufacturing",
            rating: 4.9,
            installations: "1200+",
        },
        {
            id: "metal-finishing",
            title: "Metal Finishing Heaters",
            description:
                "Specialized heating solutions for electroplating, anodizing, and metal treatment processes with superior durability.",
            icon: Wrench,
            image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["Chemical Resistant", "Precision Heating", "Long Life"],
            applications: "Automotive, Aerospace",
            rating: 4.7,
            installations: "600+",
        },
        {
            id: "process-heaters",
            title: "Process Heaters",
            description:
                "Custom engineered heating solutions for chemical processing and industrial manufacturing applications.",
            icon: Settings,
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            features: ["ASME Certified", "Explosion Proof", "High Temperature"],
            applications: "Petrochemicals, Pharmaceuticals",
            rating: 4.8,
            installations: "400+",
        },
    ];

    const highlights = [
        {
            icon: Thermometer,
            title: "Precise Temperature Control",
            description:
                "Advanced control systems ensure optimal temperature management",
            color: "bg-blue-500",
        },
        {
            icon: Shield,
            title: "Safety Certified",
            description:
                "All products meet international safety and quality standards",
            color: "bg-green-500",
        },
        {
            icon: Gauge,
            title: "Energy Efficient",
            description:
                "Designed for maximum efficiency and minimum operating costs",
            color: "bg-purple-500",
        },
    ];

    return (
        <section className="relative py-14 bg-orange-50 overflow-hidden">
            {/* Decorative light orange circles in background */}
            <div className="absolute top-[-120px] left-[-100px] w-72 h-72 bg-[#F0801C] rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-100px] right-[-120px] w-96 h-96 bg-[#F0801C] rounded-full opacity-10 filter blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                        Our Product Range
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                        Industrial Heating Excellence
                    </h2>
                    <p className="text-[#2B2B2A] text-lg max-w-3xl mx-auto">
                        Comprehensive range of custom-designed electric heating
                        solutions engineered for reliability, efficiency, and
                        performance across diverse industrial applications
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden relative">
                            <div className="absolute top-4 right-4 z-10">
                                <Badge className="bg-[#F0801C] text-white text-xs font-medium">
                                    {product.installations}
                                </Badge>
                            </div>

                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                                        <product.icon className="h-6 w-6 text-[#F0801C]" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center justify-between">
                                        <Badge className="bg-[#F0801C] text-white text-xs">
                                            {product.applications}
                                        </Badge>
                                        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                            <span className="text-xs font-medium text-gray-800">
                                                {product.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg text-black group-hover:text-[#F0801C] transition-colors line-clamp-2">
                                    {product.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pt-0 space-y-4">
                                <p className="text-black text-sm leading-relaxed line-clamp-3">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {product.features.map((feature, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="border-[#F0801C]/30 text-[#F0801C] text-xs hover:bg-[#F0801C]/10">
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>

                                <Button
                                    asChild
                                    className="w-full bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Link to={`/products/${product.id}`}>
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Feature Highlights */}
                <div className="bg-gradient-to-r from-[#2B2B2A] to-[#1a1a19] rounded-3xl p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Why Our Products Stand Out
                        </h3>
                        <p className="text-gray-300 text-lg">
                            Advanced features that ensure superior performance
                            and reliability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="text-center group">
                                <div
                                    className={`p-6 ${highlight.color} rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <highlight.icon className="h-10 w-10 text-white" />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">
                                    {highlight.title}
                                </h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        <Link to="/products">
                            View All Products
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductPreview;
