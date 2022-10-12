import React from 'react'
import { About, Contact, Footer, Intro, Projects } from '../Icons'


const Content = () => {
  return (
    <div className="Content">
        <div className="container">
            <Intro/>
            <About />
            <Projects />
            <Contact/>
            <Footer/>
        </div>
    </div>
  )
}

export default Content

