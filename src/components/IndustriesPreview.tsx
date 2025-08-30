import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Factory,
    Droplets,
    Fuel,
    Zap,
    Building,
    Cpu,
    ArrowRight,
    Users,
    Target,
} from "lucide-react";

const IndustriesPreview = () => {
    const industries = [
        {
            title: "Process Industry",
            description:
                "Chemicals, Fertilizers, Petrochemicals, Cement manufacturing processes",
            icon: Factory,
            image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            clients: "25+",
            projects: "400+",
        },
        {
            title: "Oil & Gas",
            description:
                "Upstream, midstream, and downstream oil & gas processing applications",
            icon: Fuel,
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            clients: "15+",
            projects: "300+",
        },
        {
            title: "Water Treatment",
            description:
                "Municipal and industrial water treatment and purification systems",
            icon: Droplets,
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            clients: "20+",
            projects: "250+",
        },
        {
            title: "Power Generation",
            description:
                "Nuclear, Solar, Gas, and Thermal power generation facilities",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            clients: "12+",
            projects: "180+",
        },
        {
            title: "Metals & Minerals",
            description:
                "Metal refining, processing, and mineral extraction operations",
            icon: Building,
            image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            clients: "18+",
            projects: "220+",
        },
        {
            title: "Industrial Gases",
            description:
                "Compressed air heating and industrial gas processing systems",
            icon: Cpu,
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            clients: "10+",
            projects: "150+",
        },
    ];

    return (
        <section className="py-14 bg-orange-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4">
                        <Target className="w-4 h-4 mr-2" />
                        Industries We Serve
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                        Powering Diverse Industries
                    </h2>
                    <p className="text-black text-lg max-w-3xl mx-auto">
                        Our heating solutions power critical operations across
                        diverse industries worldwide, delivering reliability and
                        efficiency where it matters most
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {industries.map((industry, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-500 bg-white border border-gray-200 shadow-md overflow-hidden rounded-lg">
                            <div className="relative overflow-hidden rounded-t-lg">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-t-lg" />
                                <div className="absolute top-4 left-4">
                                    <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                                        <industry.icon className="h-6 w-6 text-[#F0801C]" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="font-bold text-white text-xl mb-2">
                                        {industry.title}
                                    </h3>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1 bg-white/25 backdrop-blur-sm rounded-lg px-3 py-1">
                                            <Users className="h-4 w-4 text-white" />
                                            <span className="text-white text-sm font-medium">
                                                {industry.clients} Clients
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-1 bg-white/25 backdrop-blur-sm rounded-lg px-3 py-1">
                                            <Target className="h-4 w-4 text-white" />
                                            <span className="text-white text-sm font-medium">
                                                {industry.projects} Projects
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardContent className="p-8">
                                <p className="text-black leading-relaxed mb-6">
                                    {industry.description}
                                </p>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full border-[#F0801C] text-[#F0801C] hover:bg-[#F0801C] hover:text-white transition-all duration-300">
                                    <Link to="/industries">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                        <Link to="/industries">
                            Explore All Industries
                            <ArrowRight className="ml-2 h-6 w-6" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default IndustriesPreview;
