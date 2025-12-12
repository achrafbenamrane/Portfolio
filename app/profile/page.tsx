"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function ProfilePage() {
  const personalInfo = [
    { icon: Mail, label: "Email", value: "your.email@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
    { icon: Calendar, label: "Availability", value: "Available for hire" },
  ];

  return (
    <PageLayout
      title="About Me"
      description="Web Designer & Developer based in San Francisco"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-neon-blue/30 group-hover:border-neon-blue transition-colors duration-300">
            <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl bg-neon-blue/20 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
        </motion.div>

        {/* Profile Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">David Henderson</h2>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Web Designer based in San Francisco with 7+ years of experience
              creating beautiful and functional digital experiences. I specialize in modern web
              technologies and have a keen eye for design details.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {personalInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-neon-cyan/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-neon-cyan/10 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors">
                  <item.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            With over 7 years in the industry, I've had the privilege of working with clients
            worldwide, delivering 210+ successful projects. My journey in web design started with
            a passion for creating beautiful, user-centric experiences.
          </p>
          <p>
            I believe in the power of great design to transform businesses and create meaningful
            connections with users. Every project is an opportunity to push boundaries and explore
            new creative possibilities.
          </p>
        </div>
      </motion.div>
    </PageLayout>
  );
}
