import React, { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";

const About = () => {
  const [about, setAbout] = useState(null);
  const API_BASE = "https://portfolio-backend-lqmi.onrender.com";

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    fetch(`${API_BASE}/api/about/`)
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching About data:", err));
  }, []);

  if (!about)
    return (
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            About Me
          </h2>
          <div className="about-content">
            {/* Left loading card */}
            <div className="about-left loading-card glass-effect" data-aos="fade-right">
              <div className="loading-spinner"></div>
              <p>Loading About Section...</p>
            </div>
            {/* Right loading card */}
            <div className="about-text loading-card glass-effect" data-aos="fade-left">
              <div className="loading-spinner"></div>
              <p>Loading content...</p>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About Me
        </h2>
        <div className="about-content">
          {/* Left: Profile + Details */}
          <div className="about-left" data-aos="fade-right">
            <div className="about-image">
              <img src="/profile.jpg" alt={about.name} />
            </div>

            <ul className="about-details">
              <li><strong>Name:</strong> {about.name}</li>
              <li><strong>Email:</strong> {about.email}</li>
              <li><strong>Mobile:</strong> {about.mobile}</li>
              <li><strong>Location:</strong> {about.location}</li>
            </ul>

            <div className="social-icons" data-aos="fade-up" data-aos-delay="200">
              {about.instagram && (
                <a href={about.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {about.github && (
                <a href={about.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {about.linkedin && (
                <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>

          {/* Right: About Text */}
          <div className="about-text" data-aos="fade-left">
            <h3>{about.role}</h3>
            <p>{about.description1}</p>
            <p>{about.description2}</p>

            <a href="#contact" className="about-button" data-aos="zoom-in" data-aos-delay="200">
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
