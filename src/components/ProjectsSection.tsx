import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    deployed: true,
    title: "Storii",
    description:
      "Storii is a full-stack social media platform where users can share posts, like content, and comment in real time.",
    technologies: [
      "Nextjs",
      "Nestjs",
      "MongoDB",
      "ImageKit",
      "Prisma",
      "React Query",
      "Clerk",
      "Zustand",
      "Hero UI",
    ],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1755410268/Screenshot_2025-08-17_112756_todxef.png",
    link: "/storii",
  },
  {
    id: 2,
    deployed: true,
    title: "TypeWise",
    description:
      "TypeWise is a visually engaging typing practice website for desktop users. It features a fullstack project built with modern technologies, including Nextjs, Nestjs, MongoDB, Shadcn UI, React Query, and Zustand.",
    technologies: [
      "Nextjs",
      "Nestjs",
      "MongoDB",
      "Shadcn UI",
      "React Query",
      "Zustand",
    ],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1746192872/posts/1746192871190_IMG_5637.jpg",
    link: "/typewise",
  },
  {
    id: 3,
    deployed: true,
    title: "Trndy",

    description:
      "Trndy is a full-stack fashion e-commerce website built using a microservices architecture, featuring separate services for authentication, product management, cart, and orders. It’s designed with React, Tailwind CSS, Node.js, MongoDB, and Docker to explore scalable backend development and service-oriented design.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "Docker",
    ],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1755410460/Screenshot_2025-08-17_113103_q9znym.png",
    link: "/trndy",
  },
  {
    id: 4,
    deployed: true,
    title: "CreateAI",
    description:
      "An AI-powered generator that creates responsive React components with built-in dark/light mode, previews across mobile, tablet, and desktop, uses react-icons for icons and dynamic imports for optimal load time.",
    technologies: ["Vite", "GROQ API", "Tailwind CSS", "FastAPI"],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1761402266/Screenshot_2025-10-25_195347_yxcfkl.png",
    link: "/createai",
  },
  {
    id: 5,
    deployed: false,
    title: "AskMe",
    description:
      "I developed AskMe, a stateless RAG-based chatbot that answers professional and personal questions grounded in custom-provided content. Built with Next.js, Express.js, and Pinecone for efficient vector retrieval, it leverages the Groq API (LLaMA 3 70B) for fast, context-aware response generation.",
    technologies: ["Nextjs", "Node.js", "Pinecone", "LangChain"],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1760066394/askme_nmitvo.png",
    link: "/askme",
  },
  {
    id: 6,
    deployed: false,
    title: "Backend Architecture",
    description:
      "Built a scalable, Dockerized backend using Node.js, Redis, PostgreSQL, and Nginx, optimized for concurrency and performance. Load-tested with Autocannon, handling ~42,000 requests smoothly, strengthening my understanding of resilient, high-performance backend system design.",
    technologies: ["Node.js", "Redis", "PostgreSQL", "Nginx", "Docker"],
    image:
      "data:image/png;base64,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",
    link: "/backend",
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section bg-portfolio-dark relative py-20">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="smooth-scroll-section" ref={ref}>
          <h2 className="section-title gradient-text">My Projects</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`card-3d overflow-hidden relative transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden rounded-lg h-96 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-portfolio-dark/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                      activeProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {project.deployed ? (
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-portfolio-light font-semibold hover:underline"
                      >
                        View Project
                      </Link>
                    ) : (
                      <a
                        target="_blank"
                        href={project.link}
                        rel="noopener noreferrer"
                        className="text-portfolio-light font-semibold hover:underline"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-portfolio-primary/20 text-portfolio-light px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
