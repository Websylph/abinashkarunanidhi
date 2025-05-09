
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { number: "350+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Industry Awards" },
    { number: "24/7", label: "Customer Support" }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact By The Numbers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10" ref={statsRef}>
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-royal mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
