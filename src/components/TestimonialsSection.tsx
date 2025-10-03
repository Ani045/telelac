import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Award, MessageCircle, Users, ChevronLeft, ChevronRight, Building } from "lucide-react";

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    const testimonials = [
        {
            name: "Rajesh Kumar",
            position: "Plant Manager",
            company: "INOX India Limited",
            content:
                "Telelec has been our trusted partner for over 15 years. Their heating solutions have consistently delivered reliable performance in our chemical processing operations.",
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
            industry: "Textiles",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            projects: "30+",
            years: "20+",
        },
    ];

    // Check if mobile on component mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => 
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Touch handlers for mobile swipe
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <section className="py-16 bg-orange-50 relative">
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

                {/* Trust Metrics - Updated for B2B focus */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: Building, value: "100+", label: "Enterprise Clients" },
                        { icon: Users, value: "500+", label: "Projects Delivered" },
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

                {/* Testimonials - Mobile Slider / Desktop Grid */}
                {isMobile ? (
                    <div className="relative">
                        {/* Mobile Slider */}
                        <div 
                            className="overflow-hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div 
                                ref={sliderRef}
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ 
                                    transform: `translateX(-${currentSlide * 100}%)` 
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white relative overflow-hidden">
                                            {/* Background Quote */}
                                            <div className="absolute top-4 right-4 select-none pointer-events-none">
                                                <Quote className="h-16 w-16 text-[#F0801C] opacity-10" />
                                            </div>

                                            <CardContent className="p-6">
                                                {/* Industry Badge - Moved to top */}
                                                <div className="flex justify-end mb-4">
                                                    <Badge
                                                        variant="outline"
                                                        className="border-[#F0801C]/30 text-[#F0801C] text-xs font-semibold">
                                                        {testimonial.industry}
                                                    </Badge>
                                                </div>

                                                {/* Content */}
                                                <p className="text-[#2B2B2A] mb-6 leading-relaxed text-sm italic">
                                                    &quot;{testimonial.content}&quot;
                                                </p>

                                                {/* Client Info */}
                                                <div className="border-t pt-4">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            className="w-12 h-12 rounded-full object-cover border-2 border-[#F0801C]/20 shadow"
                                                        />
                                                        <div>
                                                            <h4 className="font-bold text-[#2B2B2A] text-base">
                                                                {testimonial.name}
                                                            </h4>
                                                            <p className="text-[#C6C7C7] text-xs">
                                                                {testimonial.position}
                                                            </p>
                                                            <p className="text-[#F0801C] text-xs font-semibold">
                                                                {testimonial.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Project Stats */}
                                                    <div className="flex items-center space-x-6 text-center">
                                                        <div>
                                                            <div className="text-base font-bold text-[#F0801C]">
                                                                {testimonial.projects}
                                                            </div>
                                                            <div className="text-xs text-[#C6C7C7]">
                                                                Projects
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-base font-bold text-[#F0801C]">
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
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#F0801C] hover:bg-[#F0801C] hover:text-white transition-colors duration-200"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-[#F0801C] hover:bg-[#F0801C] hover:text-white transition-colors duration-200"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                        currentSlide === index 
                                            ? 'bg-[#F0801C]' 
                                            : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Desktop Grid */
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white relative overflow-hidden"
                            >
                                {/* Background Quote */}
                                <div className="absolute top-4 right-4 select-none pointer-events-none">
                                    <Quote className="h-16 w-16 text-[#F0801C] opacity-10" />
                                </div>

                                <CardContent className="p-8">
                                    {/* Industry Badge - Moved to top */}
                                    <div className="flex justify-end mb-6">
                                        <Badge
                                            variant="outline"
                                            className="border-[#F0801C]/30 text-[#F0801C] text-xs font-semibold"
                                        >
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
                )}

                {/* Bottom CTA */}
                {/* <div className="mt-16 text-center">
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
                </div> */}
            </div>
        </section>
    );
};

export default TestimonialsSection;
