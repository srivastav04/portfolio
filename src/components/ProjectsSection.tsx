
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ThreeDScene from '@/components/3d/ThreeDModel';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with product management, user authentication, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://via.placeholder.com/600x400?text=E-commerce+Platform",
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspace features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    image: "https://via.placeholder.com/600x400?text=Task+Management+App",
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media accounts with data visualization and reporting.",
    technologies: ["Vue.js", "D3.js", "Node.js", "Express"],
    image: "https://via.placeholder.com/600x400?text=Social+Media+Dashboard",
    link: "#",
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
                className={`card-3d overflow-hidden relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                  <div className={`absolute inset-0 bg-portfolio-dark/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${activeProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
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
          
          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-block bg-transparent hover:bg-portfolio-primary/20 text-white font-bold py-3 px-6 rounded-lg border border-portfolio-primary transition-colors duration-300"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
