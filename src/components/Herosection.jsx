import React from 'react';
import './Herosection.css';
import heroBg from '../assets/foodbg1.jpg'; // make sure this path is correct

const Herosection = () => {
  return (
    <div
      className="img-div"
      style={{ backgroundImage: `url(${heroBg})` }}
    ></div>
  );
};

export default Herosection;
