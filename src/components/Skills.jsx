import React, { useEffect } from "react";
import "../css/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Animate circles when they come into view
    const circles = document.querySelectorAll(".skill-circle svg circle:last-child");

    const animateCircle = (circle) => {
      const level = circle.dataset.level;
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference - (circumference * level) / 100;
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
  }, []);

  const skillCategories = {
    "Programming Languages": [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
    "Frontend Technologies": [
      { name: "HTML/CSS", level: 95 },
      { name: "Angular", level: 80 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 85 },
      { name: "jQuery", level: 75 },
    ],
    "Backend Frameworks": [
      { name: "Django", level: 85 },
      { name: "Flask", level: 75 },
      { name: "Node.js (Basic)", level: 60 },
    ],
    "Databases": [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 80 },
    ],
    "Tools & Version Control": [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 80 },
      { name: "Postman", level: 85 },
    ],
    "Other Software": [
      { name: "AutoCAD", level: 70 },
      { name: "Revit", level: 65 },
      { name: "Adobe Photoshop", level: 80 },
      { name: "Adobe Illustrator", level: 75 },
    ],
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title" data-aos="fade-down">My Skills</h2>
      {Object.keys(skillCategories).map((category, i) => (
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
      ))}
    </section>
  );
};

export default Skills;
