import React, { useEffect, useRef } from 'react'
import {usePrefersReducedMotion} from '../../Hooks'
import './About.css'
import ScrollReveal from 'scrollreveal'
import akeju  from '../../img/akeju.jpeg';
import { srConfig } from '../config';


const isSSR  = typeof window === 'undefined'
const sr = isSSR ? null : ScrollReveal();

const About = () => {
    const revealContainer = useRef (null);
    const prefersReducedMotion = usePrefersReducedMotion ();
  useEffect (() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig ());
  }, []);
  
  const skills = ['JavaScript (ES6+)' ,'React', 'Node.js', 'CSS' ]
  return (
    <section className='about' id='about'>
        <h2 className='numbered-heading'>About Me</h2>
        <div className="inner">
            <div className="parag">
                <p>Hello! My name is Taiwo and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when my friend try to create a company website but couldn't afford it due to the cost of the website</p>
                <p>Months later i end up building the website using WordPress, and i've manage to work with a student-led groceries stores. My main focus these days is building reusesable component using React for a variety of clients.</p>
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
    
    </section>
  )
}

export default About