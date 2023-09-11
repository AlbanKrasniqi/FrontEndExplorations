import React, { useEffect } from "react";
import "./Sclerotherapy.css";
import { Link } from "react-router-dom";
function Sclerotherapy({setCurrentStep}) {
  useEffect(()=>{
    setCurrentStep(2)
  },[setCurrentStep])

  const resetStep = ()=>{
    setCurrentStep(1)
}
  return (
    <div>
    <section className="option-container">
     <h1>Sclerotherapy</h1>
     {/* Add your content here */}
     <Link to="/" className="back-link" onClick={resetStep}>
       <span className="arrow-icon">&larr;</span> Go Back
     </Link>
   </section>
   </div>
  );
}

export default Sclerotherapy;
