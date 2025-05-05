
import { Github, Linkedin, Twitter, ExternalLink, Layout } from "lucide-react";

const SocialLinksSection = () => {
  return (
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
          <a href="#" className="p-3 rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110" aria-label="Gallery">
            <Layout className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinksSection;
