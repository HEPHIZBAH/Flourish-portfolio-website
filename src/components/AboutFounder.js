import React from 'react'
import * as styles from '../styles/home.module.css'

export default function AboutFounder() {
  return (
    <div className={styles.header}>
      <div>
      <h1 className={styles.aboutUsHeader}>About Flourish CEO</h1>
      <p>I am a Full-stack Developer.I can provide clean code and make websites more attractive and
         interractive with web animations. A responsive Design, makes your websites accessible to all users, 
         regardless of their devices I am a Front-end Web Developer.I can provide clean code and make websites more 
         attractive and interractive with web animations. A responsive Design, makes your websites accessible to all users,
        regardless of their devices I am a Front-end Web Developer.</p>
        </div>
        <div>
        <img src="/editme.png" alt="laptop" style={{ maxWidth : '100%' }} /> 
        </div>
     </div>
  )
}
