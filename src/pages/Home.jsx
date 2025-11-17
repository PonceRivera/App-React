import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import StatsSection from '../components/StatsSection';
import ServiceCarousel from '../components/home/ServiceCarousel';
import ExperienceSection from '../components/home/ExperienceSection';
import ProjectsGallery from '../components/home/ProjectsGallery';
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServiceCarousel />
      <ExperienceSection />
      <ProjectsGallery />
      <ClientsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
