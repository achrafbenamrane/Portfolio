"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Graphic Design", "AI Automation", "Desktop Development", "Mobile Development"];

  const projects = [
    {
      title: "iOS Control Center Portfolio",
      description: "Modern portfolio website inspired by iOS Control Center with glassmorphism design",
      image: "🎨",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      link: "https://achrafbenamrane.vercel.app",
      github: "https://github.com/achrafbenamrane/Portfolio",
    },
    {
      title: "Smart Dental Platform",
      description: "Healthcare platform connecting Medicine and Technology faculties - Startup brevet earned",
      image: "🦷",
      tags: ["Full-Stack", "Healthcare", "Innovation"],
      category: "Web Development",
      link: "#",
      github: "#",
    },
    {
      title: "Open-Source Community Website",
      description: "Community platform for Computer Science Department at University Badji Mokhtar",
      image: "💻",
      tags: ["React", "Community", "Open-Source"],
      category: "Web Development",
      link: "#",
      github: "#",
    },
    {
      title: "Brand Identity & Logo Design",
      description: "Collection of brand identities, logos, and visual identity systems for various clients",
      image: "✨",
      tags: ["Figma", "Adobe Illustrator", "Branding"],
      category: "Graphic Design",
      link: "#",
      github: "#",
    },
    {
      title: "UI/UX Design Projects",
      description: "User interface and user experience design for web and mobile applications",
      image: "�",
      tags: ["Figma", "Photoshop", "UI/UX"],
      category: "Graphic Design",
      link: "#",
      github: "#",
    },
    {
      title: "AI Automation Tools",
      description: "Intelligent automation solutions and AI agents for workflow optimization",
      image: "🤖",
      tags: ["Python", "AI", "Automation"],
      category: "AI Automation",
      link: "#",
      github: "#",
    },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #007AFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 sm:px-6 md:px-8 py-4 sm:py-6"
        >
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm sm:text-base text-white"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Home
            </Link>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 pb-12">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 sm:mb-12"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                My Projects
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                A collection of my recent work and side projects
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(0,122,255,0.3)]"
                        : "backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Project Image/Icon */}
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
              {project.image}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/30 hover:bg-blue-500/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">View</span>
                </a>
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="py-6 text-center"
        >
          <p className="text-xs sm:text-sm text-gray-500">
            © 2025 Benamrane Mohamed Achraf Portfolio
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
