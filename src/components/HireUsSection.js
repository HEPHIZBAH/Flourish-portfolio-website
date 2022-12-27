import React from 'react'
import * as styles from '../styles/home.module.css'

export default function HireUsSection() {
  return (
    <div className={styles.introd}>
        <div>
           
        <h1>Let's Build Your Products Together</h1>
        <p>We have the skills and resources that will help 
            designers, developers, businesses and companies create websites quickly and easily.
        </p>
        <button className={styles.btn}>Hire Us </button>
        <button className={styles.btn}>Our Portfolios</button>
        </div>
        <img src="/vecteezy_3d-programmer-pc-illustration-side-view_10998283_411.png" alt="laptop" style={{ maxWidth : '100%'}}/>.
    </div>
  )
}