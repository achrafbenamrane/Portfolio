"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "PostgreSQL", level: 85 },
      ],
    },
    {
      title: "DevOps",
      icon: "🚀",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 75 },
      ],
    },
    {
      title: "Design",
      icon: "✨",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Prototyping", level: 85 },
      ],
    },
  ];

  return (
    <PageLayout
      title="Skills & Expertise"
      description="Technologies and tools I work with"
    >
      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
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
        <h3 className="text-2xl font-bold text-white mb-6">Other Tools & Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Git",
            "VS Code",
            "Postman",
            "MongoDB",
            "Redis",
            "Jest",
            "WebSockets",
            "REST APIs",
            "GraphQL",
            "Firebase",
            "Vercel",
            "Netlify",
            "Linux",
            "Nginx",
            "Webpack",
            "Vite",
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
    </PageLayout>
  );
}
