
import React from 'react';
import { ArrowRight, Target, Heart, Zap } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText 
              text="Why Choose Me" 
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Transforming <span className="text-gradient">Challenges</span> into Digital Solutions
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
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 transform transition-all hover:scale-105">
              <Target className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Precision-Driven Solutions</h3>
              <p className="text-muted-foreground">
                I don't just write code; I craft tailored solutions that precisely address your unique business challenges 
                with clean, efficient, and scalable approaches.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 transform transition-all hover:scale-105">
              <Heart className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Passion-Powered Development</h3>
              <p className="text-muted-foreground">
                Every project is a chance to create something extraordinary. I bring unwavering passion, 
                creativity, and a commitment to excellence to every line of code I write.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 transform transition-all hover:scale-105">
              <Zap className="text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Rapid Innovation</h3>
              <p className="text-muted-foreground">
                In the fast-evolving digital landscape, I stay ahead of the curve. My approach combines 
                cutting-edge technologies with agile methodologies to deliver innovative solutions quickly.
              </p>
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
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
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
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                From responsive single-page applications to complex web platforms, I transform your ideas 
                into robust, performant, and user-friendly digital solutions.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Consulting & Strategy</h3>
              <p className="text-muted-foreground mb-6">
                Beyond coding, I offer strategic insights to help you leverage technology effectively. 
                From architecture design to technology stack selection, I'm your digital transformation partner.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
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
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">
            <AnimatedText 
              text="Ready to Bring Your Ideas to Life?" 
              className="text-2xl md:text-3xl font-bold mb-4"
              tag="h2"
            />
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate and turn your vision into a digital reality. Whether you need a 
              complete web solution or strategic technology guidance, I'm here to help you succeed.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group mx-auto">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
