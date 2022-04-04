import React from "react";
import classes from "./styles.module.css"

function QrComponent({ src }) {
  return (
    <div className={classes.card}>
      <img src={src} className="qr-img" id={`img-${src}`} alt="QR-IMAGE" />
      <div className="title">
        <h2>Improve your front-end skills by building projects</h2>
      </div>
      <div className="description">
          <p>scan the QR code to visit frontend mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}


export default QrComponent ;