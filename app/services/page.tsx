"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code, Palette, Smartphone, Zap, Database, Globe } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies like React, Next.js, and Express.js.",
      features: ["React & Next.js", "Express.js Backend", "Prisma ORM", "Tailwind CSS"],
      color: "blue",
    },
    {
      icon: Palette,
      title: "UI/UX & Graphic Design",
      description: "Creative and user-centered design solutions for digital products and branding.",
      features: ["Figma Design", "Adobe Illustrator", "Photoshop", "Brand Identity"],
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Mobile-first, responsive websites that work seamlessly across all devices.",
      features: ["Mobile Optimization", "Cross-browser Compatibility", "Progressive Web Apps", "Performance Optimization"],
      color: "cyan",
    },
    {
      icon: Zap,
      title: "AI Automation & Agents",
      description: "Intelligent automation solutions and AI agents to streamline your workflows.",
      features: ["AI Integration", "Process Automation", "AI Agents Development", "Workflow Optimization"],
      color: "green",
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Efficient database architecture and management with modern ORMs and best practices.",
      features: ["Prisma ORM", "Database Design", "Data Modeling", "API Development"],
      color: "pink",
    },
    {
      icon: Globe,
      title: "Leadership & Team Management",
      description: "Project leadership, team coordination, and mentoring for successful project delivery.",
      features: ["Project Management", "Team Leadership", "Student Mentoring", "Event Organization"],
      color: "blue",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 to-cyan-500/20",
    purple: "from-purple-500/20 to-pink-500/20",
    cyan: "from-cyan-500/20 to-blue-500/20",
    green: "from-green-500/20 to-emerald-500/20",
    pink: "from-pink-500/20 to-rose-500/20",
  };

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
                Services
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                What I can do for you and your business
              </p>
            </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className={`group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${
              colorMap[service.color]
            } backdrop-blur-xl transition-all duration-300`}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <service.icon className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{service.description}</p>

            {/* Features */}
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-br from-white/10 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help bring your ideas to life with cutting-edge technology
          and beautiful design.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] transition-all"
        >
          Get in Touch
        </Link>
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
