import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="container-welcome">
      <div className='heading'>My Information</div>
      <div id="education" className='sub-heading' >Education</div>

          <div className="card1">
            <div className="card-content">
              <h3>CDAC</h3>
              <p>
                Skills Learned: Java, .NET Framework, Web Technologies, Databases • Grade: 62%
              </p>
              <p>
                  EDUCATION DETAILS:
                  Post Graduate Diploma in Software Development
                  Courses focused on Java, .NET Framework, Web Technologies, Databases
                  During my post graduate diploma in Software Development, I actively pursued courses dedicated 
                  to enhancing my skills in Java, .NET Framework, Web Technologies, and Databases. I consistently 
                  demonstrated a strong commitment to expanding my knowledge in these key areas.
                  Of notable significance, I successfully completed a challenging post graduate diploma project 
                  centered around the development of a vehicle customization portal. Utilizing my expertise in Java 
                  Spring boot and dotnet web API, I led a team in designing and implementing this innovative portal. 
                  This project allowed me to showcase my technical capabilities and effectively apply my knowledge 
                  to deliver a practical and efficient solution.
                  My educational journey has equipped me with a comprehensive understanding of Java, .NET 
                  Framework, Web Technologies, and Databases, enabling me to confidently tackle complex software 
                  development tasks. I am excited to leverage these skills, alongside my passion for continuous 
                  learning, in order to contribute towards the success of your organization.
            </p>
            </div>
          </div>

        <div className="card2">
            <div className="card-content">
              <h3>Bachlor of Engineering</h3>
              <p>
                Mechanical Engineering • Grade: 67.02%
                </p>
                <p>
                  EDUCATION:
                  Secured a Cumulative Grade Point Average (CGPA) of 7.38 out of 10 in mechanical engineering. 
                  During my academic tenure, I actively pursued projects and practical assignments to gain hands-on 
                  experience and deepen my understanding of mechanical systems. One of my notable achievements 
                  was successfully completing an engineering project focused on designing a pneumatic sheet metal 
                  cutting machine.
                  In this project, I demonstrated my expertise in mechanical systems by meticulously designing 
                  and constructing a cutting-edge machine capable of efficiently and accurately cutting sheet 
                  metal. Through extensive research, analysis, and implementation, I ensured the machine's precision, 
                  durability, and user-friendly operation.
                  This project not only enhanced my technical skills but also sharpened my problem-solving abilities 
                  as I encountered and resolved various challenges along the way. It provided me with a comprehensive understanding of mechanical systems and the ability to apply theoretical knowledge to 
                  real-world applications.
                  Overall, my academic journey has been marked by a strong commitment to excellence, as reflected in my impressive CGPA and the successful completion of the engineering project. These 
                  accomplishments serve as a testament to my dedication, perseverance, and aptitude in the field of 
                  mechanical engineering.
                </p>
            </div>
          </div>

      <div id="project" className='sub-heading'>Projects</div>

        <div className="card1">
            <div className="card-content">
              <h3>Vehicle Configurator</h3>
              <p>
                - Developed a B2B portal for a Car Leasing Company using Spring 6, Maven 3, Spring boot 3, REST 
                API, MySQL 8, JPA, JUnit 4, JWT, MicroService, Docker, Web API Core, SQL Server, Entity Core, and 
                React Js
                - Implemented a database-driven website that provides detailed specifications about cars
                - Enabled users to select car models, modify configurable items (interior and exterior), and order 
                customized cars
                - Generated invoices in PDF format based on the configuration and emailed them to the client
                - Utilized multiple technologies including MicroServices and Docker to enhance website performance and scalability.
            </p>
            </div>
          </div>

        <div className="card2">
            <div className="card-content">
              <h3>Pneumatic Sheet Metal Cutting Machine</h3>
              <p>
                - Designed and constructed a pneumatic sheet metal shearing machine capable of effortlessly 
                cutting .5mm to 1mm thick sheets
                - Set up an air compressor, conditioned the air through a manifold and FRL unit, and provided a 
                separate supply for independent operation
                - Implemented a Direction Control Valve to effectively control the movement of a pneumatic 
                double-acting cylinder
                - Connected the cylinder to a shearing blade through a connecting rod, generating ample force to 
                easily cut the sheet metal
                - Successfully demonstrated the machine's functionality by activating the air compressor, precisely 
                controlling the piston movement, and achieving accurate sheet metal cuts.

              </p>
            </div>
          </div>

      <div id="skills" className='sub-heading'>Skills</div>

        <div className="card1">
            <div className="card-content">
              <h4>JAVA</h4>
            </div>
          </div>

        <div className="card2">
            <div className="card-content">
              <h4>JAKARTA</h4>
            </div>
          </div>

        <div className="card1">
            <div className="card-content">
              <h4>DOTNET(C#)</h4>
            </div>
          </div>

        <div className="card2">
            <div className="card-content">
              <h4>REACT</h4>
            </div>
          </div>

        <div className="card1">
            <div className="card-content">
              <h4>JAVASCRIPT</h4>
            </div>
          </div>
 
        <div className="card2">
            <div className="card-content">
              <h4>MYSQL</h4>
            </div>
          </div>

    </div>
  );
}

export default Welcome;
