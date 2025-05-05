
import { useRef } from "react";

const StatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "60+", label: "Projects Completed" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support" }
  ];
  
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-primary/5">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" ref={statsRef}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center" 
              style={{
                animation: `fade-in-up 0.6s ease-out forwards ${index * 0.1 + 0.3}s`
              }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
