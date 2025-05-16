import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Web Development & Design Studio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Create <span className="text-gradient-royal">beautiful</span> digital experiences
            </h1>
            
            <p className="text-lg text-muted-foreground">
              We build modern, responsive websites and applications that help businesses grow and succeed in the digital world.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/projects" className="btn-royal px-8 py-3 rounded-lg">
                View Our Work
              </Link>
              <Link to="/contact" className="btn-outline px-8 py-3 rounded-lg">
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white shadow-xl rounded-2xl overflow-hidden transform rotate-1">
              <img alt="Web Development" className="w-full h-full object-cover" src="https://i.postimg.cc/2S1VKR2W/Whats-App-Image-2025-05-16-at-10-53-17-ca8497db.jpg" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-400/20 rounded-full filter blur-3xl"></div>
            
            {/* Floating tech icons */}
            <div className="absolute top-10 -left-5 p-3 bg-white shadow-lg rounded-xl rotate-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            
            <div className="absolute bottom-20 right-5 p-3 bg-white shadow-lg rounded-xl -rotate-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            
            <div className="absolute top-32 right-10 p-3 bg-white shadow-lg rounded-xl rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;