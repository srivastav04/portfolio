import { useEffect, useRef } from "react";
import ThreeDScene from "@/components/3d/ThreeDModel";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="section relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-dark via-portfolio-dark/90 to-portfolio-dark z-10" />
        <div className="h-full w-full">
          <ThreeDScene modelType="combined" />
        </div>
      </div>

      <div
        className="container mx-auto px-4 z-10 flex flex-col items-center justify-center"
        ref={ref}
      >
        <div
          className={`text-center transform transition-all duration-1000 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Srivastav Kancharla</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View My Work
            </button>

            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: "smooth",
                  });
                }
              }}
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg border border-white/30 transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;
