import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Education.css";

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once
    });
  }, []);

  return (
    <section id="education" className="section">
      <h2
        className="section-title"
        data-aos="fade-up"
      >
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
    </section>
  );
};

export default Education;
