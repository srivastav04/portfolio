
import { useInView } from 'react-intersection-observer';

const techSkills = [
  { name: "MongoDB", isNew: false, icon: "mongodb.svg" },
  { name: "Express", isNew: false, icon: "express.svg" },
  { name: "Vue.js", isNew: true, icon: "vue.svg" },
  { name: "PostgreSQL", isNew: false, icon: "postgresql.svg" },
  { name: "Redis", isNew: true, icon: "redis.svg" },
  { name: "Docker", isNew: false, icon: "docker.svg" },
  { name: "AWS", isNew: false, icon: "aws.svg" },
  { name: "GraphQL", isNew: false, icon: "graphql.svg" },
  { name: "Tailwind CSS", isNew: false, icon: "tailwind.svg" },
  { name: "Next.js", isNew: false, icon: "nextjs.svg" },
  { name: "Firebase", isNew: true, icon: "firebase.svg" },
  { name: "Figma", isNew: false, icon: "figma.svg" },
];

const AdditionalSkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="additional-skills" className="section bg-portfolio-dark relative py-20">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="smooth-scroll-section" ref={ref}>
          <h2 className="section-title gradient-text">Tech Stack</h2>
          
          <div className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`relative bg-portfolio-dark/50 backdrop-blur-sm border border-portfolio-primary/20 rounded-lg p-6 flex flex-col items-center justify-center hover:border-portfolio-primary/60 transition-all duration-300 transform ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${100 + index * 50}ms` }}
                >
                  <div className="h-16 w-16 flex items-center justify-center mb-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-portfolio-dark">
                      {/* Display first letter of tech name as fallback */}
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <p className="text-center font-medium">{skill.name}</p>
                  {skill.isNew && (
                    <span className="new-tag">NEW</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkillsSection;
