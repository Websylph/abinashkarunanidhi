
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Code, Globe, Server, Figma, Database, Terminal } from "lucide-react";
import AnimatedText from "../components/AnimatedText";

const About = () => {
  const profileRef = useRef<HTMLImageElement>(null);
  
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

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (profileRef.current) {
        observer.unobserve(profileRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "Responsive Design", level: 95 },
    { name: "Performance Optimization", level: 82 },
  ];

  return (
    <div className="pt-24">
      {/* About Me Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <AnimatedText
              text="About Me"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="Passionate Web Developer & Designer"
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              tag="h1"
              delay={200}
            />
            <AnimatedText
              text="I transform concepts into captivating digital experiences through clean code and thoughtful design."
              className="text-muted-foreground mb-8 leading-relaxed"
              tag="p"
              delay={300}
            />
            
            <div className="space-y-4 text-muted-foreground">
              <AnimatedText
                text="With over 5 years of experience in web development, I've had the privilege of working on diverse projects across various industries. My approach combines technical expertise with an eye for design to create solutions that are both functional and beautiful."
                className="leading-relaxed"
                tag="p"
                delay={400}
              />
              <AnimatedText
                text="I stay current with emerging technologies while maintaining a focus on fundamental principles of good design and development. This balance allows me to build future-proof solutions that stand the test of time."
                className="leading-relaxed"
                tag="p"
                delay={500}
              />
            </div>
            
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Let's Connect
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl rounded-full transform -translate-y-4 translate-x-4"></div>
            <img
              ref={profileRef}
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-auto rounded-2xl shadow-xl opacity-0 relative z-10"
            />
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-secondary/30 mt-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="My Skills"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="Technical Expertise & Tools"
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary origin-left transform transition-transform duration-1000 scale-x-0"
                    style={{
                      transform: `scaleX(${skill.level / 100})`,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div className="glass-card p-6">
              <div className="mb-3 flex justify-center">
                <Code size={32} className="text-primary/70" />
              </div>
              <h3 className="text-sm font-medium">Frontend</h3>
            </div>
            <div className="glass-card p-6">
              <div className="mb-3 flex justify-center">
                <Server size={32} className="text-primary/70" />
              </div>
              <h3 className="text-sm font-medium">Backend</h3>
            </div>
            <div className="glass-card p-6">
              <div className="mb-3 flex justify-center">
                <Figma size={32} className="text-primary/70" />
              </div>
              <h3 className="text-sm font-medium">UI/UX</h3>
            </div>
            <div className="glass-card p-6">
              <div className="mb-3 flex justify-center">
                <Database size={32} className="text-primary/70" />
              </div>
              <h3 className="text-sm font-medium">Databases</h3>
            </div>
            <div className="glass-card p-6">
              <div className="mb-3 flex justify-center">
                <Globe size={32} className="text-primary/70" />
              </div>
              <h3 className="text-sm font-medium">Web APIs</h3>
            </div>
            <div className="glass-card p-6">
              <div className="mb-3 flex justify-center">
                <Terminal size={32} className="text-primary/70" />
              </div>
              <h3 className="text-sm font-medium">DevOps</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <AnimatedText
              text="Experience"
              className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
              tag="span"
            />
            <AnimatedText
              text="Professional Journey"
              className="text-3xl md:text-4xl font-bold tracking-tight"
              tag="h2"
              delay={200}
            />
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
            {[
              {
                period: "2021 - Present",
                role: "Senior Frontend Developer",
                company: "Tech Innovators Inc.",
                description: "Leading the frontend development team, implementing best practices, and developing scalable web applications with React and TypeScript.",
              },
              {
                period: "2019 - 2021",
                role: "Web Developer",
                company: "Digital Solutions Corp.",
                description: "Developed responsive websites and web applications using modern JavaScript frameworks, focusing on performance and user experience.",
              },
              {
                period: "2017 - 2019",
                role: "UI/UX Designer",
                company: "Creative Studios",
                description: "Created user-centered designs for web and mobile applications, collaborating closely with development teams to ensure design integrity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-start md:items-center group"
                data-aos="fade-up"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                </div>
                
                <div className="pl-8 md:pl-0 md:order-0 md:group-odd:pr-16 md:group-odd:text-right md:group-even:pl-16 md:w-1/2">
                  <span className="block text-sm font-medium text-primary/80 mb-1">
                    {item.period}
                  </span>
                  <div className="glass-card p-4">
                    <h3 className="text-xl font-medium mb-1">{item.role}</h3>
                    <span className="text-sm text-muted-foreground mb-3 block">
                      {item.company}
                    </span>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
