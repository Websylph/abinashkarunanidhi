
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/AnimatedText";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
