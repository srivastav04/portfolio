
// Utility functions for smooth scrolling and animations

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth',
    });
  }
};

export const animateOnScroll = (element: HTMLElement, threshold = 0.2) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing after animation
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold }
  );

  observer.observe(element);
  
  return () => {
    observer.unobserve(element);
  };
};

export const getScrollProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = scrollTop / (docHeight - winHeight);
  return scrollPercent;
};
