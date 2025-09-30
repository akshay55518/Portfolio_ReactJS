// src/components/Loading.jsx
import React from "react";
import "../css/Loading.css"; // optional for styling

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loading;
