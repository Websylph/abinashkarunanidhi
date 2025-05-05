
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const FeaturedWorkSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/10">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <AnimatedText 
            text="Featured Work" 
            className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-3 sm:mb-4" 
            tag="span" 
          />
          <AnimatedText 
            text="Recent Projects I'm Proud Of" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" 
            tag="h2" 
            delay={200} 
          />
          <p className="text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto px-4 sm:px-0">
            Take a look at some of my recent projects that showcase my skills and approach to solving real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card 
            className="overflow-hidden transition-all duration-300 hover:shadow-lg opacity-0" 
            style={{
              animation: 'fade-in-up 0.6s ease-out forwards 0.3s'
            }}
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--royal-blue))]/20 to-secondary/20 mix-blend-overlay"></div>
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" alt="Project 1" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4">
                <Avatar className="border-2 border-white h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" alt="Project Owner" />
                  <AvatarFallback className="bg-gradient-royal text-white">CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Portfolio Website</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">A modern portfolio website with smooth animations and responsive design.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-3 sm:mt-4">
                <a href="#" className="text-[hsl(var(--royal-blue))] font-medium inline-flex items-center hover:underline">
                  View Live <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className="overflow-hidden transition-all duration-300 hover:shadow-lg opacity-0" 
            style={{
              animation: 'fade-in-up 0.6s ease-out forwards 0.5s'
            }}
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--royal-blue))]/20 to-secondary/20 mix-blend-overlay"></div>
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80" alt="Project 2" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 right-4">
                <Avatar className="border-2 border-white h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Project Owner" />
                  <AvatarFallback className="bg-gradient-royal text-white">MR</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Business Analytics Platform</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">A comprehensive analytics platform with business intelligence solutions.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-3 sm:mt-4">
                <a href="#" className="text-[hsl(var(--royal-blue))] font-medium inline-flex items-center hover:underline">
                  View Live <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link to="/projects" className="btn-outline inline-flex items-center group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
