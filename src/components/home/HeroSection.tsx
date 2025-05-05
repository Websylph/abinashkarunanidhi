
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="relative hero-section flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div ref={heroRef} className="hero-content-wrapper opacity-0">
          <span className="inline-block px-3 py-1 bg-primary/5 text-primary/80 rounded-full text-sm font-medium mb-4 sm:mb-6">
            Web Developer & UI/UX Designer
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Crafting Digital <span className="text-gradient-royal">Experiences</span> with Passion
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            I blend elegant design with cutting-edge technology to create memorable user experiences that elevate brands and solve real problems and Make Your Digital Presence 
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-4">
              <Avatar className="border-2 border-white h-14 w-14">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80" alt="User" />
                <AvatarFallback className="bg-gradient-royal text-white">JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white h-14 w-14">
                <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" alt="User" />
                <AvatarFallback className="bg-gradient-royal text-white">SM</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white h-14 w-14">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" alt="User" />
                <AvatarFallback className="bg-gradient-royal text-white">AB</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white h-14 w-14">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" alt="User" />
                <AvatarFallback className="bg-gradient-royal text-white">TK</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-white bg-white h-14 w-14 flex items-center justify-center">
                <span className="text-sm font-medium text-gradient-royal">25+</span>
              </Avatar>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/projects" className="btn-royal w-full sm:w-auto">
              View My Work
            </Link>
            <Link to="/contact" className="btn-outline w-full sm:w-auto mt-3 sm:mt-0">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
