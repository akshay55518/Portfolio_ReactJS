import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Projects.css";
import Loading from "./Loading"; // Reusable loading component

const ProjectsDetailed = () => {
  const [projects, setProjects] = useState([]); 
  const [popupMessage, setPopupMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const API_BASE = "https://portfolio-backend-lqmi.onrender.com";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch(`${API_BASE}/api/projects/`)
      .then(res => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  // Popup Component
  const Popup = ({ message, onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close in 3 sec
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

  const handleClick = (e, project) => {
    if (!project.link) {
      e.preventDefault();
      setPopupMessage("🚫 Due to company policy, I am unable to share this code.");
    }
  };

  // Return early while loading (similar to About.jsx)
  if (loading) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            Projects (Detailed)
          </h2>
          <div className="project-details">
            <Loading message="Loading projects..." />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          Projects (Detailed)
        </h2>

        <div className="project-details">
          {projects.length === 0 ? (
            <div className="no-projects glass-effect">
              🚧 No projects available at the moment
            </div>
          ) : (
            projects.map((project, index) => (
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
                <p><strong>Problem:</strong> {project.problem}</p>
                <p><strong>Approach:</strong> {project.approach}</p>
                <p><strong>Tech Stack:</strong> {project.techStack}</p>
                <p><strong>Results:</strong> {project.results}</p>
              </div>
            ))
          )}
        </div>

        {popupMessage && (
          <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
        )}
      </div>
    </section>
  );
};

export default ProjectsDetailed;
