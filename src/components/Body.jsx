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
          <div class="disappear">
            <span>A</span>
            <span>K</span>
            <span>S</span>
            <span>H</span>
            <span>A</span>
            <span>Y</span>
            <span>&nbsp;</span>
            <span>E</span>
          </div>

        <div className="subcontent">
          <p className="subtitle">Python Developer</p>

        <a href="./resume.pdf" download className="resume-button">
          DOWNLOAD RESUME <span className="arrow">⬇</span>
        </a>
        </div>
        
      </div>
    </section>
  );
};

export default Body;
