import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);

      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < 300 && sectionBottom > 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll and handle escape key
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // close menu first for better UX, then scroll
      setIsMenuOpen(false);
      // small timeout to ensure menu closed (optional)
      setTimeout(() => {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }, 120);
    }
  };

  const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "additional-skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`transition-all duration-300 py-4 px-6 ${
        isScrolled ? "sticky-nav" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold gradient-text">
          Srivastav Kancharla
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`${
                activeSection === link.id
                  ? "text-portfolio-primary font-bold"
                  : "text-gray-300 hover:text-white"
              } transition-colors`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((s) => !s)}
          aria-label="Open menu"
        >
          {isMenuOpen ? (
            // close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // menu icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Side-drawer + overlay (mobile) */}
      <div
        // wrapper is always in DOM on mobile but non-interactive when closed
        className={`md:hidden fixed inset-0 z-50 pointer-events-${
          isMenuOpen ? "auto" : "none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* side panel */}
        <aside
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-portfolio-dark/95 backdrop-blur-sm p-6 transform transition-transform duration-300 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="text-lg font-semibold">Menu</div>
            <button
              className="text-white hover:text-portfolio-primary"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-lg text-left bg-black p-2 ${
                  activeSection === link.id
                    ? "text-portfolio-primary font-bold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </nav>
  );
};

export default Navigation;
