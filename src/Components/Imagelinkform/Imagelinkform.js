import React from "react";

const Imagelinkform = ({onButtonSubmit, onInputChange}) => {
  return(
    <div>
      <p className="f3">This Magic brain will detect face in a Image.</p>
      <div className="mw5 mw7-ns center bg-light-black pa3 ph5-ns">
        <input className="f4 pa2 w-70 center" type='text' onChange={onInputChange} />
        <button className="w-25 right pointer br3 ba b--dark-green bg-green white pa2 ml3 bg-animate hover-bg-dark-green border-box" onClick={onButtonSubmit}>DETECT</button>
      </div>
    </div>
  );
}
export default Imagelinkform
