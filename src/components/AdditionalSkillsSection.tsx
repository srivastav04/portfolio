"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiCloudinary,
  SiRedis,
  SiExpress,
  SiTailwindcss,
  SiGithub,
  SiLangchain,
  SiDocker,
  SiReactquery,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiTypescript,
  SiClerk,
  SiKubernetes,
} from "react-icons/si";
import { GiPineTree } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";

const techSkills = [
  {
    name: "MongoDB",
    isNew: false,
    Icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Cloudinary",
    isNew: false,
    Icon: SiCloudinary,
    color: "#3448C5",
  },
  {
    name: "Node.js",
    isNew: false,
    Icon: FaNodeJs,
    color: "#5FA04E",
  },
  {
    name: "Redis",
    isNew: false,
    Icon: SiRedis,
    color: "#FF4438",
  },
  {
    name: "Express",
    isNew: false,
    Icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    isNew: false,
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "GitHub",
    isNew: false,
    Icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "React Query",
    isNew: false,
    Icon: SiReactquery,
    color: "#FF0000",
  },
  {
    name: "Clerk",
    isNew: false,
    Icon: SiClerk,
    color: "#6C47FF",
  },
  {
    name: "Docker",
    isNew: true,
    Icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Langchain",
    isNew: true,
    Icon: SiLangchain,
    color: "#FFFFFF",
  },
  {
    name: "Next.js",
    isNew: false,
    Icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "NestJS",
    isNew: false,
    Icon: SiNestjs,
    color: "#E0234E",
  },
  {
    name: "Prisma",
    isNew: false,
    Icon: SiPrisma,
    color: "#0EA5A0",
  },
  {
    name: "TypeScript",
    isNew: false,
    Icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Kubetnates",
    isNew: true,
    Icon: SiKubernetes,
    color: "#3178C6",
  },
  {
    name: "Pinecone",
    isNew: true,
    Icon: GiPineTree,
    color: "#3178C6",
  },
];

export default function AdditionalSkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: false });

  return (
    <section id="additional-skills" className="py-20 bg-portfolio-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="sm:pt-8">
          <h2 className="section-title gradient-text text-3xl sm:text-4xl font-extrabold">
            Tech Stack
          </h2>

          <p className="mt-3 text-gray-300 max-w-2xl">
            A curated set of libraries, services and platforms I use across my
            projects. Hover or tap a card to reveal more — colors match each
            tool's brand for quick recognition.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {techSkills.map((skill, idx) => {
              const Icon = skill.Icon as React.ElementType;

              return (
                <motion.button
                  key={skill.name}
                  aria-label={skill.name}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 180, damping: 14 }}
                  className={`relative group flex flex-col items-center gap-3 text-center bg-portfolio-dark/50 rounded-lg p-4 sm:p-6 border border-portfolio-primary/20 hover:border-portfolio-primary/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-portfolio-primary/40 transition-transform duration-200`}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}22 0%, ${skill.color}11 100%)`,
                      border: `1px solid ${skill.color}33`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: skill.color }} />
                  </div>

                  <div className="text-sm font-medium text-gray-100">
                    {skill.name}
                  </div>

                  {skill.isNew && (
                    <span className="absolute top-3 right-3 bg-indigo-600 text-xs text-white px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}

                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-gray-300">
                    {/* Optional: short note or brand color shown on hover */}
                    <div className="flex items-center gap-2 justify-center">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: skill.color }}
                      />
                      <span>{skill.color}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
