import { useInView } from "react-intersection-observer";

// const experienceData = [
//   {
//     title: "Senior Frontend Developer",
//     company: "Tech Innovations Inc.",
//     period: "Jan 2022 - Present",
//     description: "Leading the frontend development team in building responsive web applications. Implemented component libraries and improved performance by 40%.",
//   },
//   {
//     title: "Full Stack Developer",
//     company: "Digital Solutions Co.",
//     period: "Mar 2019 - Dec 2021",
//     description: "Developed and maintained full-stack applications using React and Node.js. Integrated payment gateways and improved database efficiency.",
//   },
//   {
//     title: "Junior Web Developer",
//     company: "WebCraft Studios",
//     period: "Jun 2017 - Feb 2019",
//     description: "Created responsive websites and implemented UI designs. Collaborated with designers to ensure pixel-perfect implementations.",
//   }
// ];

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Sreyas Institute of Engineering and Technology",
    period: "2022 - present",
    description:
      "Full Stack Developer specialized in modern Web Technologies.Currently pursuing a B.Tech degree in Computer Science from Sreyas Institute of Engineering and Technology.",
  },
  // {
  //   degree: "B.S. in Software Engineering",
  //   institution: "State University",
  //   period: "2011 - 2015",
  //   description:
  //     "Focused on programming fundamentals and software development methodologies.",
  // },
];

const ExperienceSection = () => {
  const { ref: expRef, inView: expInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: eduRef, inView: eduInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      id="experience"
      className="section bg-portfolio-dark relative py-20"
    >
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="smooth-scroll-section mb-16" ref={expRef}>
          <h2 className="section-title gradient-text">Experience</h2>
          
          <div className="mt-12 relative">
          
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-portfolio-primary/40" />
            
            {experienceData.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center mb-12 transition-all duration-700 ${expInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="lg:w-1/2 lg:pr-12 lg:text-right mb-6 lg:mb-0">
                  {index % 2 === 0 ? (
                    <>
                      <h3 className="text-xl font-bold text-portfolio-primary">{item.title}</h3>
                      <p className="text-lg font-medium">{item.company}</p>
                      <p className="text-gray-400">{item.period}</p>
                    </>
                  ) : (
                    <div className="hidden lg:block">
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  )}
                </div>
                
  
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-portfolio-dark bg-portfolio-primary z-10" />
                
                <div className="lg:w-1/2 lg:pl-12">
                  {index % 2 === 0 ? (
                    <p className="text-gray-300">{item.description}</p>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-portfolio-primary">{item.title}</h3>
                      <p className="text-lg font-medium">{item.company}</p>
                      <p className="text-gray-400">{item.period}</p>
                      <div className="lg:hidden mt-3">
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="smooth-scroll-section" ref={eduRef}>
          <h2 className="section-title gradient-text">Education</h2>

          <div className="mt-12 grid gap-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`bg-portfolio-dark/50 backdrop-blur-sm border border-portfolio-primary/20 rounded-lg p-6 transition-all duration-700 ${
                  eduInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-portfolio-primary mb-1">
                  {item.degree}
                </h3>
                <div className="flex justify-between mb-4">
                  <p className="text-lg font-medium">{item.institution}</p>
                  <p className="text-gray-400">{item.period}</p>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
