import React from 'react';
import HeroSection from '@/components/HeroSection';

import ClientCarousel from '@/components/ClientCarousel';
import ProductPreview from '@/components/ProductPreview';
import ServicesHighlight from '@/components/ServicesHighlight';
import TechnologyShowcase from '@/components/TechnologyShowcase';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import IndustriesPreview from '@/components/IndustriesPreview';
import TestimonialsSection from '@/components/TestimonialsSection';
import AboutPreview from '@/components/AboutPreview';
import CTASection from '@/components/CTASection';

const HomeNew = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ClientCarousel />
       <AboutPreview />
      <ProductPreview />
      <ServicesHighlight />
      
      <WhyChooseUsSection />
      <IndustriesPreview />
      <TestimonialsSection />
     
      <CTASection />
    </div>);

};

export default HomeNew;