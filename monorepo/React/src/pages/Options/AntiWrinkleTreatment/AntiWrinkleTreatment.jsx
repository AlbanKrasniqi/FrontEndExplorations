import './AntiWrinkleTreatment.css'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function AntiWrinkleTreatment({ setCurrentStep }) {
  useEffect(() => {
    setCurrentStep(2); 
  }, [setCurrentStep]);

  // Function to reset the step when clicking the back button
  const resetStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="anti-wrinkle-treatment-container">
      <div className="option-container">
      <h1>Anti-Wrinkle Treatment Page</h1>
      <Link to="/" className="back-link" onClick={resetStep}>
        <span className="arrow-icon">&larr;</span> Go Back
      </Link>
    </div>
    </div>
  );
}

export default AntiWrinkleTreatment;
