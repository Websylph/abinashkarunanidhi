
import { Code, Palette, Database, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AnimatedText from "@/components/AnimatedText";

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <AnimatedText 
            text="What I Do" 
            className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-3 sm:mb-4" 
            tag="span" 
          />
          <AnimatedText 
            text="Transforming Ideas into Digital Reality" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" 
            tag="h2" 
            delay={200} 
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80" alt="Developer" />
                <AvatarFallback className="bg-gradient-royal text-white">RM</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="p-6 pt-8">
              <div className="mb-4">
                <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                  <Code className="text-[hsl(var(--royal-blue))]" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground text-sm">
                Building responsive, performant websites with modern frameworks and clean code principles.
              </p>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" alt="Designer" />
                <AvatarFallback className="bg-gradient-royal text-white">NP</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="p-6 pt-8">
              <div className="mb-4">
                <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                  <Palette className="text-[hsl(var(--royal-blue))]" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground text-sm">
                Creating intuitive, beautiful interfaces focused on user experience and conversion.
              </p>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80" alt="Engineer" />
                <AvatarFallback className="bg-gradient-royal text-white">DB</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="p-6 pt-8">
              <div className="mb-4">
                <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                  <Database className="text-[hsl(var(--royal-blue))]" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Developing robust backend systems with secure APIs and efficient database architecture.
              </p>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Avatar className="border-2 border-white h-12 w-12 shadow-md">
                <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" alt="Creative" />
                <AvatarFallback className="bg-gradient-royal text-white">SK</AvatarFallback>
              </Avatar>
            </div>
            <CardContent className="p-6 pt-8">
              <div className="mb-4">
                <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 inline-flex">
                  <Sparkles className="text-[hsl(var(--royal-blue))]" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Creative Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Solving complex problems with innovative approaches and creative thinking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
