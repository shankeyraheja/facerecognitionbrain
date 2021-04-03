import React from "react";
import "./Facerecognition.css";
const Facerecognition = ({imageurl, box}) => {
  return(
      <div className="center mt2" >
        <div className="absolute">
          <img id="inputimage" alt="" src={imageurl} width='500px' height='auto' />
          <div  className= "bounding-box" style={{left:box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>
        </div>
      </div>
  );
}
export default Facerecognition
