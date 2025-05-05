
import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import MissionVisionSection from "../components/home/MissionVisionSection";
import StatsSection from "../components/home/StatsSection";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedWorkSection from "../components/home/FeaturedWorkSection";
import CtaSection from "../components/home/CtaSection";
import SocialLinksSection from "../components/home/SocialLinksSection";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      <HeroSection />
      <MissionVisionSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <CtaSection />
      <SocialLinksSection />
    </div>
  );
};

export default Index;
