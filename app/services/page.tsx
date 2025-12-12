"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Zap, Database, Globe } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Full-Stack Solutions", "API Integration", "Performance Optimization"],
      color: "blue",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      features: ["Figma Design", "Prototyping", "User Research", "Design Systems"],
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Progressive Web Apps", "App Store Deployment", "Push Notifications"],
      color: "cyan",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Speed optimization and performance tuning for existing applications.",
      features: ["Code Splitting", "Lazy Loading", "SEO Optimization", "Core Web Vitals"],
      color: "green",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable backend architecture and database design.",
      features: ["REST APIs", "GraphQL", "Database Design", "Microservices"],
      color: "pink",
    },
    {
      icon: Globe,
      title: "Consulting",
      description: "Technical consulting and architecture planning for your projects.",
      features: ["Tech Stack Selection", "Code Review", "Best Practices", "Team Training"],
      color: "blue",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "from-neon-blue/20 to-neon-blue/5 border-neon-blue/30 hover:border-neon-blue",
    purple: "from-neon-purple/20 to-neon-purple/5 border-neon-purple/30 hover:border-neon-purple",
    cyan: "from-neon-cyan/20 to-neon-cyan/5 border-neon-cyan/30 hover:border-neon-cyan",
    green: "from-neon-green/20 to-neon-green/5 border-neon-green/30 hover:border-neon-green",
    pink: "from-neon-pink/20 to-neon-pink/5 border-neon-pink/30 hover:border-neon-pink",
  };

  return (
    <PageLayout
      title="Services"
      description="What I can do for you and your business"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${
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
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
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
        className="mt-12 p-8 md:p-12 rounded-2xl border border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10 backdrop-blur-xl text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how I can help bring your ideas to life with cutting-edge technology
          and beautiful design.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-bold hover:shadow-neon transition-all"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </PageLayout>
  );
}
