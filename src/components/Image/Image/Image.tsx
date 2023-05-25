import React from "react";
import "./Image.css";
import ImageSRC from "../imageSRC/ImageSRC";
const Image = () => {
  return (
    <div>
      <div className="Outer">
        <div className="imageOuter">
          <ImageSRC />
        </div>
      </div>
    </div>
  );
};

export default Image;
