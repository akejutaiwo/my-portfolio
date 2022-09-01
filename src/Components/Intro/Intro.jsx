import React from 'react'
import { Container } from 'react-bootstrap'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
      <Container>
        <div className='front' >
          <h6>Hi, my name is</h6>
          <h2 className='big-heading'>Taiwo Akeju.</h2>
          <h3 className='big-heading1'>I build things for the web.</h3>
          <p>I am Frontend developer based in Lagos, Nigeria focused on creating interactive user experiences on the web.</p>
        </div>
        <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        
        
        
        
      </Container>
    </div>
  )
}

export default Intro