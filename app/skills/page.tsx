"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React & Next.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Prisma ORM", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      title: "UI/UX & Graphic Design",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "Inkscape", level: 80 },
      ],
    },
    {
      title: "Programming & Security",
      skills: [
        { name: "Python", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "Information Security", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Linux", level: 85 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: 90 },
        { name: "Team Management", level: 90 },
        { name: "Project Organization", level: 95 },
        { name: "Problem-Solving", level: 90 },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "AI Automation", level: 85 },
        { name: "AI Agents", level: 80 },
      ],
    },
  ];

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
                Skills & Expertise
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                Technologies and tools I work with
              </p>
            </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-neon-cyan text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                        ease: "easeOut",
                      }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Additional Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "TypeScript",
            "Node.js",
            "REST APIs",
            "Responsive Design",
            "Version Control",
            "Agile Methodology",
            "UI/UX Principles",
            "Design Systems",
            "Prototyping",
            "Wireframing",
            "Brand Identity",
            "System Architecture",
          ].map((tool, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 text-white hover:border-neon-purple transition-colors cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
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
