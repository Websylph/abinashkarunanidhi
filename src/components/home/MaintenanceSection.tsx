
import { Link } from "react-router-dom";
import { Globe, Server, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MaintenanceSection = () => {
  const services = [
    {
      title: "Domain Management",
      description: "Professional domain registration, transfer, and management services to secure your online identity.",
      icon: <Globe className="text-blue-500" size={24} />,
      color: "bg-blue-50"
    },
    {
      title: "Reliable Hosting",
      description: "Fast, secure, and scalable hosting solutions tailored to your website needs with 99.9% uptime guarantee.",
      icon: <Server className="text-purple-500" size={24} />,
      color: "bg-purple-50"
    },
    {
      title: "Website Maintenance",
      description: "Regular updates, security patches, performance optimization, and technical support to keep your site running smoothly.",
      icon: <Wrench className="text-green-500" size={24} />,
      color: "bg-green-50"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium px-3 py-1 bg-gradient-royal/10 text-gradient-royal rounded-full inline-block mb-4">
            Complete Web Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Domain, Hosting & Maintenance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end web solutions that handle all technical aspects so you can focus on your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className={`h-16 w-16 rounded-lg ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                <div className="text-center">
                  <Link 
                    to="/about" 
                    className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
