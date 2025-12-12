"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe, Instagram, Mail } from "lucide-react";

export default function ProfilesPage() {
  const socialProfiles = [
    {
      platform: "GitHub",
      icon: Github,
      username: "@yourusername",
      followers: "2.5K",
      link: "https://github.com",
      color: "from-gray-700 to-gray-900",
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      username: "@yourname",
      followers: "5K+",
      link: "https://linkedin.com",
      color: "from-blue-600 to-blue-800",
    },
    {
      platform: "Twitter",
      icon: Twitter,
      username: "@yourusername",
      followers: "3.2K",
      link: "https://twitter.com",
      color: "from-sky-500 to-sky-700",
    },
    {
      platform: "Portfolio",
      icon: Globe,
      username: "yourportfolio.com",
      followers: "10K+ visits",
      link: "https://yourportfolio.com",
      color: "from-neon-cyan to-neon-blue",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      username: "@yourusername",
      followers: "4.1K",
      link: "https://instagram.com",
      color: "from-pink-600 to-purple-600",
    },
    {
      platform: "Email",
      icon: Mail,
      username: "your.email@example.com",
      followers: "Direct contact",
      link: "mailto:your.email@example.com",
      color: "from-green-600 to-emerald-700",
    },
  ];

  return (
    <PageLayout
      title="Social Profiles"
      description="Connect with me across different platforms"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-neon-cyan/50 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <profile.icon className="w-8 h-8 text-white" />
              </div>

              {/* Platform Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{profile.platform}</h3>

              {/* Username */}
              <p className="text-gray-400 text-sm mb-2">{profile.username}</p>

              {/* Followers/Stats */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-neon-cyan text-sm font-medium">{profile.followers}</span>
              </div>
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            >
              <div className="w-8 h-8 rounded-full border-2 border-neon-cyan flex items-center justify-center">
                <span className="text-neon-cyan text-xl">→</span>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Let's Connect!</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Feel free to reach out on any platform. I'm always open to interesting conversations
          and collaboration opportunities.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-bold hover:shadow-neon transition-all"
        >
          Send a Message
        </motion.a>
      </motion.div>
    </PageLayout>
  );
}
