import React, { useEffect } from "react";
import "../css/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
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
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">My Skills</h2>
        <div className="skills-wrapper">
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
              {skillCategories[category].map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
