import React from 'react'
import './About.css'
import akeju  from '../../img/akeju.jpeg';

const About = () => {
  return (
    <div className='about'>
        <h2 className='n-heading' >About Me</h2>
        <div className="inner">
            <div className="parag">
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul className="skills-list">
                    <li>Javascript (ES6) </li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Wordpress</li>
                </ul>
            </div>
            <div className="pic">
                <div className="wrapper">
                    <div className="img">
                        <img 
                        // style={{height: '100px', width: '100px'}}
                        src={akeju} alt='' />
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default About