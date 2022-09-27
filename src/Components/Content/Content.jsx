import React from 'react'
import { About, Contact, Footer, Intro } from '../Icons'


const Content = () => {
  return (
    <div className="Content">
        <div className="container">
            <Intro/>
            <About />
            <Contact/>
            <Footer/>
        </div>
    </div>
  )
}

export default Content

