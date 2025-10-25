import { useInView } from "react-intersection-observer";
import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPrisma,
  SiMongodb,
} from "react-icons/si";

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
            {/* Left Side - Text */}
            <div
              className={`transition-all duration-700 delay-100 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-lg mb-6">
                Hello I’m Srivastav, a passionate full-stack developer who
                builds modern, production ready web applications with strong
                attention to design, performance, and user experience. I combine
                a frontend-first mindset with robust backend engineering. My day
                to day work centers on JavaScript/TypeScript ecosystems shipping
                fast with React / Next.js on the front end and building solid
                server logic with Node.js, NestJS, and Prisma on the back end.
              </p>
              <p className="text-lg mb-6">
                I enjoy turning product ideas into polished, maintainable code.
                designing intuitive UIs, shaping the API surface, integrating
                authentication and media services, and optimizing data flows so
                apps feel snappy. My approach balances practical engineering
                with a designer’s eye for clarity and usability. Over time I’ve
                leaned into performance improvements (Redis caching), media
                optimization, and developer DX (TypeScript + Prisma), which
                makes large features easier to build and maintain.
              </p>
            </div>

            {/* Right Side - Tech Stack */}
            <div
              className={`transition-all duration-700 delay-300 ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                  <SiNextdotjs className="text-4xl text-white mb-3" />
                  <p className="text-gray-300">Next.js</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                  <SiNestjs className="text-4xl text-red-500 mb-3" />
                  <p className="text-gray-300">NestJS</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                  <SiTypescript className="text-4xl text-blue-500 mb-3" />
                  <p className="text-gray-300">TypeScript</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                  <SiPrisma className="text-4xl text-sky-400 mb-3" />
                  <p className="text-gray-300">Prisma</p>
                </div>
                <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
                  <SiMongodb className="text-4xl text-green-500 mb-3" />
                  <p className="text-gray-300">MongoDB</p>
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
