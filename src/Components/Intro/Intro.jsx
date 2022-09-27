import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
        <div className='front'>
          <h1>Hi, my name is</h1>
          <h2>Taiwo Akeju.</h2>
          <h3 className='big-heading1'>I build things for the web.</h3>
          <p>I am Frontend developer based in Lagos, Nigeria focused on creating interactive user experiences on the web.</p>
          <button className="button contact">
            Contact Me!!
          </button>
        </div>
    </div>
  )
}

export default Intro