import React from 'react'
import './Services.css'
// import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'
import { Container, Row, Col } from 'react-bootstrap'

const Service = () => {
    

  return (
    <div className="services" id='Services'>
    <Container>
    <Row>
        <Col className='awesome'>
        <span>My Awesome</span>
        <span>services</span>
        <span>
            Lorem ispum is simpley dummy text of printing of printing lorem 
            <br/>
            ispum is simpley dummy text of printing 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </Col>
        <Col className='cards' >
        <div style={{left: '12rem'}}>
            <Card 
                emoji={Glasses}
                heading={'Web Developer'}
                detail={"Html, Css, Javascript, React"}

            />
            </div>
        </Col>
        </Row>
    </Container>


    </div>
  )
}

export default Service