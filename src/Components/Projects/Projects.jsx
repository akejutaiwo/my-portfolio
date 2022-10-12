import React from 'react'
import project from './project.js'
import './Projects.js'
import { StyledProject, StyledProjectsGrid } from './Projects.js'


const Projects = () => {
  return (
    <>
    <section id='projects'>
      <h2 className="numbered-heading">
        Some things I've built
      </h2>
      <StyledProjectsGrid>
          { project.map((item ) => (
            <StyledProject key={item.id}>
              <div className="project-content">
                <div>
                  <p className="project-overline">{item.overline}</p>
                  <h3 className="project-title">{item.title}</h3>
                  <div className="project-description">
                    <p>{item.description}</p>
                  </div>
                  <ul className="project-tech-list">
                    {item.tech.map((tech, i ) => (
                        <li key={i} >{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">

                  </div>
                </div>
              </div>
              <div className="project-image">
                <a href='/'>
                  <img src={item.image}  alt='' className='img' />
                </a>
              </div>
            </StyledProject>
          ))}
      </StyledProjectsGrid>
      </section>
    </>
  )
}

export default Projects