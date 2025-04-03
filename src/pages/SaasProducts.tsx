
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface SaasProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const SaasProducts = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current);
      }
    };
  }, []);

  const products: SaasProduct[] = [
    {
      id: 1,
      title: "Divine Sculpture Tracker",
      description: "A comprehensive platform for tracking and managing sculpture inventory, sales, and client information for artists and galleries.",
      image: "/lovable-uploads/b7ff1f0e-d26f-47b3-855c-cd6d372cc39d.png",
      features: ["Inventory Management", "Sales Tracking", "Client Database", "Analytics Dashboard"],
    },
    {
      id: 2,
      title: "WageWise Tracker",
      description: "An intelligent salary and compensation tracking tool helping professionals monitor their career growth and plan for future financial goals.",
      image: "/lovable-uploads/d9d81138-5f59-4554-b260-0810afee2abd.png",
      features: ["Salary Tracking", "Career Progression", "Market Comparison", "Financial Planning"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements.",
      image: "/lovable-uploads/e09a19fd-902e-4229-8670-06ca11f85926.png",
      features: ["Responsive Design", "Modern UI/UX", "Interactive Elements", "Optimized Performance"],
    },
  ];

  return (
    <div className="pt-24">
      {/* SaaS Products Header */}
      <section className="section-container">
        <div className="text-center mb-16">
          <AnimatedText
            text="SaaS Products"
            className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
            tag="span"
          />
          <AnimatedText
            text="Digital Solutions That Drive Growth"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            tag="h1"
            delay={200}
          />
          <AnimatedText
            text="Explore my collection of SaaS products designed to help businesses scale and succeed in the digital landscape."
            className="text-muted-foreground max-w-2xl mx-auto"
            tag="p"
            delay={300}
          />
        </div>

        {/* Products Grid */}
        <div 
          ref={productsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-border/50"
              style={{ animation: `fade-in-up 0.6s ease-out forwards ${index * 0.1 + 0.3}s` }}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl">
              <AnimatedText
                text="Need a custom SaaS solution?"
                className="text-2xl md:text-3xl font-bold mb-4"
                tag="h2"
              />
              <AnimatedText
                text="I can help you build a tailor-made application that perfectly fits your business requirements and goals."
                className="text-muted-foreground mb-8"
                tag="p"
                delay={200}
              />
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaasProducts;
