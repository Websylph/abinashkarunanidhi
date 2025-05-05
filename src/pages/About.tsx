
import React, { useEffect } from 'react';
import { ArrowRight, Target, Heart, Zap, Code, Globe, Server, Shield, Clock, Users, Laptop } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';

const About = () => {
  // Function to animate elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-royal/20 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText 
              text="Why Choose Me" 
              className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4"
              tag="span"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Transforming <span className="text-gradient-royal">Challenges</span> into Digital Solutions
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              I'm not just a developer; I'm a problem solver who believes in creating meaningful digital experiences 
              that drive real-world impact. My approach combines technical expertise with creative thinking 
              to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-royal/5">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 transform transition-all hover:scale-105 animate-on-scroll opacity-0">
              <Target className="text-gradient-royal mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Precision-Driven Solutions</h3>
              <p className="text-muted-foreground">
                I don't just write code; I craft tailored solutions that precisely address your unique business challenges 
                with clean, efficient, and scalable approaches.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 transform transition-all hover:scale-105 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <Heart className="text-gradient-royal mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Passion-Powered Development</h3>
              <p className="text-muted-foreground">
                Every project is a chance to create something extraordinary. I bring unwavering passion, 
                creativity, and a commitment to excellence to every line of code I write.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 transform transition-all hover:scale-105 animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
              <Zap className="text-gradient-royal mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Rapid Innovation</h3>
              <p className="text-muted-foreground">
                In the fast-evolving digital landscape, I stay ahead of the curve. My approach combines 
                cutting-edge technologies with agile methodologies to deliver innovative solutions quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Process Section - New */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Development Process" 
              className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText 
              text="How I Create Exceptional Web Experiences" 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0">
              <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                <Users className="text-gradient-royal" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Discovery</h3>
              <p className="text-muted-foreground">
                I start by understanding your business goals, target audience, and project requirements through in-depth consultations.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                <Laptop className="text-gradient-royal" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Design</h3>
              <p className="text-muted-foreground">
                I create wireframes and mockups that align with your brand identity while ensuring optimal user experience and conversion.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
              <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                <Code className="text-gradient-royal" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Development</h3>
              <p className="text-muted-foreground">
                I build your website using modern frameworks and clean code principles, ensuring it's responsive, fast, and scalable.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.6s"}}>
              <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                <Globe className="text-gradient-royal" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Deployment</h3>
              <p className="text-muted-foreground">
                I thoroughly test and launch your website, ensuring it performs flawlessly across all devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section - New */}
      <section className="py-20 bg-gradient-royal/5">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText 
              text="Modern Technologies" 
              className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText 
              text="Cutting-Edge Tech Stack" 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              I leverage the latest technologies to create fast, secure, and scalable web applications that meet your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                  <Code className="text-gradient-royal" size={24} />
                </div>
                <h3 className="text-xl font-bold">Frontend Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>React & Next.js</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>Tailwind CSS & Framer Motion</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>TypeScript & JavaScript</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                  <Server className="text-gradient-royal" size={24} />
                </div>
                <h3 className="text-xl font-bold">Backend Development</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>MongoDB & PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>RESTful APIs & GraphQL</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                  <Shield className="text-gradient-royal" size={24} />
                </div>
                <h3 className="text-xl font-bold">DevOps & Security</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>AWS & Vercel</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>Docker & CI/CD</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal mr-2"></div>
                  <span>SSL & Security Best Practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* What I Can Do For You Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText 
              text="How I Can Help" 
              className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText 
              text="Empowering Your Digital Vision" 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                From responsive single-page applications to complex web platforms, I transform your ideas 
                into robust, performant, and user-friendly digital solutions.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <p className="text-sm">Custom website development tailored to your specific requirements</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <p className="text-sm">E-commerce solutions with secure payment integration</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <p className="text-sm">Progressive Web Apps (PWAs) for enhanced user experience</p>
                </div>
              </div>
              <Link to="/contact" className="btn-royal inline-flex items-center gap-2 group">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <h3 className="text-2xl font-bold mb-4">Consulting & Strategy</h3>
              <p className="text-muted-foreground mb-6">
                Beyond coding, I offer strategic insights to help you leverage technology effectively. 
                From architecture design to technology stack selection, I'm your digital transformation partner.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <p className="text-sm">Technical audits and performance optimization</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <p className="text-sm">Digital strategy development and technology roadmapping</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <p className="text-sm">UX/UI design consultation and prototype development</p>
                </div>
              </div>
              <Link to="/contact" className="btn-royal inline-flex items-center gap-2 group">
                Book a Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-gradient-royal/5 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-royal/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-royal/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <AnimatedText 
                text="Ready to Bring Your Ideas to Life?" 
                className="text-2xl md:text-3xl font-bold mb-4"
                tag="h2"
              />
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and turn your vision into a digital reality. Whether you need a 
                complete web solution or strategic technology guidance, I'm here to help you succeed.
              </p>
              <Link to="/contact" className="btn-royal inline-flex items-center gap-2 group mx-auto">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
