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

  const experiences = [
    {
      id: 1,
      company: "Protec, Kochi",
      role: "Python Developer Intern",
      time: "Jul 2025 – Present",
      workDone: [
        "Developed and integrated backend features for Django-based admin panels.",
        "Created pagination utilities and reusable components for multiple views.",
        "Worked on authentication, REST APIs, and optimized database queries.",
        "Implemented admin panel enhancements for Emalayalee news portal, including news management and analytics integration.",
        "Collaborated with team to debug, test, and deploy backend features.",
      ],
    },
    {
      id: 2,
      company: "Quest Innovatives, Calicut",
      role: "Python Trainee",
      time: "Jul 2024 – Jan 2025",
      workDone: [
        "Completed intensive training in Python programming and problem-solving.",
        "Built small-scale projects including CRUD applications using Django.",
        "Gained practical exposure to REST API development and database handling.",
        "Worked with Git for version control and collaborative coding.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title" data-aos="fade-up">
        Experience
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className="experience-card"
          data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          data-aos-delay={200 + index * 200}
        >
          <h3>
            {exp.company} – {exp.role}
          </h3>
          <span className="experience-date">{exp.time}</span>
          <ul>
            {exp.workDone.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
