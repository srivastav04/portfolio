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
        title: "Creator Hub",
        techStack: ["n8n", "Docker", "Postgres", "React", "Nodejs"],
        status: "inactive",
        link: "https://github.com/srivastav04/creatorHub",
        description: `
        CreatorHub is a modern full-stack web application designed to enhance how users discover, follow, and interact with their favorite YouTube creators. Instead of relying solely on the traditional YouTube interface, CreatorHub provides a personalized content hub where users can track creators, watch videos, manage playlists, and receive timely notifications when new content is released.

The platform is built using a modern and scalable technology stack including React (v19) and Vite for the frontend, Express.js (v5) for the backend API layer, and PostgreSQL (v16) for reliable data storage. Workflow automation and background tasks such as checking for new videos and triggering notifications are handled by n8n.

The application is designed with performance and usability in mind, featuring a sleek dark-mode-ready interface, responsive layout, and smooth user interactions across desktop and mobile devices.
    `,
        keyFeatures: [
            "Clerk based authentication secure sign‑in with email.",
            "Watch history & liked videos – instant local updates synced to the backend.",
            "n8n driven notifications batch channel polling, priority based checks, and email/webhook alerts for new videos",
            "If the RSS feed fails or does not return valid data, the system falls back to the YouTube Data API.This hybrid strategy ensures high reliability while minimizing API usage."
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

export default function CreatorHub() {
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
                Creator Hub
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
