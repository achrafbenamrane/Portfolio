"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Briefcase,
  Award,
  Code,
  Palette,
  Smartphone,
  Zap,
  Database,
  Globe,
  Wrench,
  MessageSquare,
  TrendingUp,
  Download,
  ArrowLeft,
  ExternalLink,
  Github,
  Instagram,
  Calendar,
  Users,
  Mail,
  Send,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Maximize,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Typewriter Text Animation Component
interface TypewriterTextProps {
  targetText: string;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  targetText,
  speed = 100,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  React.useEffect(() => {
    if (currentIndex < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + targetText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, targetText, speed]);

  return (
    <motion.p
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center break-words z-10 text-white"
      style={{
        textShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6',
        filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className="animate-pulse text-blue-400">|</span>
    </motion.p>
  );
};

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
      whileTap={{ scale: 1 }}
      className={`relative h-full w-full overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,85,0.4)] rounded-3xl ${className}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-pink-600/5 opacity-60" />
      
      {/* Content */}
      <div className="relative h-full w-full flex flex-col justify-center p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
        {/* Motivation Line */}
        <div>
          <h2 className="text-base sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-center leading-tight text-blue-500">
            Let's Work Together
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 flex-wrap">
          <a
            href="https://github.com/achrafbenamrane"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-achraf-benamrane-582127350"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#0A66C2] hover:bg-[#004182] border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(10,102,194,0.5)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="tel:+213558780131"
            className="p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#25D366] hover:bg-[#128C7E] border border-white/20 hover:border-white/40 transition-all hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10" viewBox="0 0 24 24" fill="white">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </a>
          <a
            href="https://t.me/adventurero_dz"
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
  onClick,
  color,
  delay = 0,
  className = "",
  showImage = false,
  onContactClick,
}: {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  color: string;
  delay?: number;
  className?: string;
  showImage?: boolean;
  onContactClick?: () => void;
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

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: showImage ? 1 : 1.02 }}
      whileTap={{ scale: 1 }}
      className={`relative h-full w-full overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg transition-all duration-300 ${colors.glow} rounded-3xl`}
    >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} opacity-60`} />
        
        {/* Content */}
        <div className="relative h-full w-full flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 lg:p-4 text-center">
          {showImage ? (
            <div className="h-full w-full flex flex-col justify-center p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6">
              {/* Profile Image - Centered */}
              <div className="flex items-stretch gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6">
                <div className="relative w-24 sm:w-20 md:w-24 lg:w-28 xl:w-36 rounded-2xl overflow-hidden border-3 sm:border-2 md:border-3 lg:border-4 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.8)] flex-shrink-0">
                  <Image
                    src="/assets/profil.webp"
                    alt="Profile"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  
                </div>
                <div className="flex flex-col items-start justify-between text-left flex-1">
                  <h3 className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-white leading-tight mb-1 sm:mb-1 md:mb-1.5 lg:mb-2">
                    Benamrane Mohamed Achraf                  </h3>
                  <div className="mt-0.5 sm:mt-0.5 md:mt-1 lg:mt-2 space-y-0.5 sm:space-y-0.5 md:space-y-1">
                    <p className="text-[10px] sm:text-[8px] md:text-[9px] lg:text-xs xl:text-sm text-gray-300 leading-relaxed">
                      I'm a Full-Stack Developer, UI/UX Designer, Graphic Designer, and Network & Information Security Engineer.
                      I enjoy combining development, design, and security to build modern digital solutions . 
                    </p>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex gap-2 mt-2 sm:mt-2 md:mt-3 lg:mt-4">
                    {/* Download CV Button */}
                    <a
                      href="/cv.pdf"
                      download
                      className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full text-white text-[10px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,122,255,0.5)] hover:scale-105 active:scale-100"
                    >
                      <Download className="w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" strokeWidth={2.5} />
                      Download CV
                    </a>

                    {/* Contact Button */}
                    <div
                      onClick={onContactClick}
                      className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white text-[10px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-100 cursor-pointer"
                    >
                      <MessageSquare className="w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" strokeWidth={2.5} />
                      Contact
                    </div>
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
  );

  // If it's the profile card (showImage=true), don't wrap in Link
  if (showImage) {
    return <div className={`block h-full w-full ${className}`}>{content}</div>;
  }

  // If onClick is provided, use div with onClick
  if (onClick) {
    return (
      <div onClick={onClick} className={`block h-full w-full cursor-pointer ${className}`}>
        {content}
      </div>
    );
  }

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className={`block h-full w-full ${className}`}>
        {content}
      </Link>
    );
  }

  // Default: just return the content
  return <div className={`block h-full w-full ${className}`}>{content}</div>;
}

function PageContent({ page, onBack, onContactClick }: { page: string; onBack: () => void; onContactClick?: () => void }) {
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

      <div className="relative z-10 h-full w-full flex flex-col">
        {/* Header with Back Button */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 flex-shrink-0"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm sm:text-base text-white"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Dashboard
            </button>
            
            {page !== 'contact' && (
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
                title="Contact Me"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </motion.header>

        {/* Page Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 py-6 sm:py-8 pb-12 overflow-auto">
          <div className="max-w-6xl mx-auto">
            {page === 'projects' && <ProjectsContent />}
            {page === 'skills' && <SkillsContent />}
            {page === 'services' && <ServicesContent onContactClick={onContactClick} />}
            {page === 'experience' && <ExperienceContent />}
            {page === 'certifications' && <CertificationsContent />}
            {page === 'contact' && <ContactContent />}
            {page === 'profile' && <ProfileContent onContactClick={onContactClick} />}
          </div>
        </main>
      </div>
    </div>
  );
}

// Placeholder components - will be replaced with actual content
function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "Graphic Design", "AI Automation", "Desktop Development", "Mobile Development"];

  const projects = [
    {
      title: "ONEFRAME",
      description: "E-commerce website for my brand",
      image: "/projects/ONEFRAME.webp",
      tags: ["E-commerce", "Next.js", "Stripe"],
      category: "Web Development",
      link: "https://oneframe.me",
      github: "#",
    },
    {
      title: "Smart Dental Platform",
      description: "Healthcare platform connecting Medicine and Technology faculties - Startup brevet earned",
      images: [
        "/projects/smiley/1.webp",
        "/projects/smiley/2.webp",
        "/projects/smiley/3.webp",
        "/projects/smiley/4.webp",
        "/projects/smiley/5.webp"
      ],
      tags: ["Full-Stack", "Healthcare", "Innovation"],
      category: "Web Development",
      link: "https://smiley.vercel.app",
      github: "#",
    },
    {
      title: "Desktop IDS",
      description: "Advanced Intrusion Detection System",
      images: [
        "/projects/ids/1.webp",
        "/projects/ids/2.webp",
        "/projects/ids/3.webp"
      ],
      tags: ["Python", "Security", "Network", "Desktop App"],
      category: "Desktop Development",
      link: "https://desktop-ids.vercel.app/",
      github: "#",
    },
    {
      title: "Manliness Evolution Ebook",
      description: "Interactive digital book exploring modern masculinity and personal growth with engaging content and smooth reading experience",
      images: [
        "/projects/ebook/1.webp",
        "/projects/ebook/2.webp",
        "/projects/ebook/3.webp"
      ],
      tags: ["Next.js", "TypeScript", "Interactive", "Digital Publishing"],
      category: "Web Development",
      link: "https://manliness-smart-book.vercel.app",
      github: "#",
    },
    {
      title: "Student Reclamation Portal",
      description: "Student complaint management system with automated Telegram notifications - reclamations are automatically sent to class delegates via Telegram for quick resolution",
      image: "/projects/student/1.webp",
      tags: ["Web App", "Telegram Bot", "Automation", "Issue Tracking"],
      category: "Web Development",
      link: "https://student-reclamation-portal.vercel.app/",
      github: "#",
    },
    {
      title: "E-commerce Workflow Automation",
      description: "New Shopify order → saved to Google Sheets + notified via Telegram + SMS sent via Twilio",
      image: "/projects/ai-automation/ecommerce.webp",
      tags: ["Make.com", "Shopify", "Telegram", "Twilio", "Google Sheets"],
      category: "AI Automation",
      link: "#",
      github: "#",
    },
    {
      title: "AliExpress Winning Products Finder",
      description: "Fetch AliExpress data → find winning products → save results to Google Sheets",
      image: "/projects/ai-automation/winnersProduct.webp",
      tags: ["Make.com", "AliExpress", "Data Analysis", "Google Sheets"],
      category: "AI Automation",
      link: "#",
      github: "#",
    },
    {
      title: "Weather Change Detector & Alert System",
      description: "Get weather → detect change → save to Google Sheets → send alert (Telegram / HTTP)",
      image: "/projects/ai-automation/weather.webp",
      tags: ["Make.com", "Weather API", "Telegram", "Monitoring", "Alerts"],
      category: "AI Automation",
      link: "#",
      github: "#",
    },
    {
      title: "ONEFRAME Packaging Design",
      description: "Professional packaging design collection featuring custom car-themed artwork for ONEFRAME brand products",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668604/1_hdwbhl.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668605/6_hzpruh.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668611/3_mvdmkz.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668606/5_zsjru0.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668604/2_wdhnke.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668609/4_hrie4t.webp"
      ],
      tags: ["Packaging Design", "Branding", "Adobe Illustrator", "Product Design"],
      category: "Graphic Design",
      link: "https://www.instagram.com/oneframe.dz?igsh=eGR6Z3ljZ3FkZzFt",
      instagram: true,
      github: "#",
    },
    {
      title: "Rital Fast Food",
      description: "Complete restaurant branding and menu design for Rital Fast Food in Annaba Sidi Amar, featuring modern visual identity and appetizing food presentation",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765669018/2_boun0k.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668973/1_dinedx.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668975/3_qbfn6x.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668977/4_lsco7q.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668979/5_qel7ap.webp"
      ],
      tags: ["Branding", "Menu Design", "Restaurant", "Adobe Illustrator"],
      category: "Graphic Design",
      link: "#",
      github: "#",
    },
    {
      title: "Butcher Pricing Menu",
      description: "Professional pricing menu design for a local butcher shop in Ain Bidha, Oum Bouaghi, Algeria. Clean layout showcasing meat prices with clear typography and traditional butchery aesthetic",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668887/1_jg0sv1.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765668888/2_gwmo56.webp"
      ],
      tags: ["Menu Design", "Pricing", "Typography", "Adobe Illustrator"],
      category: "Graphic Design",
      link: "#",
      github: "#",
    },
    {
      title: "Rital Fast Food Big Panels",
      description: "Large-scale outdoor advertising panels for Rital Fast Food in Sidi Amar, Annaba. Eye-catching billboard designs featuring bold typography, vibrant food photography, and strategic messaging for maximum visual impact",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765647418/1_gkle1x.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765661742/10_n9p2ew.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765647425/3_yzckiq.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765647413/11_ledogt.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765661751/5_igcbux.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765661744/9_bxa46e.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765647422/7_fcnnqh.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765661787/13_wlawwc.webp"
      ],
      tags: ["Billboard Design", "Advertising", "Branding", "Adobe Illustrator"],
      category: "Graphic Design",
      link: "#",
      github: "#",
    },
    {
      title: "Berchicha Store Logo",
      description: "Brand identity and logo design for Berchicha, an Algerian retailer specializing in authentic TN and Lacoste products. Modern logo design reflecting quality and authenticity with clean, professional aesthetics",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765646528/1_wlfegs.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765646535/2_d70ngg.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765646536/3_l68alr.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765662234/4_rv0a6c.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765646529/5_rxtguc.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765646528/6_mcgtes.webp"
      ],
      tags: ["Logo Design", "Brand Identity", "Adobe Illustrator", "Retail"],
      category: "Graphic Design",
      link: "https://www.tiktok.com/@originalberchicha04?_r=1&_t=ZS-92BWRZ1BCeG",
      tiktok: true,
      github: "#",
    },
    {
      title: "OSCA Logo",
      description: "Official logo design for the Open Source Community Annaba (OSCA), a scientific club dedicated to promoting open source technology and collaboration among developers and tech enthusiasts in Annaba, Algeria",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765674697/Screenshot_20251214-020612_g3xfwx.jpg",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765674745/IMG_20251123_095302_401_cdnnx9.jpg"
      ],
      tags: ["Logo Design", "Brand Identity", "Community", "Open Source"],
      category: "Graphic Design",
      link: "https://t.me/OSCommunityChat",
      telegram: true,
      github: "#",
    },
    {
      title: "Maison du Choco Visit Card",
      description: "Professional business card design for Maison du Choco, a premium chocolate and pastry boutique. Elegant design featuring sophisticated typography and brand colors that reflect the artisanal quality of their handcrafted treats",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765669316/1_a12pgv.webp"
      ],
      tags: ["Business Card", "Brand Identity", "Print Design", "Adobe Illustrator"],
      category: "Graphic Design",
      link: "https://maison-de-choco.vercel.app/",
      github: "#",
    },
    {
      title: "Private School Banners",
      description: "Banner designs for اكاديمية طلائع المستقبل للتعليم والتكوين (Future Pioneers Academy) in Ain Beida, Oum El Bouaghi. Modern educational themes with vibrant colors and professional typography for school branding.",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765755966/IMG_20251211_194731_388_uxgrke.jpg",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765756023/IMG_20251211_194739_264_bxs2n5.jpg",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765756022/IMG_20251211_194735_861_mmipqs.jpg"
      ],
      tags: ["Banner Design", "Educational Branding", "Adobe Illustrator", "Print Design"],
      category: "Graphic Design",
      link: "https://www.facebook.com/share/1A2rR5FSFm/",
      facebook: true,
      github: "#",
    },
    {
      title: "DMD Logo",
      description: "Logo design for DMD, an Algerian clothing store located in Wilaya 58 (Annaba). Modern and distinctive branding that captures the essence of Algerian fashion retail.",
      images: [
        "https://res.cloudinary.com/dwvgbojw0/image/upload/f_auto,q_auto/v1765765968/Screenshot_20251213-182824_xdiie9.jpg"
      ],
      tags: ["Logo Design", "Branding", "Algerian Fashion", "Adobe Illustrator"],
      category: "Graphic Design",
      link: "https://www.tiktok.com/@dmdannaba23?_r=1&_t=ZS-92ENEX7ezSx",
      instagramLink: "https://www.instagram.com/dmdstore_annaba23?igsh=dGJkbXA1YnV6OWJ5",
      tiktok: true,
      instagram: true,
      github: "#",
    },
  ];

  const filteredProjects = useMemo(() => 
    selectedCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          My Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">
          A collection of my recent work and side projects
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 relative"
      >
        <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(0,122,255,0.3)]"
                    : "backdrop-blur-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* Gradient fade effect on mobile to indicate more buttons */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none md:hidden" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
function SkillsContent() {
  const skills = [
    // Web Development
    { name: "HTML & CSS", category: "Web", color: "bg-orange-500" },
    { name: "JavaScript", category: "Web", color: "bg-yellow-500" },
    { name: "React", category: "Web", color: "bg-cyan-500" },
    { name: "Next.js", category: "Web", color: "bg-black" },
    { name: "TypeScript", category: "Web", color: "bg-blue-600" },
    { name: "Express.js", category: "Web", color: "bg-gray-700" },
    { name: "Node.js", category: "Web", color: "bg-green-600" },
    { name: "Tailwind CSS", category: "Web", color: "bg-cyan-600" },
    { name: "Prisma ORM", category: "Web", color: "bg-indigo-600" },
    
    // Design
    { name: "Figma", category: "Design", color: "bg-purple-600" },
    { name: "Adobe Illustrator", category: "Design", color: "bg-orange-600" },
    { name: "Photoshop", category: "Design", color: "bg-blue-700" },
    { name: "Inkscape", category: "Design", color: "bg-gray-800" },
    { name: "UI/UX Design", category: "Design", color: "bg-pink-500" },
    { name: "Graphic Design", category: "Design", color: "bg-rose-600" },
    
    // Programming & Security
    { name: "Python", category: "Programming", color: "bg-blue-500" },
    { name: "Network Security", category: "Security", color: "bg-red-600" },
    { name: "Information Security", category: "Security", color: "bg-red-700" },
    
    // Tools
    { name: "Git & GitHub", category: "Tools", color: "bg-gray-900" },
    { name: "Linux", category: "Tools", color: "bg-yellow-600" },
    
    // AI & Automation
    { name: "AI Automation", category: "AI", color: "bg-violet-600" },
    { name: "AI Agents", category: "AI", color: "bg-purple-700" },
    
    // Soft Skills
    { name: "Leadership", category: "Soft Skills", color: "bg-emerald-600" },
    { name: "Team Management", category: "Soft Skills", color: "bg-teal-600" },
  ];

  return (
    <>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 sm:mb-10 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          Skills & Expertise
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
          A comprehensive overview of technologies and tools I work with
        </p>
      </motion.div>

      {/* Skills Grid - Bento Box Style */}
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateZ: -5 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.03,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.08, 
              y: -5,
              rotateZ: 2,
              transition: { duration: 0.2 }
            }}
            className="group relative"
          >
            <div className={`${skill.color} px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}>
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-sm whitespace-nowrap">{skill.name}</h3>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Technologies", value: "25+" },
          { label: "Years Experience", value: "3+" },
          { label: "Projects", value: "50+" },
          { label: "Certifications", value: "6" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 text-center"
          >
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 md:mb-2">
              {stat.value}
            </div>
            <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
function ServicesContent({ onContactClick }: { onContactClick?: () => void }) {
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
    <>
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
        <button
          onClick={onContactClick}
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] transition-all"
        >
          Get in Touch
        </button>
      </motion.div>
    </>
  );
}
function ExperienceContent() {
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
    <>
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
    </>
  );
}
function CertificationsContent() {
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
    <>
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
    </>
  );
}
function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Mohamed-achraf.benamrane@univ-annaba.dz",
      link: "mailto:Mohamed-achraf.benamrane@univ-annaba.dz",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213 558 78 01 31",
      link: "tel:+213558780131",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Annaba, Algeria",
      link: null,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/achrafbenamrane",
      link: "https://github.com/achrafbenamrane",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/achrafbenamrane",
      link: "https://linkedin.com/in/achrafbenamrane",
    },
  ];

  return (
    <>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-3">
          Let's Work Together
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">
          Have a project in mind? Let's create something amazing!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all backdrop-blur-xl"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all backdrop-blur-xl"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all backdrop-blur-xl"
                placeholder="Project Inquiry"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none backdrop-blur-xl"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] transition-all"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>

        {/* Contact Info & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Contact Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-400/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <info.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white font-medium hover:text-cyan-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-xl"
          >
            <MessageSquare className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Quick Response</h3>
            <p className="text-gray-300 mb-4">
              I typically respond within 24 hours. For urgent inquiries, feel free to call or
              message me directly on social media.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
function ProfileContent({ onContactClick }: { onContactClick?: () => void }) {
  const socialProfiles = [
    {
      platform: "GitHub",
      icon: Github,
      username: "@achrafbenamrane",
      followers: "1.2K+",
      link: "https://github.com/achrafbenamrane",
      color: "from-gray-700 to-gray-900",
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      username: "@achrafbenamrane",
      followers: "5K+",
      link: "https://linkedin.com/in/mohamed-achraf-benamrane-582127350",
      color: "from-blue-600 to-blue-800",
    },
    {
      platform: "Portfolio",
      icon: Globe,
      username: "achrafbenamrane.dev",
      followers: "10K+ visits",
      link: "https://achrafbenamrane.dev",
      color: "from-cyan-500 to-blue-500",
    },
    {
      platform: "Instagram",
      icon: Instagram,
      username: "@adventurero_dz",
      followers: "2.1K",
      link: "https://instagram.com/adventurero_dz",
      color: "from-pink-600 to-purple-600",
    },
    {
      platform: "Email",
      icon: Mail,
      username: "Mohamed-achraf.benamrane@univ-annaba.dz",
      followers: "Direct contact",
      link: "mailto:Mohamed-achraf.benamrane@univ-annaba.dz",
      color: "from-green-600 to-emerald-700",
    },
  ];

  return (
    <>
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 sm:mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          Social Profiles
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">
          Connect with me across different platforms
        </p>
      </motion.div>

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
            className="group relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
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
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium">{profile.followers}</span>
              </div>
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
            >
              <div className="w-8 h-8 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <span className="text-cyan-400 text-xl">→</span>
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
        <button
          onClick={onContactClick}
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] transition-all"
        >
          Send a Message
        </button>
      </motion.div>
    </>
  );
}

// Project Card Component with Carousel Support
function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const hasMultipleImages = project.images && project.images.length > 0;
  const displayImages = hasMultipleImages ? project.images : [project.image];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
        whileHover={{ y: -10 }}
        className="group relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
      >
        {/* Project Image/Icon with Carousel */}
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl overflow-hidden relative mb-4">
          {hasMultipleImages ? (
            <>
              <img 
                src={displayImages[currentImageIndex]} 
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
                loading="eager"
                decoding="async"
              />
              {/* Full Screen Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-full p-3 pointer-events-none">
                  <Maximize className="w-6 h-6 text-white pointer-events-none" />
                </div>
              </div>
            {/* Carousel Controls */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % displayImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  ›
                </button>
                {/* Dots Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {displayImages.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-blue-500 w-8 shadow-[0_0_10px_rgba(59,130,246,0.8)]' 
                          : 'bg-white/40 w-2.5 hover:bg-blue-400/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : typeof displayImages[0] === 'string' && displayImages[0].startsWith('/') ? (
          <>
            <img 
              src={displayImages[0]} 
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
              loading="eager"
              decoding="async"
            />
            {/* Full Screen Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm rounded-full p-3 pointer-events-none">
                <Maximize className="w-6 h-6 text-white pointer-events-none" />
              </div>
            </div>
          </>
        ) : (
          displayImages[0]
        )}
      </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, tagIndex: number) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/30 hover:bg-blue-500/20 transition-colors"
                  >
                    {project.link.includes('tiktok') ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok w-4 h-4" viewBox="0 0 16 16">
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                        </svg>
                        <span className="text-sm">TikTok</span>
                      </>
                    ) : project.instagram && !project.tiktok && !project.facebook ? (
                      <>
                        <Instagram className="w-4 h-4" />
                        <span className="text-sm">Instagram</span>
                      </>
                    ) : project.facebook && !project.tiktok && !project.instagram ? (
                      <>
                        <Facebook className="w-4 h-4" />
                        <span className="text-sm">Facebook</span>
                      </>
                    ) : project.tiktok && !project.instagram && !project.facebook ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok w-4 h-4" viewBox="0 0 16 16">
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                        </svg>
                        <span className="text-sm">TikTok</span>
                      </>
                    ) : project.telegram ? (
                      <>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span className="text-sm">Telegram</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View</span>
                      </>
                    )}
                  </a>
                )}
                {project.instagramLink && (
                  <a
                    href={project.instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-400/30 hover:bg-blue-500/20 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="text-sm">Instagram</span>
                  </a>
                )}
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
              </div>
            </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
      </motion.div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
          >
            ✕
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={displayImages[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              loading="eager"
              decoding="async"
            />
            
            {/* Lightbox Navigation */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all text-2xl"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition-all text-2xl"
                >
                  ›
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm">
                  {currentImageIndex + 1} / {displayImages.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage !== 'home') {
    // Render the selected page content
    return <PageContent page={currentPage} onBack={() => setCurrentPage('home')} onContactClick={() => setCurrentPage('contact')} />;
  }

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
          className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 flex-shrink-0"
        >
          <div className="flex items-center justify-center max-w-7xl mx-auto">
            <TypewriterText targetText="welcome to my portfolio" speed={100} />
          </div>
        </motion.header>

        {/* Dashboard Grid */}
        <main className="flex-1 px-3 sm:px-3 md:px-4 lg:px-6 pb-6 sm:pb-3 md:pb-4 lg:pb-6 overflow-hidden">
          <div className="w-full h-full max-w-7xl mx-auto flex items-center justify-center px-2 sm:px-0 pb-4 sm:pb-0">
            {/* iOS Control Center Grid - Fixed, No Scrolling */}
            <div 
              className="grid w-full h-full gap-2 sm:gap-2.5 md:gap-3 lg:gap-4"
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
                onClick={() => setCurrentPage('profile')}
                color="blue"
                delay={0}
                className="col-span-4 row-span-1 sm:col-span-2 sm:row-span-3 order-1 sm:order-none"
                showImage={true}
                onContactClick={() => setCurrentPage('contact')}
              />

              {/* Skills - Larger on mobile */}
              <IOSTile
                title="Skills"
                icon={Code}
                onClick={() => setCurrentPage('skills')}
                color="cyan"
                delay={0.1}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-2 sm:order-none"
              />

              {/* Services - Larger on mobile */}
              <IOSTile
                title="Services"
                icon={Wrench}
                onClick={() => setCurrentPage('services')}
                color="orange"
                delay={0.2}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-3 sm:order-none"
              />

              {/* Projects - Full width on mobile */}
              <IOSTile
                title="Projects"
                subtitle="My Work"
                icon={Briefcase}
                onClick={() => setCurrentPage('projects')}
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
                onClick={() => setCurrentPage('experience')}
                color="purple"
                delay={0.5}
                className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-1 order-5 sm:order-none"
              />

              {/* Certifications - Larger on mobile, bottom right on desktop */}
              <IOSTile
                title="Certifications"
                icon={Award}
                onClick={() => setCurrentPage('certifications')}
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
          className="py-3 pb-6 sm:pb-3 text-center flex-shrink-0"
        >
          <p className="text-[10px] text-gray-500">
            © 2025 Portfolio Dashboard
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
