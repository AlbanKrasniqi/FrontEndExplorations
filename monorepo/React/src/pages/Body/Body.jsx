import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import aw from '../Images/Antiwrikle.png';
import df from '../Images/DF.png';
import sr from '../Images/SR.png';
import sc from '../Images/SC.png';

function Body({ setCurrentStep }) {
  const handleButtonClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <div className="body-container">
      <section className='list-btn'>
        <Link to='/anti-wrinkle-treatment'>
          <button className='custom-button' onClick={() => handleButtonClick()}>
            <div className='left-container'>
              <img src={aw} alt='Image' className='button-image' />
              <span className='button-text'>Anti-Wrinkle Treatment</span>
            </div>
            <span className='button-arrow'><FontAwesomeIcon icon={faAngleRight} /></span>
          </button>
        </Link>
        <Link to='/dermal-fillers'>
          <button className='custom-button' onClick={() => handleButtonClick()}>
            <div className='left-container'>
              <img src={df} alt='Image' className='button-image' />
              <span className='button-text'>Dermal Fillers</span>
            </div>
            <span className='button-arrow'><FontAwesomeIcon icon={faAngleRight} /></span>
          </button>
        </Link>
        <Link to='/secret-rf'>
          <button className='custom-button' onClick={() => handleButtonClick()}>
            <div className='left-container'>
              <img src={sr} alt='Image' className='button-image' />
              <span className='button-text'>Secret Rf</span>
            </div>
            <span className='button-arrow'><FontAwesomeIcon icon={faAngleRight} /></span>
          </button>
        </Link>
        <Link to='/sclerotherapy'>
          <button className='custom-button' onClick={() => handleButtonClick()}>
            <div className='left-container'>
              <img src={sc} alt='Image' className='button-image' />
              <span className='button-text'>Sclerotherapy</span>
            </div>
            <span className='button-arrow'><FontAwesomeIcon icon={faAngleRight} /></span>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Body;
