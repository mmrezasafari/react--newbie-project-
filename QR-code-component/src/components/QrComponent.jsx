import React from "react";
import "../assets/styles/style.css";

const QrComponent = ({ src }) => {
  console.log(src);
  return (
    <div className="card">
      <img src={src} className="qr-image" id={`img-${src}`} alt="QR-img" />
      <div className="description">
        <h2 id="h-title">Improve your front-end skills by building projects</h2>
        <p id="p-description">
          scan the QR code to visit frontend mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrComponent;
