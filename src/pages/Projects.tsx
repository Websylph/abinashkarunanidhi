import { useState, useEffect } from "react";
import { ArrowRight, Server, Globe, Code, Rocket, Clock, Check } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import ProjectCard from "../components/ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*');
          
        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }
        
        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const filters = [{
    id: "all",
    label: "All Projects"
  }, {
    id: "web",
    label: "Web Apps"
  }, {
    id: "frontend",
    label: "Frontend"
  }, {
    id: "fullstack",
    label: "Full Stack"
  }];
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories?.includes(activeFilter));

  return <div className="pt-24">
      {/* Projects Header */}
      <section className="section-container">
        <div className="text-center mb-16">
          <AnimatedText text="My Projects" className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4" tag="span" />
          <AnimatedText text="Featured Work" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h1" delay={200} />
          <AnimatedText text="A collection of my recent projects showcasing my skills and expertise." className="text-muted-foreground max-w-2xl mx-auto" tag="p" delay={300} />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === filter.id ? "bg-gradient-royal text-white" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>
              {filter.label}
            </button>)}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                image={project.image_url || "/placeholder.svg"} 
                tags={project.tags || []} 
                githubUrl={project.github_url}
                liveUrl={project.live_url} 
                delay={index * 100} 
              />
            ))}
          </div>
        )}
      </section>

      {/* Project Delivery Process - New Section */}
      <section className="mt-20 bg-gradient-royal/5 py-[8px] my-[8px]">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText text="Our Process" className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4" tag="span" />
            <AnimatedText text="How We Deliver Your Project" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h2" delay={200} />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures your project is delivered on time, within budget, and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md animate-on-scroll opacity-0">
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                  <Rocket className="text-gradient-royal" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Project Kickoff</h3>
                <p className="text-muted-foreground mb-4">
                  We begin with a detailed consultation to understand your goals, requirements, and vision for the project.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Comprehensive project scoping</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Timeline and milestone planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Resource allocation and budget approval</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md animate-on-scroll opacity-0" style={{
            animationDelay: "0.2s"
          }}>
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                  <Code className="text-gradient-royal" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Development & Testing</h3>
                <p className="text-muted-foreground mb-4">
                  We design and develop your website with rigorous testing at every stage to ensure quality and performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Iterative development with regular updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Cross-browser and device testing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Performance optimization and security testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md animate-on-scroll opacity-0" style={{
            animationDelay: "0.4s"
          }}>
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-gradient-royal/10 flex items-center justify-center mb-6">
                  <Globe className="text-gradient-royal" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Launch & Support</h3>
                <p className="text-muted-foreground mb-4">
                  We handle the deployment and provide ongoing support to ensure your website continues to perform optimally.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Smooth deployment and domain setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Post-launch monitoring and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span className="text-sm">Training and documentation for your team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Website Creation Section - New */}
      <section className="py-0">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText text="Our Approach" className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4" tag="span" />
            <AnimatedText text="How We Create Your Website" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h2" delay={200} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-2xl font-bold mb-6 text-gradient-royal">Modern Development Practices</h3>
              <p className="text-muted-foreground mb-6">
                We build websites using the latest technologies and best practices to ensure your site is fast, secure, and scalable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Responsive Design</h4>
                    <p className="text-sm text-muted-foreground">Your website will look great on all devices, from desktops to smartphones.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground">We ensure fast loading times and smooth performance for optimal user experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">SEO-Friendly</h4>
                    <p className="text-sm text-muted-foreground">Your site will be built with SEO best practices to improve visibility in search results.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 animate-on-scroll opacity-0" style={{
            animationDelay: "0.2s"
          }}>
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Web development process" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-royal/20 mix-blend-overlay"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 md:order-1 order-2 animate-on-scroll opacity-0" style={{
            animationDelay: "0.4s"
          }}>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Team collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-royal/20 mix-blend-overlay"></div>
            </div>
            
            <div className="md:order-2 order-1 animate-on-scroll opacity-0" style={{
            animationDelay: "0.2s"
          }}>
              <h3 className="text-2xl font-bold mb-6 text-gradient-royal">Collaborative Approach</h3>
              <p className="text-muted-foreground mb-6">
                We work closely with you throughout the project to ensure your vision and requirements are met at every stage.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Regular Updates</h4>
                    <p className="text-sm text-muted-foreground">We keep you informed with frequent progress updates and milestone achievements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Feedback Integration</h4>
                    <p className="text-sm text-muted-foreground">Your feedback is valuable to us and is actively incorporated into the development process.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <div className="h-2 w-2 rounded-full bg-gradient-royal"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Transparent Communication</h4>
                    <p className="text-sm text-muted-foreground">We maintain open and clear communication throughout the project lifecycle.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hosting & Domain Section - New */}
      <section className="bg-gradient-royal/5 py-[8px]">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText text="Hosting & Domain" className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4" tag="span" />
            <AnimatedText text="Launch Your Website With Ease" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h2" delay={200} />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take care of the technical aspects of hosting your website, so you can focus on your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md animate-on-scroll opacity-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                    <Server className="text-gradient-royal" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Free Hosting</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We provide free hosting services for all our clients' websites, ensuring your site is always online and performing optimally.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>99.9% uptime guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>Automatic backups and security updates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>CDN integration for faster global performance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>SSL certificate for secure browsing</span>
                  </li>
                </ul>
                <div className="p-4 bg-gradient-royal/5 rounded-lg border border-gradient-royal/10">
                  <p className="text-sm font-medium text-center">
                    Our free hosting is perfect for small to medium-sized websites with regular traffic.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md animate-on-scroll opacity-0" style={{
            animationDelay: "0.2s"
          }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-royal/10 flex items-center justify-center mr-4">
                    <Globe className="text-gradient-royal" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Domain Registration</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We can register and manage your domain name for a nominal annual fee, giving your business a professional online identity.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>Wide range of domain extensions (.com, .org, .net, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>Domain privacy protection included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>Easy domain management through our client portal</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gradient-royal mr-2 h-5 w-5 mt-0.5 shrink-0" />
                    <span>Email forwarding and DNS management</span>
                  </li>
                </ul>
                <div className="p-4 bg-gradient-royal/5 rounded-lg border border-gradient-royal/10">
                  <p className="text-sm font-medium text-center">
                    Domain registration prices start at $12/year depending on the extension.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-[8px]">
        <div className="section-container text-center">
          <AnimatedText text="Have a project in mind?" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h2" />
          <AnimatedText text="Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design." className="text-muted-foreground max-w-2xl mx-auto mb-10" tag="p" delay={200} />
          <a href="/contact" className="btn-royal inline-block">
            Let's Work Together
          </a>
        </div>
      </section>
    </div>;
};
export default Projects;
