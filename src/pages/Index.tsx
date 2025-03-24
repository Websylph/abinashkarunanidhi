
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Database, Sparkles } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import SkillCard from "../components/SkillCard";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    </div>
  );
};

export default Index;
