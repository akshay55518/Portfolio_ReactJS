import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Portfolio.css";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = "https://portfolio-backend-lqmi.onrender.com";


  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    fetch(`${API_BASE}/api/portfolio/`)
      .then(res => res.json())
      .then((data) => {
        const order = ["Ekart", "Emalayalee", "Movie App"]; // Change to your titles
        const sortedData = [...data].sort(
          (a, b) => order.indexOf(a.title) - order.indexOf(b.title)
        );

        setPortfolio(sortedData.length ? sortedData : data);
        setLoading(false);
        AOS.refresh(); 
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  // Optional: sort them in your custom order like before
  const order = ["Ekart", "Emalayalee Admin Panel", "Movie App"];
  const sortedProjects = [...projects].sort(
    (a, b) => order.indexOf(a.title) - order.indexOf(b.title)
  );

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          My Portfolio
        </h2>

        <div className="portfolio-grid">
          {loading ? (
            <div className="no-portfolio">Loading portfolio...</div>
          ) : portfolio.length === 0 ? (
            <div className="no-portfolio glass-effect">
              🚧 No portfolio items available
            </div>
          ) : (
            portfolio.map((project, index) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
