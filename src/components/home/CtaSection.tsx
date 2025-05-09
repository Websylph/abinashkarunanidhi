
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-royal text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's collaborate to create extraordinary digital experiences that drive results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Get in Touch
            </Link>
            <Link to="/projects" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".1" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
