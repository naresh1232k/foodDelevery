import React from 'react'
import img1 from '../assets/home-bg.jpg';
import './Herosection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import brud from '../assets/brud.png';


const Herosection = () => {
  return (
    <>
    <div className='img-div'>
     <img className='brud' src={brud} alt="" />
     <img className='imgbg' src={img1} alt="" />
     </div>
    </>
  )
}

export default Herosection;