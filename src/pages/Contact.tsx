
import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Clock, Send, Github, Twitter, Linkedin } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";

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
        <div className="text-center mb-16">
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
            className="text-muted-foreground max-w-2xl mx-auto"
            tag="p"
            delay={300}
          />
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
                  href="mailto:hello@example.com"
                  className="text-primary text-sm hover:underline"
                >
                  hello@example.com
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
                <p className="text-sm">San Francisco, California</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start space-x-4">
              <div className="bg-primary/5 p-3 rounded-full">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Monday - Friday, 9am - 5pm
                </p>
                <a
                  href="tel:+12345678901"
                  className="text-primary text-sm hover:underline"
                >
                  +1 (234) 567-8901
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
              <h2 className="text-xl font-medium mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-20 relative h-[400px] overflow-hidden">
        <div ref={mapRef} className="absolute inset-0 opacity-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017511467!3d37.75781499683867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1659304879464!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </section>

      {/* FAQ Section */}
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
              },
              {
                question: "How long does it take to complete a project?",
                answer: "The timeline varies based on project complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months or more. I'll provide a detailed timeline during our initial consultation after understanding your specific requirements.",
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in modern web technologies including React, TypeScript, Node.js, and various database solutions. For design, I work with Figma and implement designs using Tailwind CSS. I stay current with industry trends and best practices to deliver cutting-edge solutions.",
              },
              {
                question: "Do you provide ongoing maintenance and support?",
                answer: "Yes, I offer ongoing maintenance and support packages to keep your application running smoothly. This includes regular updates, security patches, performance optimization, and technical support for any issues that may arise.",
              },
              {
                question: "How do you handle project revisions and feedback?",
                answer: "Feedback is a crucial part of the development process. I provide regular updates and review sessions throughout the project. Revisions are handled through a structured feedback process, ensuring all changes align with the project goals and are implemented efficiently.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
