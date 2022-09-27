import React from 'react'
import './About.css'
import akeju  from '../../img/akeju.jpeg';


const skills = ['JavaScript (ES6+)' ,'React', 'Node.js', 'CSS' ]

const About = () => {
  return (
    <div className='about'>
        <h2 className='numbered-heading' >About Me  </h2>
        <div className="inner">
            <div className="parag">
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                <ul className="skills-list">
                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </div>
            <div className="pic">
                <div className="wrapper">
                </div>
                <img 
                width={350}
                className='image'
                src={akeju} 
                alt='' 
                />
            </div>
        </div>
    
    </div>
  )
}

export default About