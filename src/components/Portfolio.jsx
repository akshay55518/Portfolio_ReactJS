import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    { id: 1, title: "Ekart", category: "Backend (Django)", description: "E-commerce website with cart, checkout, and payment features.", link: "#" },
    { id: 2, title: "Emalayalee Admin Panel", category: "Backend (Django)", description: "Admin panel for managing news, users, and analytics for Emalayalee platform.", link: "#" },
    { id: 3, title: "Movie App", category: "Frontend (React)", description: "A movie browsing app built with React, fetching live data from an API.", link: "#" },
    { id: 4, title: "Portfolio Website", category: "Frontend (React)", description: "Personal portfolio website showcasing my projects and skills.", link: "#" },
    { id: 5, title: "Student Management App", category: "Backend (Django)", description: "Web app to manage student records, attendance, and grades.", link: "#" },
    { id: 6, title: "Task Management App", category: "Backend (Django)", description: "Collaborative task manager with user roles and progress tracking.", link: "#" },
    { id: 7, title: "To-Do Apps", category: "Backend (Django)", description: "Simple to-do list web apps for personal task tracking.", link: "#" },
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">My Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className="portfolio-card"
              key={project.id}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            >
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p className="category">{project.category}</p>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
