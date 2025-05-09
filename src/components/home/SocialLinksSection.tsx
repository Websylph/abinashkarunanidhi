
import { Github, Linkedin, Twitter, ExternalLink, Layout } from "lucide-react";

const SocialLinksSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Follow us on social media to stay updated with our latest projects and industry insights</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="#" 
            className="p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5" 
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </a>
          <a 
            href="#" 
            className="p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5" 
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </a>
          <a 
            href="#" 
            className="p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5" 
            aria-label="Twitter"
          >
            <Twitter className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </a>
          <a 
            href="#" 
            className="p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5" 
            aria-label="Website"
          >
            <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </a>
          <a 
            href="#" 
            className="p-4 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary/5" 
            aria-label="Gallery"
          >
            <Layout className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
