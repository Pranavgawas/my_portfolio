import React, { useEffect, useState } from "react";
import image from "../assets/image.json";
import { scrollToSection, getCurrentSection } from "../utils/scrollUtils";

function Navbar() {
  const avatarUrl = image["avatar"];
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // Track active section on scroll
  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      // Debounce scroll events for better performance
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        const currentSection = getCurrentSection();
        setActiveSection(currentSection);
      }, 50); // 50ms debounce
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu after click
  };

  const isActive = (sectionId) => activeSection === sectionId;

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-lg bg-base-100/95" role="navigation" aria-label="Main navigation">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn btn-primary z-[60]">
        Skip to main content
      </a>
      
      <div className="navbar-start">
        <div className="dropdown">
          <div className="flex-none">
            <button 
              className="btn btn-square btn-ghost hover:bg-primary/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-200"
          >
            <li>
              <a 
                onClick={() => handleNavClick("projectId")} 
                className={`hover:bg-primary/10 ${isActive("projectId") ? "bg-primary/20 font-semibold" : ""}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick("educationId")} 
                className={`hover:bg-primary/10 ${isActive("educationId") ? "bg-primary/20 font-semibold" : ""}`}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick("skillsId")} 
                className={`hover:bg-primary/10 ${isActive("skillsId") ? "bg-primary/20 font-semibold" : ""}`}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick("certificateId")} 
                className={`hover:bg-primary/10 ${isActive("certificateId") ? "bg-primary/20 font-semibold" : ""}`}
              >
                Certifications
              </a>
            </li>
            <li>
              <a 
                onClick={() => handleNavClick("contactId")} 
                className={`hover:bg-primary/10 ${isActive("contactId") ? "bg-primary/20 font-semibold" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar ring-2 ring-primary/20 ring-offset-2 ring-offset-base-100 hover:ring-primary/40 transition-all"
          aria-label="Pranav Gawas profile picture"
        >
          <div className="w-10 rounded-full">
            <img alt="Pranav Gawas Avatar" src={avatarUrl} />
          </div>
        </div>
        <button 
          className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-accent transition-all"
          onClick={() => handleNavClick("hero")}
          aria-label="Go to homepage"
        >
          Pranav Gawas
        </button>
      </div>
      <div
        className="navbar-center hidden lg:flex"
        style={{ marginLeft: "-100px" }}
      >
        <ul className="menu menu-horizontal px-1" role="menubar">
          <li role="none">
            <a 
              onClick={() => handleNavClick("projectId")} 
              className={`hover:bg-primary/10 ${isActive("projectId") ? "bg-primary/20 font-semibold" : ""}`}
              role="menuitem"
            >
              Projects
            </a>
          </li>
          <li role="none">
            <a 
              onClick={() => handleNavClick("educationId")} 
              className={`hover:bg-primary/10 ${isActive("educationId") ? "bg-primary/20 font-semibold" : ""}`}
              role="menuitem"
            >
              Education
            </a>
          </li>
          <li role="none">
            <a 
              onClick={() => handleNavClick("skillsId")} 
              className={`hover:bg-primary/10 ${isActive("skillsId") ? "bg-primary/20 font-semibold" : ""}`}
              role="menuitem"
            >
              Skills
            </a>
          </li>
          <li role="none">
            <a 
              onClick={() => handleNavClick("certificateId")} 
              className={`hover:bg-primary/10 ${isActive("certificateId") ? "bg-primary/20 font-semibold" : ""}`}
              role="menuitem"
            >
              Certifications
            </a>
          </li>
          <li role="none">
            <a 
              onClick={() => handleNavClick("contactId")} 
              className={`hover:bg-primary/10 ${isActive("contactId") ? "bg-primary/20 font-semibold" : ""}`}
              role="menuitem"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-none ml-auto">
        <label className="flex cursor-pointer gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-warning"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller toggle-primary"
            onChange={handleToggle}
            checked={theme === "dark" ? true : false}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-info"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
