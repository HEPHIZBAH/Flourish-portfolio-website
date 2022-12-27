import React from 'react'
import * as styles from '../styles/home.module.css'

export default function WhyChooseUs() {
  return (
    <div className={styles.intro}>
      <div><img src="/computer-software-ibm-business-software-developer-team-computer-programmers-ef1ff87c806582ca7e8d09d6aefb91bd.png" alt="lLaptop" style={{ maxWidth : '100%'}}/> </div>
      <div>
        <h1>Why Choose Us</h1>
        <div className={styles.blackcards}>
        <div><h6>Responsive Solutions Built</h6><p>we care about our clients and go above and beyond to make sure they are happy with the final products. This is what makes us stand out from the rest.</p></div>
        <div><h6>Timely Delivery</h6><p>We understand that time is valuable which is why we take great care in making sure our deliveries are completed as quickly & efficiently as possible.</p></div>
        <div><h6>Strong Communications</h6><p>We work closely with our clients to make sure that they are completely satisfied with the end result and that they understand what we have done for them.</p></div>
        <div><h6>Highly Experienced Team</h6><p>Our team is comprised of experts in their field, so you can be rest assured knowing that we have the experts to deliver top-notch results everytime.</p></div>
        </div>
        </div>
         
    </div>
  )
}