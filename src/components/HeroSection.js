import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import { Play } from 'lucide-react'
import videoSrc from '../assets/exploration3.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <div className='bg'></div> */}

      <video
      autoPlay
      loop
      muted
      src={videoSrc}
      />

      <h1>THE WORLD IS YOURS</h1>
      <p>Discover, experience, create.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          get started
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          watch <Play size={18} strokeWidth={1.25} color="#242424"/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection