
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [days, setDays] = useState("01");
  const [hours, setHours] = useState("02");
  const [minutes, setMinutes] = useState("59");
  const [seconds, setSeconds] = useState("51");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const diff = target.getTime() - now.getTime();
      
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      
      setDays(d.toString().padStart(2, '0'));
      setHours(h.toString().padStart(2, '0'));
      setMinutes(m.toString().padStart(2, '0'));
      setSeconds(s.toString().padStart(2, '0'));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="hero-section relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-[15%] w-14 h-14 md:w-20 md:h-20 text-yellow-400">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,0 L63,38 L100,38 L69,61 L82,100 L50,76 L18,100 L31,61 L0,38 L37,38 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-[10%] w-16 h-16 md:w-24 md:h-24 text-yellow-400">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50,0 L63,38 L100,38 L69,61 L82,100 L50,76 L18,100 L31,61 L0,38 L37,38 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="hero-content-wrapper text-left">
          <h2 className="text-xl md:text-2xl font-medium mb-2 md:mb-3">Web Development Summit:</h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Unleashing</span>
            <span className="text-gradient-royal">Creative</span>
            <span className="block text-gradient-royal">brilliance</span>
          </h1>
          
          <p className="text-base sm:text-lg mb-6 md:mb-8">
            San Francisco <span className="text-blue-400">May 25-27</span>
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/projects" className="btn-royal px-8 py-3 rounded-full">
              Schedule
            </Link>
            <Link to="/contact" className="btn-outline px-8 py-3 rounded-full">
              Learn more
            </Link>
          </div>
          
          <div className="countdown-container">
            <div className="flex items-end gap-1">
              <div className="countdown-item">
                <p className="text-xs uppercase font-medium mb-1">Days</p>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold">{days}</div>
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">:</div>
              <div className="countdown-item">
                <p className="text-xs uppercase font-medium mb-1">Hours</p>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold">{hours}</div>
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">:</div>
              <div className="countdown-item">
                <p className="text-xs uppercase font-medium mb-1">Minutes</p>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold">{minutes}</div>
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-1">:</div>
              <div className="countdown-item">
                <p className="text-xs uppercase font-medium mb-1">Seconds</p>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold">{seconds}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-images-wrapper relative hidden lg:block">
          {/* Yellow circle */}
          <div className="absolute top-0 right-0 w-64 h-64 xl:w-80 xl:h-80 bg-yellow-400 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80"
              alt="Creative professional"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Blue circle */}
          <div className="absolute bottom-10 right-40 w-48 h-48 xl:w-64 xl:h-64 bg-blue-400 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              alt="Web developer"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Purple circle */}
          <div className="absolute top-20 right-28 w-40 h-40 xl:w-56 xl:h-56 bg-purple-400 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80"
              alt="UX Designer"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Decorative element */}
          <div className="absolute bottom-0 right-0">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M0,60 A60,60 0 1,0 60,0 L60,60 Z" fill="none" stroke="black" strokeWidth="2"/>
              <path d="M40,60 L120,60" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              <path d="M80,20 L80,100" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              <path d="M60,40 L100,80" stroke="black" strokeWidth="4" strokeLinecap="round"/>
              <path d="M60,80 L100,40" stroke="black" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
