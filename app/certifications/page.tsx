"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "☁️",
      link: "#",
    },
    {
      title: "Google Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      icon: "🔧",
      link: "#",
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2023",
      icon: "⚛️",
      link: "#",
    },
    {
      title: "Microsoft Certified: Azure Developer",
      issuer: "Microsoft",
      date: "2022",
      icon: "💻",
      link: "#",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      icon: "⚙️",
      link: "#",
    },
    {
      title: "Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2021",
      icon: "🔒",
      link: "#",
    },
  ];

  return (
    <PageLayout
      title="Certifications"
      description="Professional credentials and achievements"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-neon-cyan/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-neon-blue text-sm font-medium">{cert.date}</p>
              </div>

              {/* Badge Icon */}
              <Award className="w-6 h-6 text-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* View Link */}
            <a
              href={cert.link}
              className="mt-4 inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
            >
              <span>View Certificate</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/0 to-neon-blue/0 group-hover:from-neon-cyan/5 group-hover:to-neon-blue/5 transition-all duration-300 pointer-events-none" />
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
          { label: "Total Certifications", value: "15+" },
          { label: "Industry Leaders", value: "8" },
          { label: "Years Learning", value: "7+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </PageLayout>
  );
}
