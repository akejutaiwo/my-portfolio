import React from 'react'
import './Header.css'
import { useState } from 'react'
import { navLinks } from '../config';
import { Link } from 'react-scroll';
import Resume from '../Header/AkejuResume.pdf'

const Header = () => {
    const [ isNavExpanded, setIsNavExpanded ] = useState(false);

    const Logo = (
      <div className="logo" tabIndex='-1'>
        <a href='/' aria-label='home'>
          TA
        </a>
      </div>
    )
    const ResumeLink = (
      <a href={Resume} className="button">
        Resume
      </a>
    )

  return (
    <header className='header'> 
      <nav className="navigation">
        {Logo}
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
          <ol className='Links'>
            {navLinks.map(({url, name}, i) => (
             <li key={i}>
              <Link activeClass='active' spy={true} to={url}>{name}</Link>
             </li>
            ))}
            {ResumeLink}
          </ol>
        </div>
      </nav>
    </header>
  )
}

export default Header

