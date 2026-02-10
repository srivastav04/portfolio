"use client";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCircle,
  FiExternalLink,
  FiArrowLeft,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const updates = [
  {
    title: "Backend Architecture",
    techStack: ["Node.js", "Redis", "PostgreSQL", "Nginx", "Docker"],
    status: "inactive",
    link: "https://github.com/srivastav04/exam-portal",
    description: `
I recently built a Dockerized backend architecture designed to efficiently handle high levels of concurrent traffic. The system uses multiple Node.js containers, Redis (Docker) for caching and performance optimization, PostgreSQL (Docker) with a capped pool of 5 connections per Node.js container, and Nginx (Docker) as a reverse proxy and load balancer. The architecture emphasizes scalability, efficient resource utilization, and robust concurrency handling: Redis reduces database load while controlled PostgreSQL connection pooling preserves stability under heavy traffic. Load-tested with autocannon (-c 150 -d 30), the stack processed ~42,000 requests smoothly with no failures or performance degradation. This project strengthened my skills in containerized backend design and building resilient, production-ready systems capable of handling real-world traffic.    `,
    keyFeatures: [
      "Fully Dockerized multi-container backend for consistent, portable deployments.",
      "Multiple Node.js containers enabling horizontal scaling and isolation of work.",
      "Redis caching to reduce database load and improve request latency.",
      "PostgreSQL with 5 DB connections per Node.js container to control pooling and prevent overload.",
      "Nginx as reverse proxy and load balancer to route traffic and improve resilience.",
      "Proven under load: autocannon (-c 150 -d 30) ran ~42,000 requests with no failures.",
      "Architecture focused on efficient resource use, concurrency handling, and operational stability.",
    ],
  },
];

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

export default function Backend() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex flex-col items-start justify-center lg:px-6 px-2 py-20">
      <motion.button
        whileHover={{ x: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-300 hover:text-indigo-300 transition-colors duration-200 font-medium"
      >
        <FiArrowLeft className="w-5 h-5 " />
        Back
      </motion.button>

      <h2 className="section-title text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
        Backend Architecture
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
            className="my-8 relative bg-gradient-to-br from-gray-900/70 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 lg:p-8 shadow-md transform transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 lg:pr-4">
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
