
import { useEffect, useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import AdditionalSkillsSection from '@/components/AdditionalSkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import { ChevronUp } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sections = useRef<HTMLDivElement[]>([]);

  // Handle smooth scrolling and section animations
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Animate sections when they come into view
      sections.current.forEach((section) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        
        if (isInView) {
          section.classList.add('visible');
        }
      });
    };

    // Initialize sections ref
    sections.current = Array.from(document.querySelectorAll('.smooth-scroll-section'));

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-portfolio-dark text-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AdditionalSkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Back to top button */}
      <button 
        className={`fixed bottom-8 right-8 bg-portfolio-primary p-3 rounded-full shadow-lg transition-opacity z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={scrollToTop}
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
