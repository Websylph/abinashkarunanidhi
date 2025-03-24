
import { useState } from "react";
import AnimatedText from "../components/AnimatedText";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, Node.js, and MongoDB, featuring product management, cart functionality, and secure payment processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      categories: ["web", "fullstack"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description:
        "An interactive finance dashboard with data visualization, real-time updates, and customizable widgets for personal finance tracking.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80",
      tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
      categories: ["web", "frontend"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Social Media App",
      description:
        "A feature-rich social media application with real-time messaging, post sharing, and profile customization.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      categories: ["mobile", "fullstack"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 4,
      title: "Task Management Tool",
      description:
        "A productivity-focused task management application with drag-and-drop interface, deadlines, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80",
      tags: ["Vue.js", "Vuex", "Express", "PostgreSQL"],
      categories: ["web", "fullstack"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 5,
      title: "Health & Fitness App",
      description:
        "A comprehensive health tracking application with workout plans, nutrition tracking, and progress visualization.",
      image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80",
      tags: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      categories: ["mobile", "fullstack"],
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A personal portfolio website with smooth animations, responsive design, and dynamic content loading.",
      image: "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      categories: ["web", "frontend"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
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
              githubUrl={project.githubUrl}
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
