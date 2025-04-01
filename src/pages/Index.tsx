
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Database, Sparkles, Github, ExternalLink, Linkedin, Twitter } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import SkillCard from "../components/SkillCard";
import { Card, CardContent } from "@/components/ui/card";

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

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
    { number: "5+", label: "Years Experience" },
    { number: "60+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div ref={heroRef} className="max-w-3xl mx-auto text-center opacity-0">
            <span className="inline-block px-3 py-1 bg-primary/5 text-primary/80 rounded-full text-sm font-medium mb-6">
              Web Developer & UI/UX Designer
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Crafting Digital <span className="text-gradient">Experiences</span> with Passion
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              I blend elegant design with cutting-edge technology to create memorable
              user experiences that elevate brands and solve real problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary/60 rounded-full animate-fade-in"></div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="section-container">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            ref={statsRef}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center opacity-0" 
                style={{ 
                  animation: `fade-in-up 0.6s ease-out forwards ${index * 0.1 + 0.3}s`
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="What I Do"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="Transforming Ideas into Digital Reality"
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code className="text-primary" size={24} />}
              title="Web Development"
              description="Building responsive, performant websites with modern frameworks and clean code principles."
              delay={100}
            />
            <SkillCard
              icon={<Palette className="text-primary" size={24} />}
              title="UI/UX Design"
              description="Creating intuitive, beautiful interfaces focused on user experience and conversion."
              delay={200}
            />
            <SkillCard
              icon={<Database className="text-primary" size={24} />}
              title="Backend Solutions"
              description="Developing robust backend systems with secure APIs and efficient database architecture."
              delay={300}
            />
            <SkillCard
              icon={<Sparkles className="text-primary" size={24} />}
              title="Creative Solutions"
              description="Solving complex problems with innovative approaches and creative thinking."
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Work Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Featured Work"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="Recent Projects I'm Proud Of"
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Take a look at some of my recent projects that showcase my skills and approach to solving real-world problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg opacity-0" style={{ animation: 'fade-in-up 0.6s ease-out forwards 0.3s' }}>
              <div className="relative aspect-video bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-6xl font-bold opacity-30">Project</div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                    <p className="text-muted-foreground">A modern e-commerce solution with seamless checkout and inventory management.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <Link to="/projects" className="text-primary font-medium inline-flex items-center hover:underline">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg opacity-0" style={{ animation: 'fade-in-up 0.6s ease-out forwards 0.5s' }}>
              <div className="relative aspect-video bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary text-6xl font-bold opacity-30">Project</div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">SaaS Dashboard</h3>
                    <p className="text-muted-foreground">A comprehensive analytics dashboard for SaaS businesses with real-time data visualization.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <Link to="/projects" className="text-primary font-medium inline-flex items-center hover:underline">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-outline inline-flex items-center group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 bg-secondary/20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Technologies"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="My Technology Stack"
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I work with a variety of modern technologies to build powerful, efficient, and scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git', 'Figma'].map((tech, index) => (
              <div 
                key={tech} 
                className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm opacity-0"
                style={{ animation: `fade-in-up 0.5s ease-out forwards ${index * 0.1}s` }}
              >
                <div className="font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Testimonials"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="What Clients Say"
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md relative overflow-hidden opacity-0" style={{ animation: 'fade-in-up 0.6s ease-out forwards 0.3s' }}>
            <div className="absolute -top-12 -left-12 text-8xl text-primary/10">"</div>
            <blockquote className="text-lg text-center italic text-muted-foreground relative z-10 mb-6">
              Working with this developer has been an absolute pleasure. They delivered a stunning website that perfectly captures our brand identity while ensuring seamless functionality across all devices.
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">CEO, TechStart Inc.</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/testimonials" className="text-primary hover:underline inline-flex items-center">
              View All Testimonials
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl">
              <AnimatedText
                text="Interested in working together?"
                className="text-2xl md:text-3xl font-bold mb-4"
                tag="h2"
              />
              <AnimatedText
                text="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
                className="text-muted-foreground mb-8"
                tag="p"
                delay={200}
              />
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Let's Talk
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social Links */}
      <section className="py-12 bg-secondary/10">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="GitHub">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-gray-700" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="Website">
              <ExternalLink className="w-6 h-6 text-gray-700" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
