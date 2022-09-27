import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import {Side, Ul } from '../StyledComponents/Side'

const LeftSide = () => {
  return (
    <Side orientation='left' >
        <Ul>
          <li>
            <a href='/'>
              <FaFacebook/>
            </a>
          </li>
          <li>
            <a href='/' >
              <FaGithub/>
            </a>
          </li>
          <li>
            <a href='/'>
              <FaLinkedin/>
            </a>
          </li>
          <li>
            <a href='/'>
              <FaTwitter/>
            </a>
          </li>
        </Ul>  
    </Side>
        
  )
}

export default LeftSide