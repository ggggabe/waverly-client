import React, { useEffect } from 'react'
import { Wave } from '../../components'
import './index.scss'

export const AboutWaverly = () => {
  return (
    <div className="content">
      <img className="logo" src="waverly-logo.svg" alt="Waverly Logo" />
      <p>Waverly is a digital studio that makes websites and experiences for musicians and other creatives.</p>
      <a href="mailto:sup@waverly.works">sup@waverly.works</a>
    </div>
  )
}


export const LandingPage = () => {
  useEffect(() => {
    document.title = 'Waverly - About'
  })
  return (
    <div className="landing-page container fullscreend">
      <AboutWaverly />
      {/* <Wave spacing={{ x: 10, y: 10 }} amplitude={[2, 12]} /> */}
    </div>
  )
}
