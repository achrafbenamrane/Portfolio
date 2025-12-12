"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Briefcase,
  Award,
  Code,
  Wrench,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Contact Card Component (static, no navigation)
function ContactCard({
  delay = 0,
  className = "",
}: {
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className={`relative h-full w-full overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,85,0.4)] rounded-3xl ${className}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/5 opacity-60" />
      
      {/* Content */}
      <div className="relative h-full w-full flex flex-col justify-center p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
        {/* Motivation Line */}
        <div>
          <h2 className="text-base sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work
            </span>
            {" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 flex-wrap">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#0A66C2] hover:bg-[#004182] border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(10,102,194,0.5)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="tel:+1234567890"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#25D366] hover:bg-[#128C7E] border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#0088cc] hover:bg-[#0077b5] border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(0,136,204,0.5)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// iOS-style Tile Component (inline for consistency)
function IOSTile({
  title,
  subtitle,
  icon: Icon,
  href,
  color,
  delay = 0,
  className = "",
  showImage = false,
}: {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  href: string;
  color: string;
  delay?: number;
  className?: string;
  showImage?: boolean;
}) {
  const colorMap: Record<string, { from: string; to: string; glow: string }> = {
    blue: { from: "from-blue-500/20", to: "to-blue-600/5", glow: "hover:shadow-[0_0_30px_rgba(0,122,255,0.4)]" },
    cyan: { from: "from-cyan-500/20", to: "to-cyan-600/5", glow: "hover:shadow-[0_0_30px_rgba(0,199,190,0.4)]" },
    purple: { from: "from-purple-500/20", to: "to-purple-600/5", glow: "hover:shadow-[0_0_30px_rgba(175,82,222,0.4)]" },
    pink: { from: "from-pink-500/20", to: "to-pink-600/5", glow: "hover:shadow-[0_0_30px_rgba(255,45,85,0.4)]" },
    orange: { from: "from-orange-500/20", to: "to-orange-600/5", glow: "hover:shadow-[0_0_30px_rgba(255,149,0,0.4)]" },
    green: { from: "from-green-500/20", to: "to-green-600/5", glow: "hover:shadow-[0_0_30px_rgba(52,199,89,0.4)]" },
  };

  const colors = colorMap[color] || colorMap.blue;

  return (
    <Link href={href} className={`block h-full w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`relative h-full w-full overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg transition-all duration-300 ${colors.glow} rounded-3xl`}
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} opacity-60`} />
        
        {/* Content */}
        <div className="relative h-full w-full flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 lg:p-4 text-center">
          {showImage ? (
            <div className="h-full w-full flex flex-col p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6">
              {/* Profile Image - Top Left */}
              <div className="flex items-start gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 mb-auto">
                <div className="relative w-16 h-16 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full overflow-hidden border-2 sm:border-2 md:border-3 lg:border-4 border-white/30 shadow-xl flex-shrink-0">
                  <Image
                    src="/assets/profil.JPG"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col items-start text-left pt-1 sm:pt-0.5 md:pt-1 lg:pt-2">
                  <h3 className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-white leading-tight mb-1 sm:mb-1 md:mb-1.5 lg:mb-2">
                    Benamrane Mohamed Achraf
                  </h3>
                  <div className="mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-2 space-y-0.5 sm:space-y-0.5 md:space-y-1">
                    <p className="text-[10px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm text-gray-300 font-medium">
                      Full Stack Developer
                    </p>
                    <p className="text-[10px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm text-gray-400">
                      UI/UX & Graphic Designer
                    </p>
                    <p className="text-[10px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm text-gray-400">
                      Network & Security Engineer
                    </p>
                    <p className="text-[10px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm text-gray-400">
                      AI Automation Expert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Icon className="w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white mb-1 sm:mb-1.5 md:mb-2" strokeWidth={1.5} />
              <h3 className="text-lg font-bold sm:text-[9px] sm:font-semibold md:text-[10px] lg:text-xs xl:text-sm text-white leading-tight">
                {title}
              </h3>
              {subtitle && <p className="text-xs sm:text-[8px] md:text-[9px] lg:text-[10px] text-gray-400 mt-0.5">{subtitle}</p>}
            </>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #007AFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full w-full flex flex-col overflow-hidden">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex-shrink-0"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              &lt;/&gt; My Portfolio
            </h1>
            <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-300">Active</span>
            </div>
          </div>
        </motion.header>

        {/* Dashboard Grid */}
        <main className="flex-1 px-2 sm:px-3 md:px-4 lg:px-6 pb-2 sm:pb-3 md:pb-4 lg:pb-6 overflow-hidden">
          <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center">
            {/* iOS Control Center Grid - Fixed, No Scrolling */}
            <div 
              className="grid w-full h-full gap-1 sm:gap-2.5 md:gap-3 lg:gap-4"
              style={{
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(4, 1fr)',
              }}
            >
              
              {/* Profile - Extra Large - First row full width on mobile, 2x3 on desktop */}
              <IOSTile
                title="Benamrane Mohamed Achraf"
                subtitle="Full Stack Developer"
                icon={User}
                href="/profile"
                color="blue"
                delay={0}
                className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-3 order-1 sm:order-none"
                showImage={true}
              />

              {/* Skills - Larger on mobile */}
              <IOSTile
                title="Skills"
                icon={Code}
                href="/skills"
                color="cyan"
                delay={0.1}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-2 sm:order-none"
              />

              {/* Services - Larger on mobile */}
              <IOSTile
                title="Services"
                icon={Wrench}
                href="/services"
                color="orange"
                delay={0.2}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-3 sm:order-none"
              />

              {/* Projects - Full width on mobile */}
              <IOSTile
                title="Projects"
                subtitle="My Work"
                icon={Briefcase}
                href="/projects"
                color="purple"
                delay={0.3}
                className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-1 order-4 sm:order-none"
              />

              {/* Connect - Full width LAST on mobile (LARGER to match Profile), 2x2 middle position on desktop */}
              <div className="col-span-4 row-span-2 sm:col-span-2 sm:row-span-2 order-7 sm:order-none">
                <ContactCard
                  delay={0.4}
                  className=""
                />
              </div>

              {/* Experience - Larger on mobile, bottom right on desktop */}
              <IOSTile
                title="Experience"
                icon={TrendingUp}
                href="/experience"
                color="purple"
                delay={0.5}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-5 sm:order-none"
              />

              {/* Certifications - Larger on mobile, bottom right on desktop */}
              <IOSTile
                title="Certifications"
                icon={Award}
                href="/certifications"
                color="green"
                delay={0.6}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-6 sm:order-none"
              />

            </div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="py-3 text-center flex-shrink-0"
        >
          <p className="text-[10px] text-gray-500">
            © 2025 iOS Portfolio Dashboard
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
