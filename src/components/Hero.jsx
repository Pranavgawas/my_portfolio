import image from '../assets/image.json';

function Hero() {
  const heroURL = image["hero"];
  
  const projectScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${heroURL})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content px-4 sm:px-6 lg:px-8">
        <div className="max-w-xs sm:max-w-md lg:max-w-2xl xl:max-w-4xl">
          <h1 className="mb-5 sm:mb-6 lg:mb-8 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Hello there, welcome to my Portfolio Website!
          </h1>
          <p className="mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-content/90">
            "I'm Pranav Gawas, a full-stack developer. I completed my CDAC, where I delved into various technologies such as Java, Jakarta EE, Spring Boot, .NET (C#), LINQ, MySQL, SQL Server, JavaScript, React, jQuery, Node.js, HTML/CSS, C, C++, etc. Besides mastering these, I'm continuously exploring new technologies to enhance my skills. I've also applied these skills to create some exciting projects, which you can explore below. Thank you for visiting!"
          </p>
          <button 
            className="btn btn-primary btn-lg min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 lg:px-10 text-base sm:text-lg font-semibold hover:scale-105 transition-transform duration-200" 
            onClick={() => projectScroll("projectId")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;