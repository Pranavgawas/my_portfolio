import React from "react";
import image from "../assets/image.json";

function ProgrammingSkills() {
  const javaURL = image["java"];
  const dotnetURL = image["dotnet"];
  const javascriptURL = image["javascript"];
  const reactURL = image["react"];
  const mysqlURL = image["mysql"];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={javaURL} alt="Java" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Java</h2>
          <p>Java, Jakarta EE, Spring Boot, JPA, Hibernet etc.</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={dotnetURL} alt=".NET" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">.NET</h2>
          <p>NET (C#), Blazor, Entity Core, ADO.NET, ASP.NET MVC, LINQ.</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={javascriptURL} alt="JavaScript" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">JavaScript</h2>
          <p>JavaScript, React, jQuery, Node.js.</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={reactURL} alt="React" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">React</h2>
          <p>React, Bootstrap, React Bootstrap, HTML, CSS, Tailwind CSS.</p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={mysqlURL} alt="MySQL" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">MySQL</h2>
          <p>MySQL.</p>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingSkills;
