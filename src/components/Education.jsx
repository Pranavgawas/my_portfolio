import React from "react";

function Education() {
  const handleSSC = () => {
    window.open(
      "https://drive.google.com/file/d/15tLxsuEP7iLYpplfIJ23ek4UZyLEBZOY/view",
      "_blank"
    );
  };

  const handleHSC = () => {
    window.open(
      "https://drive.google.com/file/d/15tYoysi-PbRoaUBWa3a8qaQyGP2xowe4/view",
      "_blank"
    );
  };

  const handleBE = () => {
    window.open(
      "https://drive.google.com/file/d/167HtW4NLlNU7zfnW2mXt5lOmv6JSGt78/view",
      "_blank"
    );
  };

    const handleCDAC = () => {
    window.open(
      "https://drive.google.com/file/d/1ANIcv-Imh9mUH-P-gaGAohzxCsaBspN6/view",
      "_blank"
    );
  };

  return (
    <div id="educationId">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2015</time>
            <div className="text-lg font-black link link-hover" onClick={handleSSC}>SSC (10th)</div>
            <ul>• Percentage : 86.40</ul>
            <ul>• Passed with Distinction</ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2017</time>
            <div className="text-lg font-black link link-hover" onClick={handleHSC}>HSC (Science) (12th)</div>
            <ul>• Percentage : 60.76</ul>
            <ul>• Passed with First Division</ul>
            <ul>• Specialised in Physics, Chemistry, Biology and Maths</ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-black link link-hover" onClick={handleBE}>
              Bachelor of Engineering (Mechanical)
            </div>
            <ul>• Percentage : 67.02</ul>
            <ul>
              • Graduated with First Division and demonstrated strong teamwork
              skills by collaborating on the creation of a project titled
              ”Pneumatic Sheet Metal Cutting Machine
            </ul>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black link link-hover" onClick={handleCDAC}>
              Centre for Development of Advanced Computing (C-DAC)
            </div>
            <ul>• Percentage : 58.13</ul>
            <ul>
              • Experienced in learning a diverse range of programming
              languages, frameworks, and software development methodologies.
            </ul>
            <ul>
              • Collaborated effectively as part of a team to create the
              ”Vehicle Configurator” project.
            </ul>
            <ul>
              • Proficient in Java, Jakarta EE, Dotnet (C#), React.js,
              JavaScript, Node.js, HTML/CSS, Docker, GitHub, and Spring Boot
            </ul>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Education;
