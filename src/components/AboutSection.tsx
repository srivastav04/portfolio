
import { useEffect, useRef } from 'react';
import ThreeDScene from '@/components/3d/ThreeDModel';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="about" className="section bg-portfolio-dark relative py-20">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="smooth-scroll-section" ref={ref}>
          <h2 className="section-title gradient-text">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
            <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-lg mb-6">
                Hello! I'm John, a passionate full-stack developer with expertise in creating 
                dynamic and responsive web applications. I specialize in modern JavaScript frameworks 
                like React, along with backend technologies such as Node.js and databases including 
                MongoDB and PostgreSQL.
              </p>
              <p className="text-lg mb-6">
                With a strong background in both design and development, I bring a unique 
                perspective to every project, focusing on creating seamless user experiences 
                that are both beautiful and functional.
              </p>
              <p className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying outdoor activities like hiking and photography.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-primary">4+</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-primary">50+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-primary">15+</h3>
                  <p className="text-gray-300">Happy Clients</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-primary">10+</h3>
                  <p className="text-gray-300">Open Source Contributions</p>
                </div>
              </div>
            </div>
            
            <div className={`h-[400px] transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-lg opacity-40" />
                <div className="h-full w-full">
                  <ThreeDScene modelType="sphere" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
