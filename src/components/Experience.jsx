import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Experience.css";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = "https://portfolio-backend-lqmi.onrender.com";
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    fetch(`${API_BASE}/api/experience/`)
      .then(res => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching experiences:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading-text">Loading experiences...</p>;
  }

  return (
    <section id="experience" className="section">
      <h2 className="section-title" data-aos="fade-up">
        Experience
      </h2>

      {experiences && experiences.length > 0 ? (
        experiences.map((exp, index) => (
          <div
            key={exp.id || index}
            className="experience-card"
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-delay={200 + index * 200}
          >
            <h3>
              {exp.company} – {exp.role}
            </h3>
            <span className="experience-date">{exp.time}</span>

            {exp.workDone?.length > 0 || exp.work_done?.length > 0 ? (
              <ul>
                {(exp.workDone || exp.work_done).map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            ) : (
              <p className="no-tasks">No detailed tasks provided.</p>
            )}
          </div>
        ))
      ) : (
        <div className="experience">
          <p>No experiences available from backend.</p>
        </div>
      )}
    </section>
  );
};

export default Experience;
