import React from 'react'
import { Button } from './Button'

function Herosection() {
  return (
    <div className="hero-container" >
      <video src="/video/video-2.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn" >
        <Button className="btns" 
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        >
        GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default Herosection
