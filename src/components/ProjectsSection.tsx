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
    deployed: false,
    title: "AskMe (SOON TO BE DEPLOYED)",
    description:
      "I developed AskMe, a stateless RAG-based chatbot that answers professional and personal questions grounded in custom-provided content. Built with Next.js, Express.js, and Pinecone for efficient vector retrieval, it leverages the Groq API (LLaMA 3 70B) for fast, context-aware response generation.",
    technologies: ["Nextjs", "Node.js", "Pinecone", "LangChain"],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1760066394/askme_nmitvo.png",
    link: "https://github.com/srivastav04/RagBot",
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
