import React from 'react'
import './Header.css'
import { useState } from 'react'

const Header = () => {
    const [ isNavExpanded, setIsNavExpanded ] = useState(false);
  return (
    <header className='header' > 
      <nav className="navigation">
        <div className="logo">
          <a href="/" aria-label='home'>
            Taiwo Akeju
          </a>
          </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">About</a>
            </li>
            <li>
              <a href="/about">Experience</a>
            </li>
            <li>
              <a href="/contact">Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

            <button className="button">
              <a href='/'>Resume</a>
            </button>

          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

