import React from 'react'
import "./About.css";
import Aboutimg from '../assets/aboutimg.png';
import Ordernow from './Ordernow';


export default function About() {
  return (
    <section className='homeabout'>
          <div className="aboutleftpart">
            <img src={Aboutimg} alt="" />
          </div>
          <div className="aboutright">
              <h2>We Are Feane</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
              <Ordernow title={"Read More"}/>
          </div>
    </section>
  )
}
