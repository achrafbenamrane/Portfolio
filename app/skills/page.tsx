"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SkillsPage() {
  const skills = [
    // Web Development
    { name: "HTML & CSS", category: "Web", color: "bg-orange-500" },
    { name: "JavaScript", category: "Web", color: "bg-yellow-500" },
    { name: "React", category: "Web", color: "bg-cyan-500" },
    { name: "Next.js", category: "Web", color: "bg-black" },
    { name: "TypeScript", category: "Web", color: "bg-blue-600" },
    { name: "Express.js", category: "Web", color: "bg-gray-700" },
    { name: "Node.js", category: "Web", color: "bg-green-600" },
    { name: "Tailwind CSS", category: "Web", color: "bg-cyan-600" },
    { name: "Prisma ORM", category: "Web", color: "bg-indigo-600" },
    
    // Design
    { name: "Figma", category: "Design", color: "bg-purple-600" },
    { name: "Adobe Illustrator", category: "Design", color: "bg-orange-600" },
    { name: "Photoshop", category: "Design", color: "bg-blue-700" },
    { name: "Inkscape", category: "Design", color: "bg-gray-800" },
    { name: "UI/UX Design", category: "Design", color: "bg-pink-500" },
    { name: "Graphic Design", category: "Design", color: "bg-rose-600" },
    
    // Programming & Security
    { name: "Python", category: "Programming", color: "bg-blue-500" },
    { name: "Network Security", category: "Security", color: "bg-red-600" },
    { name: "Information Security", category: "Security", color: "bg-red-700" },
    
    // Tools
    { name: "Git & GitHub", category: "Tools", color: "bg-gray-900" },
    { name: "Linux", category: "Tools", color: "bg-yellow-600" },
    
    // AI & Automation
    { name: "AI Automation", category: "AI", color: "bg-violet-600" },
    { name: "AI Agents", category: "AI", color: "bg-purple-700" },
    
    // Soft Skills
    { name: "Leadership", category: "Soft Skills", color: "bg-emerald-600" },
    { name: "Team Management", category: "Soft Skills", color: "bg-teal-600" },
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
              className="mb-8 sm:mb-10 text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                Skills & Expertise
              </h1>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                A comprehensive overview of technologies and tools I work with
              </p>
            </motion.div>

            {/* Skills Grid - Bento Box Style */}
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.03,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -5,
                    rotateZ: 2,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className={`${skill.color} px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}>
                    <div className="relative z-10">
                      <h3 className="text-white font-semibold text-sm whitespace-nowrap">{skill.name}</h3>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: "Technologies", value: "25+" },
                { label: "Years Experience", value: "3+" },
                { label: "Projects", value: "50+" },
                { label: "Certifications", value: "6" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 text-center"
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
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
