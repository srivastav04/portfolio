"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiCircle, FiExternalLink } from "react-icons/fi";

const updates = [
  {
    title: "TypeWise (v1)",
    techStack: ["Node.js", "React", "Tailwind"],
    status: "inactive",
    link: null,
    description: `TypeWise is a visually engaging, desktop-first typing practice website built as a full MERN application (React, Node.js, Express, MongoDB) with React Query powering client-side data fetching and cache management. The app focuses on accuracy and deliberate practice rather than speed: the first iteration removes the pressure of a countdown timer — there’s no time limit — and instead challenges users to correctly type every single word to complete a passage. That design encourages careful attention to spelling, punctuation, and rhythm, helping users build muscle memory and true accuracy.

The UI is designed for clarity and focus: clean layouts, readable typography, and subtle visual feedback guide the user through each practice session. As users progress, TypeWise tracks their performance and exposes a stats view so they can inspect accuracy, errors, and improvement over time. The site also lets users discover and view other users (profiles/leaderboard-style browsing), making it easy to compare progress, get inspired, or connect with fellow learners. On the backend, Express + MongoDB persist user data, session history, and stats; React Query keeps the frontend snappy and consistent by handling caching, background refetching, and optimistic UI where appropriate.`,
    keyFeatures: [
      "User Authentication (Sign In & Sign Up)",
      "Desktop first, visually engaging interface optimized for typing practice.",
      "Full MERN stack: React frontend, Node/Express backend, MongoDB for persistence.",
      "Browse and view other users to compare progress.",
    ],
  },
  {
    title: "TypeWise (v2)",
    techStack: ["Next.js", "NestJS", "Prisma", "TypeScript", "Shadcn UI"],
    status: "active",
    link: "https://type-wise-2-0.vercel.app/",
    description: `TypeWise v2 is a major rework of the original desktop-first typing practice app, rebuilt as a modern, production-ready platform with a stronger focus on flexibility, performance, and developer ergonomics. I migrated the frontend to Next.js and redesigned the UI using shadcn/ui components for a clean, accessible, and responsive interface. The backend was re-architected with NestJS and Prisma as the ORM, giving the project robust, type-safe server logic and a scalable data model that’s easy to evolve.

The core learning experience continues to emphasize accuracy, but v2 introduces timed practice modes — including both preset time limits and fully customizable durations — so users can train for both precision and speed. Sessions can be run in accuracy-first mode, time-limited mode, or a hybrid that scores based on both speed and correctness. To help learners understand progress at a glance, I added a brand-new Stats page that visualizes historical performance (accuracy trends, error types, time-based scores) and supports deeper self-analysis.`,
    keyFeatures: [
      "Preset time limits and custom time options so users can practice exactly how they want",
      "Combines speed and accuracy in scoring modes to help learners understand progress at a glance",
      "historical charts and breakdowns of WPM and accuracy ",
      "User search and profile pages for easy navigation and self-discovery",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.6, ease: "easeOut" },
  }),
};

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-block  px-3 py-1 rounded-full border border-gray-700/30 bg-gray-800/40 mr-2 mb-2">
      {name}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "active") {
    return (
      <div className="flex items-center gap-2 text-green-300">
        <FiCheckCircle className="w-5 h-5 text-green-400" />
        <span className=" font-medium">Active</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-red-500">
      <FiCircle className="w-4 h-4 text-red-500" />
      <span className="text-sm">Inactive</span>
    </div>
  );
}

export default function TypeWiseUpdates() {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center px-6 py-20">
      <h2 className="section-title text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
        TypeWise — Project Evolution
      </h2>

      <div className=" w-full">
        {updates.map((update, i) => (
          <motion.article
            key={update.title}
            custom={i}
            initial="hidden"
            animate="visible"
            whileHover={{
              translateY: -6,
              boxShadow: "0 20px 40px rgba(2,6,23,0.6)",
              scale: 1.01,
            }}
            className="my-8 relative bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-md transform transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl md:text-2xl font-semibold mb-2 tracking-tight">
                  {update.title}
                </h3>

                <div className="flex flex-wrap items-center mb-4">
                  {update.techStack.map((t) => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-lg mb-6 whitespace-pre-line">
                  {update.description}
                </p>
              </div>

              <div className="ml-4 flex-shrink-0 hidden md:flex items-center">
                <div className="flex flex-col items-end">
                  <StatusBadge status={update.status} />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="mt-6 pt-4 border-t border-gray-800/40">
                <h4 className="text-xl font-semibold text-gray-200 mb-3">
                  Key features
                </h4>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  {update.keyFeatures.map((kf) => (
                    <li key={kf} className="leading-snug">
                      {kf}
                    </li>
                  ))}
                </ul>
              </div>
              {update.link && (
                <div className="flex items-end">
                  <a
                    href={update.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2  px-3 py-1 rounded-md ring-1 ring-white"
                  >
                    Visit
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
