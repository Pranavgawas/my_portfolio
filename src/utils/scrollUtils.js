/**
 * Unified scroll utility for consistent navigation behavior
 * Handles smooth scrolling with navbar offset
 */

// Scroll to element with smooth behavior and navbar offset
export const scrollToSection = (id, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// Get all section IDs for navigation
export const getSectionIds = () => {
  return ['hero', 'projectId', 'educationId', 'skillsId', 'certificateId', 'contactId'];
};

// Check which section is currently in view
export const getCurrentSection = () => {
  const sections = getSectionIds();
  const scrollPosition = window.scrollY + 100; // Offset for navbar

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPosition) {
      return sections[i];
    }
  }
  return sections[0];
};

// Scroll to top function
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Check if user has scrolled past hero
export const hasScrolledPastHero = () => {
  return window.scrollY > 100;
};
