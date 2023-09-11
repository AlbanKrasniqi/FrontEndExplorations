import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./pages/Header/Header";
import Body from "./pages/Body/Body";
import AntiWrinkleTreatment from "./pages/Options/AntiWrinkleTreatment/AntiWrinkleTreatment";
import DermalFillers from "./pages/Options/DermalFillers/DermalFillers";
import SecretRF from "./pages/Options/SecretRF/SecretRF";
import Sclerotherapy from "./pages/Options/Sclerotherapy/Sclerotherapy";
import Footer from "./pages/Footer/Footer";
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const resetStep = () => {
    setCurrentStep(1);
  };

  return (
    <div>
      <Header currentStep={currentStep} totalSteps={totalSteps} />
      <Routes>
        <Route path="/" element={<Body setCurrentStep={setCurrentStep} />} />
        <Route
          path="/anti-wrinkle-treatment"
          element={
            <AntiWrinkleTreatment
              setCurrentStep={setCurrentStep}
              resetStep={resetStep}
            />
          }
        />
        <Route
          path="/dermal-fillers"
          element={
            <DermalFillers
              setCurrentStep={setCurrentStep}
              resetStep={resetStep}
            />
          }
        />
        <Route
          path="/secret-rf"
          element={
            <SecretRF setCurrentStep={setCurrentStep} resetStep={resetStep} />
          }
        />
        <Route
          path="/sclerotherapy"
          element={
            <Sclerotherapy
              setCurrentStep={setCurrentStep}
              resetStep={resetStep}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
