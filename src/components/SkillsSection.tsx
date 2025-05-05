import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", percentage: 90 },
  { name: "React", percentage: 85 },
  { name: "Node.js", percentage: 80 },
  { name: "Python", percentage: 75 },
  { name: "System Design", percentage: 35 },
  { name: "SQL", percentage: 50 },
];

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="skills" className="section bg-portfolio-dark relative py-20">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="smooth-scroll-section" ref={ref}>
          <h2 className="section-title gradient-text">My Skills</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div
              className={`transition-all duration-700 delay-100 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg mb-6">
                I've developed a diverse skill set over the years, enabling me
                to focusing on both frontend and backend technologies. My
                expertise lies in creating responsive, user-friendly interfaces
                and robust, scalable backend systems.
              </p>
              <p className="text-lg">
                I continuously strive to expand my knowledge and stay up-to-date
                with the latest industry trends and technologies.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-700 ${
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${100 + index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-portfolio-primary">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-portfolio-primary to-portfolio-light"
                      style={
                        {
                          width: inView ? `${skill.percentage}%` : "0%",
                          "--progress-width": `${skill.percentage}%`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
