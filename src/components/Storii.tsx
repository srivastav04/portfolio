"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiCircle, FiExternalLink } from "react-icons/fi";

const updates = [
  {
    title: "Bloogs (v1)",
    techStack: ["Node.js", "React", "Tailwind", "Cloudinary"],
    status: "inactive",
    link: null,
    description: `Bloogs is the very first full-stack website I built and successfully deployed, marking a major milestone in my development journey. It was a hands-on project where I learned how to bring together different technologies and tools to create a complete, functional application. While it wasn’t perfect—as expected from a first project—it gave me invaluable experience in working with both frontend and backend technologies, integrating third-party services, and handling deployment. The tech stack for Bloogs included Node.js for the backend, React.js for the frontend, and plain JavaScript for interactivity. For styling, I used Tailwind CSS and DaisyUI, which allowed me to quickly create a clean and modern interface with minimal effort. To manage authentication, I integrated Clerk, which simplified user sign-in and sign-up flows. For media handling, I implemented Cloudinary, enabling users to upload and manage images directly in their posts. Finally, I deployed the project on Vercel, making it publicly accessible and teaching me how to handle deployment pipelines.`,
    keyFeatures: [
      "User Authentication (Sign In & Sign Up) via Clerk",
      "Create / Update / Delete Posts (CRUD)",
      "Image uploads using Cloudinary",
      "Simple, readable UI built with Tailwind + DaisyUI",
    ],
  },

  {
    title: "Postly (v2)",
    techStack: ["React", "Redis", "Framer Motion", "DaisyUI"],
    status: "inactive",
    link: null,
    description: `Postly is the enhanced and modernized version of my first full-stack project, Bloogs. While Bloogs helped me understand the fundamentals of building and deploying a web application, Postly took those foundations further by incorporating advanced features, performance improvements, and a smoother user experience. In this version, I integrated Framer Motion to add interactive animations and transitions, making the interface more engaging and dynamic. I also explored important backend concepts such as caching with Redis, which significantly improved data-fetching speed and reduced server load. Feature-wise, I expanded the platform by introducing a commenting system, search functionality, user profiles, and pagination for efficient browsing. Together, these improvements made Postly feel like a fully functional social platform, moving beyond a basic blogging site.`,
    keyFeatures: [
      "Animated UI and micro‑interactions with Framer Motion",
      "Server‑side caching using Redis",
      "Comments system to boost engagement",
      "Search and pagination (infinite scroll) for large feeds",
    ],
  },

  {
    title: "Storii (v3)",
    techStack: ["Next.js", "NestJS", "Prisma", "TypeScript", "ImageKit"],
    status: "active",
    link: "https://storii-lac.vercel.app",
    description: `Storii represents the third and most advanced iteration of my very first full-stack project, Bloogs. After experimenting with Bloogs (basic CRUD blogging) and Postly (improved performance, caching, and interactivity), I wanted to challenge myself with a modern, production-grade tech stack and add features that make the platform more powerful, scalable, and user-friendly. For Storii, I transitioned from my earlier Node.js + React setup into a new stack using Next.js (frontend), NestJS (backend), Prisma (ORM), and TypeScript for type safety and maintainability. Authentication and user management were handled with Clerk, while media handling shifted to ImageKit.io, enabling seamless image and video uploads with optimized delivery. This version is not just an upgrade but a complete redesign of the platform. I introduced user profiles with customization (set and edit profile), video uploads in addition to images, improved search functionality, and admin features for managing users and content. These enhancements turned Storii into a more complete and polished social/content-sharing platform, much closer to a real-world application.`,
    keyFeatures: [
      "Modern fullstack with Next.js (frontend) and NestJS (backend)",
      "Profile management: set and edit profile details",
      "Video uploads and optimized media delivery via ImageKit",
      "Advanced search and admin moderation features",
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

export default function StoriiUpdates() {
  return (
    <section className="min-h-screen flex flex-col items-start justify-center px-6 py-20">
      <h2 className="section-title text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
        Storii — Project Evolution
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
