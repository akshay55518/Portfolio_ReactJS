import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Projects.css";

const projects = [
  {
    link: "https://github.com/akshay55518/GoKart",
    title: "Ekart – E-commerce Platform",
    problem: "Build a scalable online store with cart, payment, and admin panel.",
    approach:
      "Designed REST APIs in Django, integrated frontend with React, implemented secure authentication.",
    techStack: "Django, React, PostgreSQL, JWT",
    results:
      "Fully functional e-commerce site with responsive UI and role-based access.",
  },
  {
    link: "https://github.com/akshay55518/movie_app",
    title: "Movie App – React",
    problem: "Create an app to search and display movies dynamically from an API.",
    approach: "Used React hooks and Axios to fetch data from TMDB API.",
    techStack: "React, CSS, TailwindCSS, TMDB API",
    results: "Fast, responsive movie browser with search and filter.",
  },
  {
    link: "",
    title: "Emalayalee Admin Panel – News Website Management",
    problem:
      "The existing news portal required a backend panel to manage content, ads, user roles, and analytics efficiently.",
    approach:
      "Developed and optimized multiple Django views for CRUD operations on news content, categories, and advertisements. Integrated JWT authentication, implemented pagination utilities, and improved database queries for performance. Added features like search, block IP, Google Analytics integration, and streamlined admin workflows.",
    techStack: "Django Rest, MySQL, JavaScript, JWT",
    results:
      "Reduced content management time by 40%, improved backend performance, and enhanced admin usability with a clean and functional dashboard.",
  },
];

// Modern Popup Component
const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-box glass-effect">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

const ProjectsDetailed = () => {
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleClick = (e, project) => {
    if (!project.link) {
      e.preventDefault();
      setPopupMessage("Due to company policy, I am unable to share this code.");
    }
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title" data-aos="fade-down">
        Projects (Detailed)
      </h2>

      <div className="project-details">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <h3>
              <a
                href={project.link || "#"}
                className="project-link"
                target={project.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={(e) => handleClick(e, project)}
              >
                {project.title}
              </a>
            </h3>
            <p>
              <strong>Problem:</strong> {project.problem}
            </p>
            <p>
              <strong>Approach:</strong> {project.approach}
            </p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <p>
              <strong>Results:</strong> {project.results}
            </p>
          </div>
        ))}
      </div>

      {popupMessage && (
        <Popup
          message={popupMessage}
          onClose={() => setPopupMessage("")}
        />
      )}
    </section>
  );
};

export default ProjectsDetailed;
