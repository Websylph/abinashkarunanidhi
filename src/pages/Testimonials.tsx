
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import TestimonialCard from "../components/TestimonialCard";
import { supabase } from "@/integrations/supabase/client";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) {
          console.error('Error fetching testimonials:', error);
          return;
        }
        
        if (data) {
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTestimonials();
  }, []);

  // Use featured testimonials from Supabase (those marked as featured)
  const featuredTestimonials = testimonials.filter(t => t.is_featured).slice(0, 3);
  
  // Use non-featured testimonials for the carousel
  const otherTestimonials = testimonials.filter(t => !t.is_featured);

  // Carousel navigation
  const slideNext = () => {
    if (activeIndex < otherTestimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };
  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(otherTestimonials.length - 1);
    }
  };
  useEffect(() => {
    if (slidesContainerRef.current) {
      const scrollPosition = activeIndex * (slidesContainerRef.current.clientWidth / 1);
      slidesContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);
  
  return <div className="pt-24">
      {/* Testimonials Header */}
      <section className="section-container">
        <div className="text-center mb-16">
          <AnimatedText text="Testimonials" className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4" tag="span" />
          <AnimatedText text="What My Clients Say" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h1" delay={200} />
          <AnimatedText text="Don't just take my word for it - hear from some of my clients about their experiences working with me." className="text-muted-foreground max-w-2xl mx-auto" tag="p" delay={300} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Featured Testimonials */}
            {featuredTestimonials.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {featuredTestimonials.map((testimonial, index) => (
                  <TestimonialCard 
                    key={testimonial.id} 
                    content={testimonial.content} 
                    name={testimonial.name} 
                    role={testimonial.role} 
                    company={testimonial.company} 
                    avatar={testimonial.avatar_url || "https://randomuser.me/api/portraits/men/1.jpg"} 
                    delay={index * 100} 
                  />
                ))}
              </div>
            )}

            {/* Testimonials Carousel */}
            {otherTestimonials.length > 0 && (
              <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <AnimatedText text="More Success Stories" className="text-2xl font-bold" tag="h2" />
                    <div className="flex space-x-2">
                      <button onClick={slidePrev} className="p-2 rounded-full bg-white/80 shadow-sm hover:bg-white transition-colors duration-300" aria-label="Previous testimonial">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button onClick={slideNext} className="p-2 rounded-full bg-white/80 shadow-sm hover:bg-white transition-colors duration-300" aria-label="Next testimonial">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <div ref={slidesContainerRef} className="flex transition-transform duration-500 overflow-x-scroll scrollbar-none snap-x" style={{
                    scrollbarWidth: "none"
                    }}>
                      {otherTestimonials.map(testimonial => <div key={testimonial.id} className="min-w-full px-1 snap-center">
                          <div className="glass-card p-8">
                            <div className="flex mb-6">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <blockquote className="text-lg mb-6">"{testimonial.content}"</blockquote>
                            <div className="flex items-center">
                              <img src={testimonial.avatar_url || "https://randomuser.me/api/portraits/men/1.jpg"} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                              <div>
                                <p className="font-medium">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}, {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>)}
                    </div>
                  </div>

                  <div className="flex justify-center mt-6">
                    {otherTestimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors duration-300 ${activeIndex === index ? "bg-primary" : "bg-primary/30"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* Call to Action */}
      <section className="mt-20 py-[8px] my-[8px]">
        <div className="section-container text-center">
          <AnimatedText text="Ready to join these satisfied clients?" className="text-3xl md:text-4xl font-bold tracking-tight mb-6" tag="h2" />
          <AnimatedText text="Let's discuss how I can help bring your vision to life and create exceptional digital experiences for your business." className="text-muted-foreground max-w-2xl mx-auto mb-10" tag="p" delay={200} />
          <a href="/contact" className="btn-primary inline-block">
            Start a Project
          </a>
        </div>
      </section>
    </div>;
};
export default Testimonials;
