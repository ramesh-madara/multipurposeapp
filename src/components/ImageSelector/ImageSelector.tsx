import React from "react";
import "./ImageSelector.css";
import { useState, useEffect } from "react";

const ImageSelector = () => {
  const [view, setView] = useState(false);
  const [currentImage, setCurrentImage]= useState("Amma's")

  const viewSelection = () => {
    console.log(view);
  };

  const handleItemClick = (item:string)=>{
    setView(!view);
    setCurrentImage(item);
  }

  return (
    <div className="outer">
      <div className="btnOuter">
        <div className="selector">
          <div className="viewSelected" onClick={() => setView(!view)}>
            <span onClick={viewSelection}> {currentImage}</span>
            <span> *</span>
          </div>
          <div className={`selectionList ${view ? "active" : "inactive"}`}>
            <ul onClick={()=>handleItemClick("Amma's")}>Amma's</ul>
            <ul onClick={()=>handleItemClick("Thaththa's")}>Thaththa's</ul>
            <ul onClick={()=>handleItemClick("Mine")}>Mine</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSelector;
