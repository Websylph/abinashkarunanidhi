
import { Card, CardContent } from "@/components/ui/card";

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We combine creativity with technical expertise to deliver exceptional digital solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses through innovative digital solutions that drive growth and create meaningful connections with their audiences.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80" 
                  alt="Our Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading digital partner for businesses seeking to transform their online presence and achieve sustainable success in the digital landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
