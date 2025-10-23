import React from 'react'
import Herosection from './Herosection';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';

const Homepage = () => {
  return (
    <>
      <Herosection/>
      <Menu/>
      <About/>
      <Contact/>
    </>
  )
}

export default Homepage;