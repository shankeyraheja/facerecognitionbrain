import React from "react";

const Navigation = ({onPageChange}) => {
  return(
    <nav style={{display:"flex", justifyContent:"flex-end"}}>
    <p onClick={() => onPageChange("Signin")}className="f3 link dim black underline pa3 pointer">Sign Out</p>
    </nav>
  );
}
export default Navigation
