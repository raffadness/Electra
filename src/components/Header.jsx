import { useState, useEffect } from "react";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollToSection } = useScrollToTop();

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "heritage", label: "Heritage" },
    { id: "art-of-making", label: "Art of Making" },
    { id: "collection", label: "Collection" },
    { id: "personalization", label: "Personalization" },
    { id: "owners-circle", label: "Owners Circle" },
    { id: "sustainability", label: "Sustainability" },
    { id: "private-inquiry", label: "Private Inquiry" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <nav className="hidden md:flex fixed top-0 left-6 h-screen z-50 items-center justify-center">
        <div className="flex flex-col items-center gap-4 py-8 relative">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-1 cursor-pointer rounded-xl transition-all duration-300 relative hover:scale-110 ${
                activeSection === item.id ? "scale-110" : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              <div className="flex flex-col items-center gap-1 relative">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#ffee32] scale-125"
                      : "bg-[#ffee32]/40 hover:bg-[#ffee32]/60"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation - Center Bottom */}
      <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-[#202020]/80 backdrop-blur-sm px-4 py-3 rounded-full border border-[#ffee32]/20">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer transition-all duration-300 relative hover:scale-110 ${
                activeSection === item.id ? "scale-110" : ""
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#ffee32]"
                    : "bg-[#ffee32]/40 hover:bg-[#ffee32]/60"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
