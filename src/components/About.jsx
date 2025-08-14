import React, { useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); 
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About Me
        </h2>
        <div className="about-content">
          
          <div className="about-left" data-aos="fade-right">
            <div className="about-image">
              <img src="./profile.jpg" alt="Akshay E" />
            </div>

            <ul className="about-details">
              <li><strong>Name:</strong> Akshay E</li>
              <li><strong>Email:</strong> akshay.e.elaydath@gmail.com</li>
              <li><strong>Mobile:</strong> +91 8075951964, +91 8891326360</li>
              <li><strong>Location:</strong> Kozhikode, India</li>
            </ul>

            <div className="social-icons" data-aos="fade-up" data-aos-delay="200">
              <a href="https://www.instagram.com/_a_ksha_y_._/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://github.com/akshay55518" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/akshay-elayadath/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="about-text" data-aos="fade-left">
            <h3>Backend Developer</h3>
            <p>
              I’m <b>Akshay E</b>, a dedicated developer who loves building
              clean, efficient, and user-friendly digital solutions. What
              started as a curiosity for coding has grown into a strong skill
              set spanning both <strong>frontend</strong> and 
              <strong>backend</strong> development.
            </p>
            <p>
              From designing sleek, responsive interfaces with ReactJS to
              developing secure, scalable backend systems in Django, I enjoy
              every step of the process. My focus is on creating applications
              that are not only functional but also deliver an enjoyable and
              intuitive user experience.
            </p>

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
