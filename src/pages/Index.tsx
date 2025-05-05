
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Database, 
  Sparkles, 
  Github, 
  ExternalLink, 
  Linkedin, 
  Twitter, 
  ArrowUpRight, 
  BarChart4, 
  Eye, 
  Star,
  Rocket,
  Users
} from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import SkillCard from "../components/SkillCard";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
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
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "60+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ];
  
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* Hero Section - Updated with custom avatars */}
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
      
      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-royal/5">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <AnimatedText 
              text="Our Mission & Vision" 
              className="text-sm font-medium px-3 py-1 bg-[hsl(var(--royal-blue))]/10 text-[hsl(var(--royal-blue))] rounded-full inline-block mb-3 sm:mb-4" 
              tag="span" 
            />
            <AnimatedText 
              text="Building Tomorrow's Digital Landscape" 
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" 
              tag="h2" 
              delay={200} 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Mission Card */}
            <Card className="overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-[hsl(var(--royal-blue))]/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4">
                    <Rocket className="h-6 w-6 text-[hsl(var(--royal-blue))]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  To empower businesses and individuals through innovative digital solutions that drive meaningful growth and lasting impact. We strive to blend technical excellence with creative design to transform ideas into digital realities that exceed expectations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                    </div>
                    <p className="text-sm">Deliver exceptional user experiences through thoughtful design</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                    </div>
                    <p className="text-sm">Solve complex problems with elegant technical solutions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                    </div>
                    <p className="text-sm">Foster innovation that drives measurable business results</p>
                  </div>
                </div>
                <div className="relative mt-6 overflow-hidden h-48 rounded-lg">
                  <div className="absolute inset-0 flex justify-end items-start p-4 z-10">
                    <Avatar className="border-2 border-white h-14 w-14">
                      <AvatarImage src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80" alt="Team member" />
                      <AvatarFallback className="bg-gradient-royal text-white">MK</AvatarFallback>
                    </Avatar>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                    alt="Team collaboration" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Vision Card */}
            <Card className="overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-[hsl(var(--royal-blue))]/20">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4">
                    <Eye className="h-6 w-6 text-[hsl(var(--royal-blue))]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  To be at the forefront of digital innovation, creating transformative web experiences that set new standards for quality, usability, and impact. We envision a world where technology enhances human potential and connects people in meaningful ways.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                    </div>
                    <p className="text-sm">Lead the industry in user-centered design practices</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                    </div>
                    <p className="text-sm">Pioneer accessible technology solutions for diverse audiences</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                    </div>
                    <p className="text-sm">Create digital experiences that inspire and delight users</p>
                  </div>
                </div>
                <div className="relative mt-6 overflow-hidden h-48 rounded-lg">
                  <div className="absolute inset-0 flex justify-end items-start p-4 z-10">
                    <Avatar className="border-2 border-white h-14 w-14">
                      <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" alt="Team member" />
                      <AvatarFallback className="bg-gradient-royal text-white">JW</AvatarFallback>
                    </Avatar>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                    alt="Futuristic technology" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Stats Section - Improved responsiveness */}
      <section className="py-12 sm:py-14 md:py-16 bg-primary/5">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" ref={statsRef}>
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center opacity-0" 
                style={{
                  animation: `fade-in-up 0.6s ease-out forwards ${index * 0.1 + 0.3}s`
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section with Avatars */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <AnimatedText 
              text="What I Do" 
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-3 sm:mb-4" 
              tag="span" 
            />
            <AnimatedText 
              text="Transforming Ideas into Digital Reality" 
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" 
              tag="h2" 
              delay={200} 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                  <AvatarImage src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80" alt="Developer" />
                  <AvatarFallback className="bg-gradient-royal text-white">RM</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6 pt-8">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                    <Code className="text-[hsl(var(--royal-blue))]" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground text-sm">
                  Building responsive, performant websites with modern frameworks and clean code principles.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                  <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" alt="Designer" />
                  <AvatarFallback className="bg-gradient-royal text-white">NP</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6 pt-8">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                    <Palette className="text-[hsl(var(--royal-blue))]" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground text-sm">
                  Creating intuitive, beautiful interfaces focused on user experience and conversion.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                  <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80" alt="Engineer" />
                  <AvatarFallback className="bg-gradient-royal text-white">DB</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6 pt-8">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                    <Database className="text-[hsl(var(--royal-blue))]" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Backend Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Developing robust backend systems with secure APIs and efficient database architecture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                  <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" alt="Creative" />
                  <AvatarFallback className="bg-gradient-royal text-white">SK</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6 pt-8">
                <div className="mb-4">
                  <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                    <Sparkles className="text-[hsl(var(--royal-blue))]" size={24} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Creative Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Solving complex problems with innovative approaches and creative thinking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Work Section - improved spacing */}
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
      
      {/* CTA Section - improved spacing */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="section-container">
          <div className="bg-gradient-royal/5 rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[hsl(var(--royal-blue))]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[hsl(var(--royal-blue))]/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" alt="CEO" />
                  <AvatarFallback className="bg-gradient-royal text-white">JM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">John Morgan</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
              <AnimatedText text="Interested in working together?" className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" tag="h2" />
              <AnimatedText text="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision." className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8" tag="p" delay={200} />
              <Link to="/contact" className="btn-royal inline-flex items-center gap-2 group">
                Let's Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Links - improved spacing */}
      <section className="py-8 sm:py-10 md:py-12 bg-secondary/10">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="GitHub">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="Twitter">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="Website">
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
