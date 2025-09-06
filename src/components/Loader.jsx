import React from "react";
import "../css/Loader.css"; // We'll style it separately

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
