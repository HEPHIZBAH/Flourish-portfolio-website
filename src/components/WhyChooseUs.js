import React from 'react'
import * as styles from '../styles/home.module.css'

export default function WhyChooseUs() {
  return (
    <div className={styles.intro}>
      <div><img src="/computer-software-ibm-business-software-developer-team-computer-programmers-ef1ff87c806582ca7e8d09d6aefb91bd.png" alt="lLaptop" style={{ maxWidth : '100%'}}/> </div>
      <div>
        <h1>Why Choose Us</h1>
        <div className={styles.blackcards}>
        <div><h6>Responsive Solutions Built</h6><p>We prioritize the satisfaction of our clients and consistently exceed expectations in order to deliver exceptional final products. This sets us apart from our competitors.</p></div>
        <div><h6>Timely Delivery</h6><p>We understand the importance of time and strive to complete deliveries efficiently and promptly.</p></div>
        <div><h6>Strong Communications</h6><p>We collaborate closely with our clients to ensure their satisfaction with the final product and to ensure their understanding of our work.</p></div>
        <div><h6>Highly Experienced Team</h6><p>Our team consists of experts in their respective fields, giving you the confidence that we will consistently deliver excellent results.</p></div>
        </div>
        </div>
         
    </div>
  )
}