
import React from 'react';
import { Calendar, Wrench, Settings } from 'lucide-react';
import AnimatedText from '../AnimatedText';
import { Link } from 'react-router-dom';

const WebsiteMaintenanceSection = () => {
  return (
    <section className="py-[8px]">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Website Maintenance" 
            className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4" 
            tag="span" 
          />
          <AnimatedText 
            text="Keeping Your Digital Presence at Its Best" 
            className="text-3xl md:text-4xl font-bold tracking-tight" 
            tag="h2" 
            delay={200} 
          />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Regular website maintenance is crucial for security, performance, and staying competitive in today's digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Website Maintenance" 
              className="w-full h-[400px] object-cover rounded-2xl" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Proactive Maintenance</h3>
                <p>We identify and fix issues before they impact your business</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                  <Wrench className="text-gradient-royal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Regular Updates & Patches</h3>
                  <p className="text-muted-foreground">
                    We keep your website's software, plugins, and themes up-to-date with the latest security patches and feature enhancements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                  <Settings className="text-gradient-royal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                  <p className="text-muted-foreground">
                    We continuously monitor and optimize your site's speed, responsiveness, and overall performance to provide an excellent user experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.4s"}}>
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                  <Calendar className="text-gradient-royal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Maintenance Plans</h3>
                  <p className="text-muted-foreground">
                    Choose between monthly or annual maintenance plans tailored to your specific needs and website requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold mb-4">Monthly Maintenance</h3>
            <p className="text-muted-foreground mb-6">
              Our monthly maintenance plan provides continuous monitoring and regular updates to ensure your website remains secure, fast, and up-to-date at all times.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                </div>
                <p className="text-sm">Weekly security scans and vulnerability assessments</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                </div>
                <p className="text-sm">Monthly performance reports and analytics review</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                </div>
                <p className="text-sm">Priority support with 24-hour response time</p>
              </div>
            </div>
            <Link to="/contact" className="btn-royal inline-flex items-center gap-2 group">
              Contact for Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md rounded-2xl p-8 animate-on-scroll opacity-0" style={{animationDelay: "0.2s"}}>
            <h3 className="text-2xl font-bold mb-4">Annual Maintenance</h3>
            <p className="text-muted-foreground mb-6">
              Save with our annual maintenance plan, offering comprehensive coverage including regular updates, enhanced security, and dedicated support throughout the year.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                </div>
                <p className="text-sm">Comprehensive annual site audit and optimization</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                </div>
                <p className="text-sm">Quarterly content and SEO review with recommendations</p>
              </div>
              <div className="flex items-start">
                <div className="mt-1 h-5 w-5 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3">
                  <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                </div>
                <p className="text-sm">Dedicated support manager and prioritized assistance</p>
              </div>
            </div>
            <Link to="/contact" className="btn-royal inline-flex items-center gap-2 group">
              Contact for Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteMaintenanceSection;
