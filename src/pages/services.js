import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function services() {
  return (
    <Layout>
    <div className={styles.services}>
       <h1> Our services</h1>
       <h3>Helping You Stay Relevant In This New Age</h3>
       <div className={styles.webservices}>
        <div>
        <img src="/smartmockups_lc6yxree.png" alt="laptop" style={{ maxWidth : '100%' }} />
        </div>
        <div className={styles.webservicelang}>
          <h3>Web Development</h3>
          <p>We specialize in creating stunning and effective custom web applications and websites. Experts in all aspects of web development and creation of bespoke solutions that will meet specific needs and exceed expectations.</p>
          <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
          </div>
        </div>
       </div>

       <div className={styles.webservices}>
      
        <div className={styles.webservicelang}>
          <h3>Audit & IT Consulting</h3>
          <p>Flourish DevOps provides comprehensive audits to help identify areas of improvement, as well as provide solutions that will help firms increase efficiency and reduce overhead costs. We also offer a range of IT services, including cyber security, system support, and cloud services</p>
        
        </div>
        <div>
        <img src="/smartmockups_lc72m0gg.png" alt="laptop" style={{ maxWidth : '100%' }} />
        </div>
       </div>

       <div className={styles.webservices}>
        <div>
        <img src="/smartmockups_lc71ya4b.png" alt="laptop" style={{ maxWidth : '100%' }} />
        </div>
        <div className={styles.webservicelang}>
          <h3>Mobile Development</h3>
          <p>We create stunning mobile apps that are not only user-friendly, but also reliable and functional. We take your input and idea and turn it into an efficient app that is both visually appealing and easy to use. We are always up for a challenge!</p>
          <div>
          <span>Android</span>
          <span>Apple</span>
          <span>Flutter</span>
          <span>Java</span>
          <span>React Native</span>
          </div>
        </div>
       </div>

       <div className={styles.webservices}>
        
        <div className={styles.webservicelang}>
          <h3>Product Design</h3>
          <p>We strive to improve the user experience in the solutions we create for our customers, support brands by creating products that are long-lasting. We are aware that the success of a product in the market depends on the simplicity and the seamlessness of the interface.</p>
          <div>
          <span>Figma</span>
          <span>Adobe Photoshop</span>
          <span>Protopie</span>
          <span>Notion</span>
          </div>
        </div>
        <div>
        <img src="/smartmockups_lc723caa.png" alt="laptop" style={{ maxWidth : '100%' }} />
        </div>
       </div>
    </div>
    </Layout>
  )
}
