"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX",
      image: "🛒",
      tags: ["Next.js", "TypeScript", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive portfolio with game-style UI",
      image: "🎮",
      tags: ["React", "Framer Motion", "Tailwind"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat with AI integration",
      image: "🤖",
      tags: ["Node.js", "Socket.io", "OpenAI"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform",
      image: "✅",
      tags: ["Vue.js", "Firebase", "PWA"],
      link: "#",
      github: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media",
      image: "📊",
      tags: ["React", "D3.js", "REST API"],
      link: "#",
      github: "#",
    },
    {
      title: "Music Streaming App",
      description: "Spotify-like music streaming platform",
      image: "🎵",
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <PageLayout
      title="My Projects"
      description="A collection of my recent work and side projects"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300"
          >
            {/* Project Image/Icon */}
            <div className="aspect-video bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-6xl">
              {project.image}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-neon-blue/10 text-neon-cyan border border-neon-cyan/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 transition-colors"
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
            <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/0 to-neon-blue/0 group-hover:from-neon-purple/10 group-hover:to-neon-blue/10 transition-all duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
