"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "Bachelor's Degree in Computer System",
      issuer: "Badji Mokhtar University Annaba",
      date: "2024",
      image: "/Bachelors-Degree-in-Computer-System.webp",
      skills: "Computer Science, Software Engineering, Network Security, Database Management, Algorithms & Data Structures",
      link: "#",
    },
    {
      title: "Open-Source Community Leader",
      issuer: "OSC Annaba - Computer Science Department",
      date: "2023-2024",
      image: "/ClubFounder.webp",
      skills: "Leadership, Community Management, Event Planning, Open-Source Development, Team Collaboration",
      link: "#",
    },
    {
      title: "Make Basics Certification",
      issuer: "Make.com",
      date: "2024",
      image: "/Make Basics.webp",
      skills: "AI Automation, Workflow Design, API Integration, No-Code Development, Process Optimization",
      link: "#",
    },
    {
      title: "Make Foundation Certification",
      issuer: "Make.com",
      date: "2024",
      image: "/Make Foundation.webp",
      skills: "AI Agents, Advanced Automation, Scenario Building, Data Processing, System Integration",
      link: "#",
    },
    {
      title: "Startup Brevet - Smart Dental Platform",
      issuer: "University Badji Mokhtar Annaba",
      date: "2023-2024",
      image: "/Startup-brevet.webp",
      skills: "Project Leadership, Full-Stack Development, Healthcare Technology, Innovation & Entrepreneurship, Team Management, Product Development",
      link: "#",
    },
    {
      title: "Event Organizer - Study in Japan 2024",
      issuer: "Open-Source Community Annaba",
      date: "2024",
      image: "/eventsOrganizer.webp",
      skills: "Event Management, International Relations, Public Speaking, Coordination, Marketing & Promotion",
      link: "#",
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
                Certifications
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                Professional credentials and achievements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Certificate Image - Top */}
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    {/* Badge Overlay */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-sm">
                      <Award className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content - Bottom */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-blue-400 text-sm font-medium mb-4">{cert.date}</p>
                    
                    {/* Skills Learned */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 font-semibold mb-2">Skills Learned:</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{cert.skills}</p>
                    </div>

                    {/* View Button */}
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all text-sm font-medium"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 grid grid-cols-3 gap-4"
      >
        {[
          { label: "Total Achievements", value: "6" },
          { label: "Organizations", value: "4" },
          { label: "Years Active", value: "2+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
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
