
import { Rocket, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AnimatedText from "@/components/AnimatedText";

const MissionVisionSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-royal/5">
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <AnimatedText 
            text="Our Mission & Vision" 
            className="text-sm font-medium px-3 py-1 bg-[hsl(var(--royal-blue))]/10 text-[hsl(var(--royal-blue))] rounded-full inline-block mb-3 sm:mb-4" 
            tag="span" 
          />
          <AnimatedText 
            text="Building Tomorrow's Digital Landscape" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" 
            tag="h2" 
            delay={200} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Mission Card */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-[hsl(var(--royal-blue))]/20">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4">
                  <Rocket className="h-6 w-6 text-[hsl(var(--royal-blue))]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                To empower businesses and individuals through innovative digital solutions that drive meaningful growth and lasting impact. We strive to blend technical excellence with creative design to transform ideas into digital realities that exceed expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                  </div>
                  <p className="text-sm">Deliver exceptional user experiences through thoughtful design</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                  </div>
                  <p className="text-sm">Solve complex problems with elegant technical solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                  </div>
                  <p className="text-sm">Foster innovation that drives measurable business results</p>
                </div>
              </div>
              <div className="relative mt-6 overflow-hidden h-48 rounded-lg">
                <div className="absolute inset-0 flex justify-end items-start p-4 z-10">
                  <Avatar className="border-2 border-white h-14 w-14">
                    <AvatarImage src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80" alt="Team member" />
                    <AvatarFallback className="bg-gradient-royal text-white">MK</AvatarFallback>
                  </Avatar>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Vision Card */}
          <Card className="overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-[hsl(var(--royal-blue))]/20">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-[hsl(var(--royal-blue))]/10 mr-4">
                  <Eye className="h-6 w-6 text-[hsl(var(--royal-blue))]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                To be at the forefront of digital innovation, creating transformative web experiences that set new standards for quality, usability, and impact. We envision a world where technology enhances human potential and connects people in meaningful ways.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                  </div>
                  <p className="text-sm">Lead the industry in user-centered design practices</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                  </div>
                  <p className="text-sm">Pioneer accessible technology solutions for diverse audiences</p>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 h-4 w-4 rounded-full bg-[hsl(var(--royal-blue))]/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--royal-blue))]"></div>
                  </div>
                  <p className="text-sm">Create digital experiences that inspire and delight users</p>
                </div>
              </div>
              <div className="relative mt-6 overflow-hidden h-48 rounded-lg">
                <div className="absolute inset-0 flex justify-end items-start p-4 z-10">
                  <Avatar className="border-2 border-white h-14 w-14">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" alt="Team member" />
                    <AvatarFallback className="bg-gradient-royal text-white">JW</AvatarFallback>
                  </Avatar>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" 
                  alt="Futuristic technology" 
                  className="object-cover w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
