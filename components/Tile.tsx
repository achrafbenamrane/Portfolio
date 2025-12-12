"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TileProps {
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  href: string;
  shape: "circle" | "square" | "rectangle";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "cyan" | "purple" | "pink" | "orange" | "green";
  delay?: number;
}

const colorMap = {
  blue: {
    gradient: "from-neon-blue/20 to-neon-blue/5",
    glow: "hover:shadow-glow-blue",
    text: "text-neon-blue",
    icon: "text-neon-blue",
  },
  cyan: {
    gradient: "from-neon-cyan/20 to-neon-cyan/5",
    glow: "hover:shadow-glow-cyan",
    text: "text-neon-cyan",
    icon: "text-neon-cyan",
  },
  purple: {
    gradient: "from-neon-purple/20 to-neon-purple/5",
    glow: "hover:shadow-glow-purple",
    text: "text-neon-purple",
    icon: "text-neon-purple",
  },
  pink: {
    gradient: "from-neon-pink/20 to-neon-pink/5",
    glow: "hover:shadow-[0_0_20px_rgba(255,45,85,0.4)]",
    text: "text-neon-pink",
    icon: "text-neon-pink",
  },
  orange: {
    gradient: "from-neon-orange/20 to-neon-orange/5",
    glow: "hover:shadow-[0_0_20px_rgba(255,149,0,0.4)]",
    text: "text-neon-orange",
    icon: "text-neon-orange",
  },
  green: {
    gradient: "from-neon-green/20 to-neon-green/5",
    glow: "hover:shadow-[0_0_20px_rgba(52,199,89,0.4)]",
    text: "text-neon-green",
    icon: "text-neon-green",
  },
};

const shapeStyles = {
  circle: "rounded-full aspect-square",
  square: "rounded-3xl aspect-square",
  rectangle: "rounded-3xl",
};

export default function Tile({
  title,
  subtitle,
  icon: Icon,
  href,
  shape,
  size = "md",
  color = "blue",
  delay = 0,
}: TileProps) {
  const colors = colorMap[color];

  return (
    <Link href={href} className="block h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          delay,
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.05,
          rotateY: shape === "circle" ? 5 : 0,
          rotateX: shape === "circle" ? 5 : 0,
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.97,
          transition: { duration: 0.1 },
        }}
        className={cn(
          "relative h-full overflow-hidden cursor-pointer group",
          "backdrop-blur-xl bg-white/5 border border-white/10",
          "shadow-ios transition-all duration-300",
          shapeStyles[shape],
          colors.glow,
          "hover:border-white/20 hover:bg-white/10"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Background gradient */}
        <div
          className={cn(
            "absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300",
            "bg-gradient-to-br",
            colors.gradient
          )}
        />

        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center p-4 md:p-6">
          {/* Icon */}
          <motion.div
            className={cn(
              "mb-3 md:mb-4",
              shape === "circle" ? "mb-2" : ""
            )}
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Icon
              className={cn(
                colors.icon,
                size === "sm" ? "w-6 h-6 md:w-8 md:h-8" : "",
                size === "md" ? "w-8 h-8 md:w-10 md:h-10" : "",
                size === "lg" ? "w-10 h-10 md:w-12 md:h-12" : ""
              )}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Text */}
          <div className="text-center">
            <h3
              className={cn(
                "font-semibold text-white mb-1",
                shape === "circle" ? "text-xs md:text-sm" : "text-sm md:text-base lg:text-lg"
              )}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className={cn(
                  "text-gray-400",
                  shape === "circle" ? "text-[10px]" : "text-xs md:text-sm"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Hover indicator for non-circle shapes */}
          {shape !== "circle" && (
            <motion.div
              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100"
              initial={false}
            >
              <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", `border-${color}`)}>
                <span className={colors.text}>→</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Inner shadow effect */}
        <div className="absolute inset-0 rounded-[inherit] shadow-inner-soft pointer-events-none" />
      </motion.div>
    </Link>
  );
}
