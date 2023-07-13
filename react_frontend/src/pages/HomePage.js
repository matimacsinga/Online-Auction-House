import React from 'react'
import { Container } from 'react-bootstrap'
import MainCarousel from "../components/MainCarousel";
import main_icon from "../images/main_icon.png"

function HomePage() {
  return (
    <Container className="py-3">
          <img src={main_icon} style={{width: 400, height: 400, display: 'block', marginLeft: 'auto', marginRight: 'auto'}} alt="main_icon.png"/>
          <p style={{fontSize: "50px", textAlign: 'center', marginBottom: '10%'}}><span style={{ fontWeight: 'bold' }}>OutBid</span> - a modern online auction house</p>
          <MainCarousel/>
    </Container>
  )
}

export default HomePage