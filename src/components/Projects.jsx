import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Projects.css";

const projects = [
  {
    title: "Ekart – E-commerce Platform",
    problem: "Build a scalable online store with cart, payment, and admin panel.",
    approach:
      "Designed REST APIs in Django, integrated frontend with React, implemented secure authentication.",
    techStack: "Django, React, PostgreSQL, JWT",
    results:
      "Fully functional e-commerce site with responsive UI and role-based access.",
  },
  {
    title: "Movie App – React",
    problem: "Create an app to search and display movies dynamically from an API.",
    approach: "Used React hooks and Axios to fetch data from TMDB API.",
    techStack: "React, CSS, TMDB API",
    results: "Fast, responsive movie browser with search and filter.",
  },
  {
    title: "Emalayalee Admin Panel – News Website Management",
    problem:
      "The existing news portal required a backend panel to manage content, ads, user roles, and analytics efficiently.",
    approach:
      "Developed and optimized multiple Django views for CRUD operations on news content, categories, and advertisements. Integrated JWT authentication, implemented pagination utilities (`fetch_paginated_data` & `build_pagination`), and improved database queries for performance. Added features like search, block IP, Google Analytics integration, and streamlined admin workflows.",
    techStack: "Django, MySQL, JavaScript, HTML, CSS, JWT",
    results:
      "Reduced content management time by 40%, improved backend performance, and enhanced admin usability with a clean and functional dashboard.",
  },
];

const ProjectsDetailed = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="section-title" data-aos="fade-down">
        Projects (Detailed)
      </h2>
      <div className="project-details">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={index * 100}
          >
            <h3>{project.title}</h3>
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
    </section>
  );
};

export default ProjectsDetailed;
