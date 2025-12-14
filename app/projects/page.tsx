"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Instagram } from "lucide-react";
import { useState, useCallback, useMemo } from "react";

export default function ProjectsPage() {
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668604/1_hdwbhl.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668605/6_hzpruh.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668611/3_mvdmkz.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668606/5_zsjru0.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668604/2_wdhnke.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668609/4_hrie4t.webp"
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765669018/2_boun0k.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668973/1_dinedx.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668975/3_qbfn6x.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668977/4_lsco7q.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668979/5_qel7ap.webp"
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668887/1_jg0sv1.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765668888/2_gwmo56.webp"
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765647418/1_gkle1x.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765661742/10_n9p2ew.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765647425/3_yzckiq.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765647413/11_ledogt.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765661751/5_igcbux.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765661744/9_bxa46e.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765647422/7_fcnnqh.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765661787/13_wlawwc.webp"
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765646528/1_wlfegs.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765646535/2_d70ngg.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765646536/3_l68alr.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765662234/4_rv0a6c.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765646529/5_rxtguc.webp",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765646528/6_mcgtes.webp"
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765674697/Screenshot_20251214-020612_g3xfwx.jpg",
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765674745/IMG_20251123_095302_401_cdnnx9.jpg"
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
        "https://res.cloudinary.com/dwvgbojw0/image/upload/v1765669316/1_a12pgv.webp"
      ],
      tags: ["Business Card", "Brand Identity", "Print Design", "Adobe Illustrator"],
      category: "Graphic Design",
      link: "https://maison-de-choco.vercel.app/",
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
          transition={{ duration: 0.3 }}
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
        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl overflow-hidden relative">
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
            {/* Carousel Controls */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % displayImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
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
          <img 
            src={displayImages[0]} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
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
                    {project.instagram ? (
                      <>
                        <Instagram className="w-4 h-4" />
                        <span className="text-sm">Instagram</span>
                      </>
                    ) : project.tiktok ? (
                      <>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
