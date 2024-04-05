import React, { useEffect, useState } from "react";
import image from "../assets/image.json";

function Navbar() {
  const avatarUrl = image["avatar"];
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const projectScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const educationScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillsScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const certificateScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => projectScroll("projectId")}>Projects</a>
              <ul className="p-2">
                <li>
                  <a onClick={() => projectScroll("projectId")}>
                    Vehicle Configurator
                  </a>
                </li>
                <li>
                  <a onClick={() => projectScroll("projectId")}>Feed App</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => educationScroll("educationId")}>Education</a>
            </li>

            <li>
              <a onClick={() => skillsScroll("skillsId")}>Skills</a>
            </li>

            <li>
              <a onClick={() => certificateScroll("certificateId")}>
                Certificate
              </a>
            </li>
          </ul>
        </div>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={avatarUrl} />
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Pranav Gawas</a>
      </div>
      <div
        className="navbar-center hidden lg:flex"
        style={{ marginLeft: "-100px" }}
      >
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Project</summary>
              <ul className="p-2">
                <li>
                  <a onClick={() => projectScroll("projectId")}>
                    Vehicle Configurator
                  </a>
                </li>
                <li>
                  <a onClick={() => projectScroll("projectId")}>Feed App</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a onClick={() => skillsScroll("educationId")}>Education</a>
          </li>

          <li>
            <a onClick={() => skillsScroll("skillsId")}>Skills</a>
          </li>

          <li>
            <a onClick={() => skillsScroll("certificateId")}>Certificate</a>
          </li>
        </ul>
      </div>
      <div className="flex-none ml-auto">
        <label className="flex cursor-pointer gap-2">
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
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
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
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
