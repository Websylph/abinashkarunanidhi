import { useState } from "react";
import AnimatedText from "../components/AnimatedText";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "Modern Portfolio",
      description: "A professionally crafted portfolio website showcasing creative work and achievements through an elegant, responsive design with smooth animations and intuitive navigation.",
      image: "/lovable-uploads/64dd862a-2092-4e0d-b248-bfc9a17a252b.png",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinash-k.vercel.app/",
    },
    {
      id: 2,
      title: "Growify Platform",
      description: "An enterprise-grade business growth platform featuring comprehensive project management tools, real-time analytics, and team collaboration features to drive organizational success.",
      image: "/lovable-uploads/a1347c6c-209e-4e68-bc37-e7aeee433d20.png",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      categories: ["web", "fullstack"],
      liveUrl: "https://v0-growify-ladeyvrid11-f3xit0.vercel.app/projects",
    },
    {
      id: 3,
      title: "Abinash Sculptures",
      description: "A sophisticated art gallery website that elegantly displays sculpture collections, featuring high-quality imagery, detailed artwork descriptions, and seamless contact integration.",
      image: "/lovable-uploads/9e83acc8-9a88-46bb-aaee-2e26c32c3e0f.png",
      tags: ["HTML", "CSS", "JavaScript", "Netlify"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinashsculptures.netlify.app/",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "A dynamic personal portfolio that highlights professional achievements and creative works through an interactive interface and engaging user experience.",
      image: "/lovable-uploads/869f1ded-2379-4809-a5a3-f43d8bdab5ad.png",
      tags: ["Next.js", "Tailwind CSS", "Vercel"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinash-karunanidhi.vercel.app/work",
    },
    {
      id: 5,
      title: "Sculptures Webflow",
      description: "A custom-designed sculpture exhibition website built with Webflow, offering an immersive gallery experience and streamlined artwork purchase process.",
      image: "/lovable-uploads/5ab1bad6-8c4b-4ab5-9513-4071c3352cfb.png",
      tags: ["Webflow", "CMS", "Responsive Design"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinashsculptures.webflow.io/",
    },
    {
      id: 6,
      title: "Thoufiq Portfolio",
      description: "A creative portfolio website featuring innovative animations and modern design elements to showcase professional work and achievements.",
      image: "/lovable-uploads/031724f1-c642-4f64-a4ca-c936894e5d80.png",
      tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      categories: ["web", "frontend"],
      liveUrl: "https://abinash-k.github.io/ThoufiqPortfolio/",
    },
    {
      id: 7,
      title: "Modern Web App",
      description: "A cutting-edge web application featuring responsive design, interactive UI components, and seamless user experience across all devices.",
      image: "/lovable-uploads/d13a4fb3-3c8b-4ed9-9e74-327b673491c8.png",
      tags: ["React", "Node.js", "Vercel"],
      categories: ["web", "fullstack"],
      liveUrl: "https://dhpti12i6wr39q1s.vercel.app/",
    },
    {
      id: 8,
      title: "Dashboard Application",
      description: "A comprehensive dashboard solution providing data visualization, user management, and real-time analytics for business intelligence.",
      image: "/lovable-uploads/5204d6d4-ee99-4a72-86b8-5cd8966931c0.png",
      tags: ["React", "Tailwind CSS", "Vercel"],
      categories: ["web", "frontend"],
      liveUrl: "https://y64kws9pxc1rbhrs.vercel.app/",
    }
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
