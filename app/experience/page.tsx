"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS.",
      achievements: [
        "Improved app performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      title: "Web Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description: "Developed responsive web applications and e-commerce platforms.",
      achievements: [
        "Built 20+ client websites",
        "Reduced load time by 50%",
        "Mentored junior developers",
      ],
    },
    {
      title: "Junior Developer",
      company: "StartUp Studio",
      period: "2018 - 2019",
      description: "Collaborated on various web projects and learned modern development practices.",
      achievements: [
        "Contributed to 15+ projects",
        "Learned React and Node.js",
        "Earned Developer of the Month",
      ],
    },
  ];

  const stats = [
    { label: "Years Experience", value: "07", icon: Calendar },
    { label: "Projects Completed", value: "210+", icon: Briefcase },
    { label: "Clients Worldwide", value: "125+", icon: TrendingUp },
    { label: "Happy Clients", value: "98%", icon: TrendingUp },
  ];

  return (
    <PageLayout
      title="Experience & Stats"
      description="My professional journey and achievements"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl text-center group hover:border-neon-cyan/50 transition-colors"
          >
            <stat.icon className="w-8 h-8 text-neon-cyan mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            className="relative pl-8 md:pl-12 pb-8 border-l-2 border-neon-cyan/30 last:border-l-0 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-neon" />

            {/* Content Card */}
            <motion.div
              whileHover={{ x: 10 }}
              className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-neon-purple/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-neon-purple font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-neon-cyan">Key Achievements:</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-neon-cyan mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Skills Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-12 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Growth Over Time</h3>
        <p className="text-gray-400">
          Throughout my career, I've continuously evolved my skills and expertise, staying
          current with the latest technologies and best practices. From starting as a junior
          developer to leading teams and architecting complex solutions, each role has
          contributed to my growth as a professional.
        </p>
      </motion.div>
    </PageLayout>
  );
}
