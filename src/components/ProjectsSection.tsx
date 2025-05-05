import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ThreeDScene from "@/components/3d/ThreeDModel";

const projects = [
  {
    id: 1,
    title: "Postly",
    description:
      "Postly is a full-stack social media platform where users can share posts, like content, and comment in real time.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "Cloudinary",
      "React Query",
      "Clerk",
      "Zustand",
    ],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1746369695/IMG_5651_kgrwyl.jpg",
    link: "https://postly-dun.vercel.app/",
  },
  {
    id: 2,
    title: "TypeWise",
    description:
      "TypeWise is a visually engaging typing practice website for desktop users. It features a full MERN stack- React,Node.js,Express and MongoDB along with React Query.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "React Query",
      "Zustand",
    ],
    image:
      "https://res.cloudinary.com/dzt95xw2d/image/upload/v1746192872/posts/1746192871190_IMG_5637.jpg",
    link: "https://type-wise.vercel.app/",
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
                <div className="relative overflow-hidden rounded-lg h-48 mb-4">
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-portfolio-primary hover:bg-portfolio-secondary text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      View Project
                    </a>
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
