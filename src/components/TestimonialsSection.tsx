import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Award, MessageCircle, Users } from "lucide-react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            position: "Plant Manager",
            company: "INOX India Limited",
            content:
                "Telelec has been our trusted partner for over 15 years. Their heating solutions have consistently delivered reliable performance in our chemical processing operations.",
            rating: 5,
            industry: "Chemical Processing",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            projects: "25+",
            years: "15+",
        },
        {
            name: "Dr. Suresh Patel",
            position: "Chief Engineer",
            company: "Hindalco Industries",
            content:
                "The custom heating bundles provided by Telelec have significantly improved our process efficiency. Their technical expertise and after-sales service are exceptional.",
            rating: 5,
            industry: "Metals & Mining",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            projects: "18+",
            years: "12+",
        },
        {
            name: "Amit Sharma",
            position: "Technical Director",
            company: "SRF Limited",
            content:
                "We have implemented multiple Telelec heating systems across our facilities. The quality and durability of their products is unmatched in the industry.",
            rating: 5,
            industry: "Textiles",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            projects: "30+",
            years: "20+",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-white relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <Badge className="bg-[#F0801C]/10 text-[#F0801C] border-[#F0801C]/20 mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Client Testimonials
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B2A] mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-[#C6C7C7] text-lg max-w-3xl mx-auto">
                        Trusted by leading industries across India and
                        internationally. See why companies choose Telelec for
                        their heating solutions.
                    </p>
                </div>

                {/* Trust Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: Star, value: "4.9/5", label: "Average Rating" },
                        { icon: Users, value: "100+", label: "Happy Clients" },
                        {
                            icon: Award,
                            value: "98%",
                            label: "Client Retention",
                        },
                        {
                            icon: MessageCircle,
                            value: "15+",
                            label: "Years Partnership",
                        },
                    ].map(({ icon: Icon, value, label }, idx) => (
                        <div key={idx} className="text-center">
                            <div className="w-16 h-16 bg-[#F0801C]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow">
                                <Icon className="h-8 w-8 text-[#F0801C]" />
                            </div>
                            <div className="text-2xl font-bold text-[#2B2B2A] mb-1">
                                {value}
                            </div>
                            <div className="text-[#C6C7C7] text-sm">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white relative overflow-hidden">
                            {/* Background Quote */}
                            <div className="absolute top-4 right-4 select-none pointer-events-none">
                                <Quote className="h-16 w-16 text-[#F0801C] opacity-10" />
                            </div>

                            <CardContent className="p-8">
                                {/* Rating */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-[#F0801C] text-[#F0801C]"
                                                />
                                            )
                                        )}
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="border-[#F0801C]/30 text-[#F0801C] text-xs font-semibold">
                                        {testimonial.industry}
                                    </Badge>
                                </div>

                                {/* Content */}
                                <p className="text-[#2B2B2A] mb-8 leading-relaxed text-base italic">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Client Info */}
                                <div className="border-t pt-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-4 border-[#F0801C]/20 shadow"
                                        />

                                        <div>
                                            <h4 className="font-bold text-[#2B2B2A] text-lg">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-[#C6C7C7] text-sm">
                                                {testimonial.position}
                                            </p>
                                            <p className="text-[#F0801C] text-sm font-semibold">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Project Stats */}
                                    <div className="flex items-center space-x-6 text-center">
                                        <div>
                                            <div className="text-lg font-bold text-[#F0801C]">
                                                {testimonial.projects}
                                            </div>
                                            <div className="text-xs text-[#C6C7C7]">
                                                Projects
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-[#F0801C]">
                                                {testimonial.years}
                                            </div>
                                            <div className="text-xs text-[#C6C7C7]">
                                                Partnership
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-[#F0801C]/10 to-[#D6701A]/10 rounded-2xl p-8 border border-[#F0801C]/20 shadow">
                        <h3 className="text-2xl font-bold text-[#2B2B2A] mb-3">
                            Join Our Satisfied Clients
                        </h3>
                        <p className="text-[#C6C7C7] mb-6 max-w-xl mx-auto">
                            Experience the reliability and quality that industry
                            leaders trust
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="flex -space-x-2">
                                {testimonials.map((testimonial, index) => (
                                    <img
                                        key={index}
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
                                    />
                                ))}
                            </div>
                            <div className="text-sm text-[#C6C7C7]">
                                <span className="font-semibold text-[#F0801C]">
                                    100+
                                </span>{" "}
                                companies trust us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
