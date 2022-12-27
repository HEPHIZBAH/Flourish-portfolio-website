import React from 'react'
import * as styles from '../styles/home.module.css'

export default function MissionVision() {
  return (
    <div className={styles.VisionMission}>
      <h1>We Flourish Here... Let’s Build your Solutions Together.</h1>
      <div className={styles.MissionVision}>
        <div>
            <h2>Our Mission</h2>
            <p>Build world-class products and sustainable solutions that are unique and tailored to meet up with emerging innovative
                 global trends. We believe it is our job to help our
                 clients reach new levels of success by providing superior products with an emphasis on timely delivery.</p>
        </div>
        <div>
            <h2>Our Vision</h2>
            <p>Flourish Devops is aimed at becoming a World-class Software Development and Solutions company.</p>
        </div>
      </div>
    </div>
  )
}
