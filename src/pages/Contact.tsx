
import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Clock, Send, Github, Twitter, Linkedin } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
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

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-24">
      {/* Contact Header */}
      <section className="section-container">
        <div className="text-center mb-16 relative">
          <AnimatedText
            text="Contact"
            className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
            tag="span"
          />
          <AnimatedText
            text="Let's Work Together"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            tag="h1"
            delay={200}
          />
          <AnimatedText
            text="Have a project in mind or just want to say hello? I'd love to hear from you."
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            tag="p"
            delay={300}
          />
          
          {/* Added avatar cloud in hero section */}
          <div className="flex justify-center mb-12">
            <div className="flex -space-x-6">
              <Avatar className="border-4 border-background h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80" alt="Support Team" />
                <AvatarFallback className="bg-gradient-royal text-white">ST</AvatarFallback>
              </Avatar>
              <Avatar className="border-4 border-background h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80" alt="Developer" />
                <AvatarFallback className="bg-gradient-royal text-white">DV</AvatarFallback>
              </Avatar>
              <Avatar className="border-4 border-background h-20 w-20 ring-4 ring-background z-10">
                <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="CEO" />
                <AvatarFallback className="bg-gradient-royal text-white">CEO</AvatarFallback>
              </Avatar>
              <Avatar className="border-4 border-background h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" alt="Designer" />
                <AvatarFallback className="bg-gradient-royal text-white">DS</AvatarFallback>
              </Avatar>
              <Avatar className="border-4 border-background h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" alt="Marketing" />
                <AvatarFallback className="bg-gradient-royal text-white">MK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Contact Info Cards and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-primary/5 p-3 rounded-full">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  For project inquiries and questions
                </p>
                <a
                  href="mailto:karunanidhiabinash@gmail.com"
                  className="text-primary text-sm hover:underline"
                >
                  karunanidhiabinash@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-primary/5 p-3 rounded-full">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Based in
                </p>
                <p className="text-sm">Mamallapuram, Chennai</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-primary/5 p-3 rounded-full">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Direct Contact
                </p>
                <a
                  href="tel:+917305971450"
                  className="text-primary text-sm hover:underline"
                >
                  +91 7305971450
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-primary/5 p-3 rounded-full">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  When you can reach me
                </p>
                <p className="text-sm">Monday - Friday, 9am - 5pm PST</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/5 p-3 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/5 p-3 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/5 p-3 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="bg-primary/5 p-3 rounded-full text-primary hover:bg-primary/10 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6 md:p-8">
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-medium">Send Me a Message</h2>
                <Avatar className="ml-auto border-2 border-[hsl(var(--royal-blue))]/30 h-12 w-12">
                  <AvatarImage src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80" alt="Support" />
                  <AvatarFallback className="bg-gradient-royal text-white">SP</AvatarFallback>
                </Avatar>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Avatars */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="FAQ"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="Frequently Asked Questions"
              className="text-3xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical process for a new project?",
                answer: "My process typically includes discovery, planning, design, development, testing, and launch phases. I begin with understanding your needs, create a detailed plan, design the solution, implement it, thoroughly test everything, and then launch. After launch, I provide ongoing support to ensure everything runs smoothly.",
                avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80",
                avatarFallback: "JP"
              },
              {
                question: "How long does it take to complete a project?",
                answer: "The timeline varies based on project complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I'll provide a detailed timeline during our initial consultation after understanding your specific requirements.",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
                avatarFallback: "AM"
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, TypeScript, Node.js, and various database solutions. For design, I work with Figma and implement designs using Tailwind CSS. I stay current with industry trends and best practices to deliver cutting-edge solutions.",
                avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80",
                avatarFallback: "TJ"
              },
              {
                question: "Do you provide ongoing maintenance and support?",
                answer: "Yes, I offer ongoing maintenance and support packages to keep your application running smoothly. This includes regular updates, security patches, performance optimization, and technical support for any issues that may arise.",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                avatarFallback: "MD"
              },
              {
                question: "How do you handle project revisions and feedback?",
                answer: "Feedback is a crucial part of the development process. I provide regular updates and review sessions throughout the project. Revisions are handled through a structured feedback process, ensuring all changes align with the project goals and are implemented efficiently.",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
                avatarFallback: "SL"
              },
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center mb-3">
                  <Avatar className="mr-3 h-10 w-10 border border-[hsl(var(--royal-blue))]/20">
                    <AvatarImage src={faq.avatar} alt="FAQ" />
                    <AvatarFallback className="bg-gradient-royal text-white">{faq.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground ml-13">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
