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
	<div className="hero min-h-screen" style={{backgroundImage: `url(${heroURL}`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there, welcome to my Portfolio Website!</h1>
      <p className="mb-5">I'm Pranav Gawas, a full-stack developer. I recently completed my CDAC, where I delved into various technologies such as Java, .NET, MySQL, and JavaScript. Besides mastering these, I'm continuously exploring new technologies to enhance my skills. I've also applied these skills to create some exciting projects, which you can explore below. Thank you for visiting!</p>
      <button className="btn btn-primary" onClick={() => projectScroll("projectId")}>Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero;