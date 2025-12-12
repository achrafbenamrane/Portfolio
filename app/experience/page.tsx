"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, TrendingUp, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
      color: "from-blue-500/20 to-blue-600/5",
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
      color: "from-purple-500/20 to-purple-600/5",
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
      color: "from-cyan-500/20 to-cyan-600/5",
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
      color: "from-green-500/20 to-green-600/5",
    },
  ];

  const stats = [
    { label: "Years Experience", value: "2+", icon: Calendar },
    { label: "Projects Completed", value: "15+", icon: Briefcase },
    { label: "Students Mentored", value: "50+", icon: TrendingUp },
    { label: "Events Organized", value: "10+", icon: TrendingUp },
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

      <div className="relative z-10 min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mb-8 sm:mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Experience & Stats
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">My professional journey and achievements</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Grid - iOS Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 text-center group hover:shadow-[0_0_30px_rgba(0,122,255,0.3)] transition-all"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Experience Cards - iOS Style */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-8">Work Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:shadow-[0_0_30px_rgba(0,122,255,0.2)] transition-all group overflow-hidden"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-60`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1 sm:mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400">Key Achievements:</p>
                    <ul className="space-y-1 sm:space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                          <span className="text-cyan-400 mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
