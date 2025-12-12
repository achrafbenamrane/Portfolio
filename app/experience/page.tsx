"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Briefcase, TrendingUp, Users } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Freelance Designer and Developer",
      company: "Freelance",
      period: "2025 – Present",
      description: "Delivered web development and design solutions for clients, creating responsive and user-friendly websites. Applied UI/UX principles and graphic design expertise to enhance digital products project management, and teamwork skills.",
      achievements: [
        "Created responsive and user-friendly websites",
        "Applied UI/UX principles and graphic design expertise",
        "Enhanced digital products with modern design",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Master's 1 in Network & Information Security",
      company: "Badji Mokhtar University",
      period: "2025",
      description: "Pursuing advanced studies in Network and Information Security at Badji Mokhtar University, Annaba, Algeria. Focusing on cybersecurity, network architecture, and information protection.",
      achievements: [
        "Advanced studies in cybersecurity",
        "Network architecture and security protocols",
        "Information protection and security systems",
      ],
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Bachelor's Degree in Computer System",
      company: "Badji Mokhtar University",
      period: "2024",
      description: "Completed Bachelor's degree in Computer System at Badji Mokhtar University, Annaba, Algeria. Built strong foundation in computer science, programming, and system design.",
      achievements: [
        "Strong foundation in computer science",
        "Programming and software development",
        "System design and architecture",
      ],
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "Leader | Graphic Design & UI/UX Design Kernel",
      company: "Open-Source Community Annaba",
      period: "2023 – 2024",
      description: "Led the design kernel and mentored students in graphic design and UI/UX skills. Conducted volunteer training sessions to help them improve practical design abilities. Strengthened leadership, communication, teamwork.",
      achievements: [
        "Mentored students in graphic and UI/UX design",
        "Conducted volunteer training sessions",
        "Strengthened leadership and communication skills",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Co-Founder | Smart Dental Platform Startup",
      company: "University Badji Mokhtar Annaba",
      period: "2023 – 2024",
      description: "Collaborated with the Medicine and Technology faculties to build a smart dental platform. Earned a startup brevet for innovative project development.",
      achievements: [
        "Built smart dental platform with cross-faculty collaboration",
        "Earned startup brevet for innovation",
        "Bridged technology and healthcare sectors",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Co-Founder & Member | Open-Source Community Club",
      company: "Computer Science Department Annaba",
      period: "2023 – 2024",
      description: "Founded and actively contributed to the department's Open-Source Community Club. Maintained computer labs and provided volunteer support to the department, earning official certification for this work. Organized multiple events, one of them an international event: 'Study in Japan event annaba 2024'.",
      achievements: [
        "Founded Open-Source Community Club",
        "Maintained computer labs and earned official certification",
        "Organized international event: Study in Japan 2024",
      ],
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar, color: "text-blue-400" },
    { label: "Projects Completed", value: "15+", icon: Briefcase, color: "text-cyan-400" },
    { label: "Students Mentored", value: "50+", icon: Users, color: "text-purple-400" },
    { label: "Events Organized", value: "10+", icon: TrendingUp, color: "text-green-400" },
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
                Experience & Journey
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                My professional path and achievements
              </p>
            </motion.div>

            {/* Experience Timeline - iOS Style with Progress Line */}
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative pl-6 sm:pl-8 md:pl-12 pb-8 sm:pb-12 border-l-2 border-blue-500/30 ${
                    index === experiences.length - 1 ? 'border-l-0 pb-0' : ''
                  }`}
                >
                  {/* Timeline Dot - iOS Style */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.5)] ring-4 ring-black" />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover:shadow-[0_0_30px_rgba(0,122,255,0.2)] transition-all group"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-60`} />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1 sm:mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-sm sm:text-base text-cyan-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 backdrop-blur-xl bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm font-semibold text-blue-400">Key Achievements:</p>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                              <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Stats Bar - One Line at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-12 sm:mt-16"
            >
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="flex flex-col items-center group"
                  >
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">{stat.label}</div>
                  </motion.div>
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
