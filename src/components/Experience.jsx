import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="experience" className="section">
      <h2 className="section-title" data-aos="fade-up">
        Experience
      </h2>

      {/* Quest Innovatives Training */}
      <div className="experience-card" data-aos="fade-right" data-aos-delay="200">
        <h3>Quest Innovatives, Calicut – Python Trainee</h3>
        <span className="experience-date">Jul 2024 – Jan 2025</span>
        <ul>
          <li>Completed intensive training in Python programming and problem-solving.</li>
          <li>Built small-scale projects including CRUD applications using Django.</li>
          <li>Gained practical exposure to REST API development and database handling.</li>
          <li>Worked with Git for version control and collaborative coding.</li>
        </ul>
      </div>

      {/* Protec Internship */}
      <div className="experience-card" data-aos="fade-left" data-aos-delay="400">
        <h3>Protec, Kochi – Python Developer Intern</h3>
        <span className="experience-date">Jul 2025 – Present</span>
        <ul>
          <li>Developed and integrated backend features for Django-based admin panels.</li>
          <li>Created pagination utilities and reusable components for multiple views.</li>
          <li>Worked on authentication, REST APIs, and optimized database queries.</li>
          <li>
            Implemented admin panel enhancements for <strong>Emalayalee</strong> news portal, including news management and analytics integration.
          </li>
          <li>Collaborated with team to debug, test, and deploy backend features.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
