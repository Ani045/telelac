import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
    Cog,
    Wrench,
    Headphones,
    Zap,
    ArrowRight,
    CheckCircle,
    Clock,
    Award,
} from "lucide-react";

const ServicesHighlight = () => {
    const services = [
        {
            icon: Cog,
            title: "Custom Design & Engineering",
            description:
                "Tailored heating solutions designed specifically for your industrial requirements",
            features: [
                "3D CAD Design",
                "Thermal Analysis",
                "Process Optimization",
            ],
            color: "bg-blue-500",
        },
        {
            icon: Wrench,
            title: "Installation & Commissioning",
            description:
                "Professional installation and setup by our certified technical team",
            features: [
                "On-site Support",
                "System Testing",
                "Performance Validation",
            ],
            color: "bg-green-500",
        },
        {
            icon: Headphones,
            title: "After-Sales Support",
            description:
                "24/7 technical support and maintenance services for optimal performance",
            features: [
                "Remote Monitoring",
                "Preventive Maintenance",
                "Emergency Response",
            ],
            color: "bg-purple-500",
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description:
                "Continuous improvement and optimization of your heating systems",
            features: [
                "Energy Audits",
                "Efficiency Upgrades",
                "Cost Reduction",
            ],
            color: "bg-orange-500",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-white via-gray-50 to-white py-14">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                        <Award className="w-4 h-4 mr-2" />
                        Our Services
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                        Complete Heating Solutions
                    </h2>
                    <p className="text-[#2B2B2A] text-lg max-w-3xl mx-auto">
                        From initial design to ongoing support, we provide
                        comprehensive services to ensure your heating systems
                        deliver optimal performance throughout their lifecycle
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                            <CardContent className="p-8">
                                <div className="text-center mb-6">
                                    <div
                                        className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-black text-lg mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-black text-sm leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center space-x-2">
                                            <CheckCircle className="h-4 w-4 text-[#F0801C]" />
                                            <span className="text-black text-sm">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full border-[#F0801C]/30 text-[#F0801C] hover:bg-[#F0801C] hover:text-white transition-all duration-300">
                                    <Link to="/contact">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Service Benefits */}
                <div className="bg-gradient-to-r from-[#2B2B2A] to-[#1a1a19] rounded-3xl p-12 text-white">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold mb-4">
                            Why Choose Our Services?
                        </h3>
                        <p className="text-gray-300 text-lg">
                            Experience the difference of working with industry
                            experts
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#F0801C]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-[#F0801C]" />
                            </div>
                            <h4 className="font-semibold text-xl mb-3">
                                Fast Response
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                                Quick turnaround times for quotes, design, and
                                support
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#F0801C]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-[#F0801C]" />
                            </div>
                            <h4 className="font-semibold text-xl mb-3">
                                Certified Experts
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                                Team of certified engineers and technicians
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#F0801C]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-[#F0801C]" />
                            </div>
                            <h4 className="font-semibold text-xl mb-3">
                                Guaranteed Results
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                                Performance guarantees backed by 50+ years of
                                experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHighlight;
