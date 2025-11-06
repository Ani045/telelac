import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Award, Globe, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      badge: { icon: Shield, text: 'IS 4159 & ASME Certified' },
      title: 'Premium Quality',
      highlight: 'Heating Solutions',
      description: 'Engineered with precision and certified to international standards',
      stats: [
        { icon: CheckCircle, text: 'ISO Certified' },
        { icon: CheckCircle, text: '100% Quality Tested' }
      ]
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      badge: { icon: Award, text: 'Trusted Since 1971' },
      title: '50+ Years of',
      highlight: 'Excellence',
      description: 'Five decades of expertise in industrial electric heating solutions',
      stats: [
        { icon: CheckCircle, text: '3000+ Installations' },
        { icon: CheckCircle, text: 'Expert Engineering' }
      ]
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      badge: { icon: Globe, text: 'Global Presence' },
      title: 'Worldwide',
      highlight: 'Service & Support',
      description: 'Serving industries across India and 10+ countries with reliable solutions',
      stats: [
        { icon: CheckCircle, text: 'Pan-India Service' },
        { icon: CheckCircle, text: '24/7 Support' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-[#2B2B2A] text-white overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-[600px] sm:h-[650px] lg:h-[600px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2A]/85 via-[#2B2B2A]/70 to-[#2B2B2A]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2A]/60 via-transparent to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-[#F0801C]/10 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl space-y-4 sm:space-y-6 pb-16 sm:pb-12 lg:pb-0">
                {/* Badge */}
                <Badge className="bg-[#F0801C]/20 text-[#F0801C] border-[#F0801C]/30 backdrop-blur-sm text-sm px-4 py-2">
                  <slide.badge.icon className="w-4 h-4 mr-2" />
                  {slide.badge.text}
                </Badge>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slide.title}
                  <span className="block text-[#F0801C] mt-1 sm:mt-2">{slide.highlight}</span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                  {slide.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {slide.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2"
                    >
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                      <span className="text-xs sm:text-sm font-medium">{stat.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#F0801C] to-[#D6701A] hover:from-[#D6701A] hover:to-[#C6601A] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-[#2B2B2A] px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm"
                  >
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'bg-[#F0801C] w-12 h-3'
                  : 'bg-white/40 hover:bg-white/60 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;