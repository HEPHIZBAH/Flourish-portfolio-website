import React from 'react'
import * as styles from '../styles/home.module.css'

export default function ShortIntro() {
  return (
    <div className={styles.intro}>
      <img src="/kisspng-information-technology-gta-tech-inc-backup-comput-5aeedbe10e43a1.9674971915256032970584.png" alt="laptop" style={{ maxWidth : '100%'}}/>
      <div>
        <h1>Building Top-Notch Solutions For Companies All Over The world</h1>
        <p>Flourish DevOps is a team of highly skilled professionals with great work 
            experience, ready to help you take your Business to the next level.
             We are help our Clients stay Globally relevant in the New Age.
        </p>
      </div>
    </div>
  )
}
