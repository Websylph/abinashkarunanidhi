import { useState } from "react";
import AnimatedText from "../components/AnimatedText";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Modern Portfolio",
      description:
        "A sleek portfolio website with modern design, animations, and responsive layout.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinash-k.vercel.app/",
    },
    {
      id: 2,
      title: "Growify Platform",
      description:
        "A comprehensive business growth platform with project management and analytics features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      categories: ["web", "fullstack"],
      liveUrl: "https://v0-growify-ladeyvrid11-f3xit0.vercel.app/projects",
    },
    {
      id: 3,
      title: "Abinash Sculptures",
      description:
        "An elegant showcase website for sculpture artworks with gallery and contact features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      tags: ["HTML", "CSS", "JavaScript", "Netlify"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinashsculptures.netlify.app/",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "A creative portfolio website with project showcase and interactive elements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinash-karunanidhi.vercel.app/work",
    },
    {
      id: 5,
      title: "Sculptures Webflow",
      description:
        "A professionally designed website for sculpture exhibition and sales using Webflow.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
      tags: ["Webflow", "CMS", "Responsive Design"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinashsculptures.webflow.io/",
    },
    {
      id: 6,
      title: "Thoufiq Portfolio",
      description:
        "A custom portfolio website with creative animations and modern design.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinash-k.github.io/ThoufiqPortfolio/",
    },
    {
      id: 7,
      title: "Modern Web App",
      description:
        "A sleek, responsive web application with interactive UI components.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "Vercel"],
      categories: ["web", "fullstack"],
      liveUrl: "https://dhpti12i6wr39q1s.vercel.app/",
    },
    {
      id: 8,
      title: "Dashboard Application",
      description:
        "An intuitive dashboard application with data visualization and user management.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80",
      tags: ["React", "Tailwind CSS", "Vercel"],
      categories: ["web", "frontend"],
      liveUrl: "https://y64kws9pxc1rbhrs.vercel.app/",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <div className="pt-24">
      {/* Projects Header */}
      <section className="section-container">
        <div className="text-center mb-16">
          <AnimatedText
            text="My Projects"
            className="text-sm font-medium px-3 py-1 bg-primary/5 text-primary/80 rounded-full inline-block mb-4"
            tag="span"
          />
          <AnimatedText
            text="Featured Work"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            tag="h1"
            delay={200}
          />
          <AnimatedText
            text="A collection of my recent projects showcasing my skills and expertise."
            className="text-muted-foreground max-w-2xl mx-auto"
            tag="p"
            delay={300}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 mt-20 bg-secondary/30">
        <div className="section-container text-center">
          <AnimatedText
            text="Have a project in mind?"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            tag="h2"
          />
          <AnimatedText
            text="Let's collaborate to bring your ideas to life with cutting-edge technology and exceptional design."
            className="text-muted-foreground max-w-2xl mx-auto mb-10"
            tag="p"
            delay={200}
          />
          <a href="/contact" className="btn-primary inline-block">
            Let's Work Together
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
