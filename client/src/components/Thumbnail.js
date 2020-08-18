import React from "react";
function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Recipe Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export default Thumbnail;