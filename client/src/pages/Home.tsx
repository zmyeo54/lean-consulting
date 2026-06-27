/**
 * Home — Lean Consulting
 * Assembles all sections in order
 * Style: Editorial Precision — Dark/Light contrast with Crimson Authority
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import WhySection from "@/components/sections/WhySection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import AISection from "@/components/sections/AISection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <WhySection />
      <FrameworkSection />
      <ServicesSection />
      <IndustriesSection />
      <AISection />
      <TestimonialsSection />
      <CTABannerSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
