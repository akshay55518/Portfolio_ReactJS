import React, { useEffect, useState } from "react";
import "../css/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading"; // reusable loading component

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState({}); // from API
  const [loading, setLoading] = useState(true);
  const API_BASE = "https://portfolio-backend-lqmi.onrender.com";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Fetch skills from backend API
    fetch(`${API_BASE}/api/skills/`) // Change to your endpoint
      .then((res) => res.json())
      .then((data) => {
        setSkillCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      // Animate circles when visible
      const circles = document.querySelectorAll(
        ".skill-circle svg circle:last-child"
      );

      const animateCircle = (circle) => {
        const level = circle.dataset.level;
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset =
          circumference - (circumference * level) / 100;
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCircle(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      circles.forEach((circle) => observer.observe(circle));
    }
  }, [loading]);

  // Early return while loading (like About.jsx)
  if (loading) {
    return (
      <section className="skills-section" id="skills">
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            My Skills
          </h2>
          <div className="skills-content">
            <Loading message="Loading skills..." />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          My Skills
        </h2>

        {Object.keys(skillCategories).length > 0 ? (
          Object.keys(skillCategories).map((category, i) => (
            <div
              className="skills-category"
              key={i}
              data-aos={
                i % 3 === 0
                  ? "fade-up-right"
                  : i % 3 === 1
                  ? "fade-up-left"
                  : "fade-up"
              }
            >
              <h3 className="category-title">{category}</h3>
              <div className="skills-circle-wrapper">
                {skillCategories[category].map((skill, index) => (
                  <div className="skill-circle" key={index}>
                    <svg>
                      <circle cx="60" cy="60" r="54"></circle>
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        data-level={skill.level}
                      ></circle>
                    </svg>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <p>{skill.level}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="experience">
            <p>No skills shown from backend</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
