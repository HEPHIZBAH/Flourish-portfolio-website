import React from 'react'
import * as styles from '../styles/home.module.css'

export default function Services() {
  return (
    <section className={styles.serviceGrid}>
      <div className={styles.firstServiceGrid}>
        <div className={styles.wepDevelop}>
            <i class="fa fa-id-badge" aria-hidden="true"></i>
            <h1>Web Development</h1>
            <p>Developing web-based solutions of the highest caliber to meet the specific requirements of our clients and their businesses.</p>
        </div>
        <div className={styles.productDesign}>
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            <h1>Product Design</h1>
            <p>Turning your bright idea into a visually appealing product.</p>
        </div>
      </div>
      <div className={styles.secondServiceGrid}>
      <div className={styles.auditConsultancy}>
            <i class="fa fa-id-badge" aria-hidden="true"></i>
            <h1>Audit And IT Consultancy</h1>
            <p>Enhance and manage your business with complete transparency and security.</p>
        </div>
        <div className={styles.mobileAppDevelop}>
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            <h1>Mobile App Development</h1>
            <p>Developing apps that provide exceptional user experiences.</p>
        </div>
      </div>
    </section>
  )
}
