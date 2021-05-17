import React from "react";
import "./style.css";
// thumbnail for book image
function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Book Image"
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}

export default Thumbnail;
