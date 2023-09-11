import React from 'react';
import './Header.css';

export default function Header({ currentStep, totalSteps }) {
  return (
    <div>
      <section className='header-section'>
        <h3>Choose Service</h3>
        <p>Step {currentStep}/{totalSteps}</p>
      </section>
    </div>
  );
}
