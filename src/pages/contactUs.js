import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function contactUs() {
  return (
    <Layout>
    <div className={styles.form}>
    <div className={styles.formHeading}>
            <h1>Contact Us</h1>
            <p>We will like to hear from you</p>
            
        </div>
      
    </div>
    </Layout>
  )
}
