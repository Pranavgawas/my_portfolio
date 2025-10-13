import { Code2, Terminal, Sparkles } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

function Hero() {
  return (
    <section id="hero" className="hero min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
      {/* Animated background elements - optimized for performance */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="hero-content text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl xl:max-w-5xl">
          {/* Icon decorations */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8" role="presentation" aria-hidden="true">
            <div className="p-3 sm:p-4 bg-primary/20 rounded-2xl backdrop-blur-sm animate-bounce motion-reduce:animate-none" style={{animationDelay: '0s', animationDuration: '3s'}}>
              <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" aria-hidden="true" />
            </div>
            <div className="p-3 sm:p-4 bg-secondary/20 rounded-2xl backdrop-blur-sm animate-bounce motion-reduce:animate-none" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
              <Terminal className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" aria-hidden="true" />
            </div>
            <div className="p-3 sm:p-4 bg-accent/20 rounded-2xl backdrop-blur-sm animate-bounce motion-reduce:animate-none" style={{animationDelay: '1s', animationDuration: '3s'}}>
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-accent" aria-hidden="true" />
            </div>
          </div>

          <h1 className="mb-5 sm:mb-6 lg:mb-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Hello, I'm Pranav Gawas
          </h1>
          
          <h2 className="mb-4 sm:mb-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-base-content">
            Full-Stack Developer
          </h2>
          
          <p className="mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed text-base-content/80 max-w-3xl mx-auto">
            I build scalable web applications with modern technologies. 
            Specialized in <span className="font-semibold text-primary">Java</span>, <span className="font-semibold text-secondary">Spring Boot</span>, <span className="font-semibold text-accent">.NET</span>, and <span className="font-semibold text-primary">React</span>. 
            CDAC certified with expertise in full-stack development, microservices architecture, and cloud technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="btn btn-lg min-h-[48px] sm:min-h-[52px] w-full sm:w-auto px-6 sm:px-8 lg:px-10 text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white border-0" 
              onClick={() => scrollToSection("projectId")}
              aria-label="View my projects"
            >
              View My Work
            </button>
            <button 
              className="btn btn-lg min-h-[48px] sm:min-h-[52px] w-full sm:w-auto px-6 sm:px-8 lg:px-10 text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 border-2 border-indigo-500/50 hover:border-indigo-500 hover:bg-indigo-500/10 backdrop-blur-sm" 
              onClick={() => scrollToSection("contactId")}
              aria-label="Contact me"
            >
              Let's Connect
            </button>
          </div>

          {/* Tech stack badges */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Java', 'Spring Boot', '.NET', 'React', 'Node.js', 'MySQL', 'Docker'].map((tech, index) => (
              <span 
                key={index}
                className="badge badge-lg badge-outline hover:badge-primary transition-all duration-200 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium cursor-default"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;