import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StoresSection from '../components/home/StoresSection';
import NewsSection from '../components/home/NewsSection';
import ServiceCarousel from '../components/home/ServiceCarousel';
import ContactSection from '../components/home/ContactSection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <StoresSection />
      <NewsSection />
      <ServiceCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
}
