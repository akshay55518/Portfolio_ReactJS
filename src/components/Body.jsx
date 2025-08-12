import React from "react";
import "../css/Body.css";

const Body = () => {
  return (
    <section className="hero" id="home">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="back-video"
        poster="./video-poster.jpg"
      >
        <source src="./video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1>AKSHAY E</h1>
        <p className="subtitle">Backend Developer</p>
        <a href="./resume.pdf" download className="resume-button">
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
};

export default Body;
