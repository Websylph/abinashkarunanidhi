import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import TestimonialCard from "../components/TestimonialCard";
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const testimonials = [{
    id: 1,
    content: "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise transformed our vision into a stunning reality. The website they created has significantly improved our online presence and user engagement.",
    name: "Alex Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  }, {
    id: 2,
    content: "I was blown away by the quality of work and the level of professionalism. They not only delivered exactly what we asked for but also suggested improvements that made our project even better. Our e-commerce site has seen a 40% increase in conversions since the redesign.",
    name: "Sam Rivera",
    role: "Marketing Director",
    company: "Global Shop",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  }, {
    id: 3,
    content: "Exceptional work! The developer understood our needs perfectly and created a custom solution that streamlined our internal processes. Their technical knowledge combined with an eye for design resulted in a system that's both functional and beautiful.",
    name: "Jamie Chen",
    role: "Operations Manager",
    company: "Innovate Solutions",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }, {
    id: 4,
    content: "This developer stands out for their ability to communicate complex technical concepts in understandable terms. They kept us informed throughout the entire process and delivered our project ahead of schedule. We'll definitely be working together again.",
    name: "Chris Morgan",
    role: "Product Owner",
    company: "NextLevel Apps",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  }, {
    id: 5,
    content: "I've worked with many developers over the years, but few have matched this level of excellence. They took the time to truly understand our business needs and created a solution that perfectly addresses our unique challenges. A true technology partner!",
    name: "Taylor Lee",
    role: "CTO",
    company: "FutureTech",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg"
  }, {
    id: 6,
    content: "The attention to detail and commitment to quality is remarkable. Our website now loads significantly faster and provides a seamless experience across all devices. The positive feedback from our users has been overwhelming!",
    name: "Jordan Smith",
    role: "Creative Director",
    company: "Design Collective",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg"
  }];
  const featuredTestimonials = testimonials.slice(0, 3);
  const otherTestimonials = testimonials.slice(3);

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

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {featuredTestimonials.map((testimonial, index) => <TestimonialCard key={testimonial.id} content={testimonial.content} name={testimonial.name} role={testimonial.role} company={testimonial.company} avatar={testimonial.avatar} delay={index * 100} />)}
        </div>

        {/* Testimonials Carousel */}
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
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
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