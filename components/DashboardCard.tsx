"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { cardVariants } from "@/lib/animations";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: "blue" | "purple" | "cyan" | "pink" | "green";
  delay?: number;
}

const colorMap = {
  blue: {
    border: "hover:border-neon-blue",
    shadow: "hover:shadow-neon",
    text: "text-neon-blue",
    bg: "bg-neon-blue/10",
  },
  purple: {
    border: "hover:border-neon-purple",
    shadow: "hover:shadow-neon-purple",
    text: "text-neon-purple",
    bg: "bg-neon-purple/10",
  },
  cyan: {
    border: "hover:border-neon-cyan",
    shadow: "hover:shadow-neon-cyan",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
  },
  pink: {
    border: "hover:border-neon-pink",
    shadow: "hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]",
    text: "text-neon-pink",
    bg: "bg-neon-pink/10",
  },
  green: {
    border: "hover:border-neon-green",
    shadow: "hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]",
    text: "text-neon-green",
    bg: "bg-neon-green/10",
  },
};

export default function DashboardCard({
  title,
  description,
  icon: Icon,
  href,
  color = "blue",
  delay = 0,
}: DashboardCardProps) {
  const colors = colorMap[color];

  return (
    <Link href={href} className="block h-full">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        transition={{
          delay,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className={cn(
          "relative h-full rounded-xl md:rounded-2xl border-2 border-white/10 bg-black/40 backdrop-blur-xl",
          "p-3 md:p-4 lg:p-6 cursor-pointer overflow-hidden group",
          "transition-all duration-300",
          colors.border,
          colors.shadow
        )}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Animated background gradient */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            colors.bg
          )}
        />

        {/* Animated border glow */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "bg-gradient-to-br from-transparent via-transparent to-transparent"
          )}
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${color === "blue" ? "rgba(0,240,255,0.1)" : color === "purple" ? "rgba(184,41,252,0.1)" : "rgba(0,255,255,0.1)"} 50%, transparent 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Icon */}
          <motion.div
            className={cn(
              "w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3",
              colors.bg,
              "border border-white/10"
            )}
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Icon className={cn("w-4 h-4 md:w-6 md:h-6", colors.text)} />
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <h3
              className={cn(
                "text-sm md:text-lg lg:text-xl font-bold mb-1 md:mb-2",
                "bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",
                "group-hover:from-white group-hover:to-white transition-all duration-300"
              )}
            >
              {title}
            </h3>
            <p className="text-[10px] md:text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
              {description}
            </p>
          </div>

          {/* Hover indicator */}
          <motion.div
            className="mt-2 md:mt-3 flex items-center gap-1 md:gap-2 text-[10px] md:text-xs font-medium"
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
          >
            <span className={colors.text}>→</span>
          </motion.div>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div
            className={cn("absolute top-0 right-0 w-full h-full rounded-bl-full", colors.bg)}
          />
        </div>
      </motion.div>
    </Link>
  );
}
