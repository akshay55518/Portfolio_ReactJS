import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Education.css";
import Loading from "./Loading"; // reusable loading component

const Education = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate loading for consistency
    const timer = setTimeout(() => setLoading(false), 500); // 0.5s loading
    return () => clearTimeout(timer);
  }, []);

  // Early return while loading
  if (loading) {
    return (
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Education & Certifications
          </h2>
          <div className="education-content">
            <Loading message="Loading education..." />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Education & Certifications
        </h2>

        <div className="edu-cert-grid">
          {/* Education */}
          <div
            className="education-card card"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h3 className="card-title">B.Tech in Mechanical Engineering</h3>
            <span className="card-subtitle">
              Calicut University, Institute of Engineering and Technology
            </span>
            <p className="card-text">Graduated: 2021</p>
          </div>

          {/* Certifications */}
          <div
            className="certifications card"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <h4 className="card-title">Certifications</h4>
            <ul className="cert-list">
              <li>Python Programming – Quest Innovative Solutions, Calicut</li>
              <li>QA/QC Intern (2020) – Techshore Inspection Services, Cochin</li>
              <li>
                MEP Training (Mechanical, Electrical, Plumbing) – Adi Institute
                of Quality Engineering, Calicut
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
