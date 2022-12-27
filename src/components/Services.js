import React from 'react'
import * as styles from '../styles/home.module.css'

export default function Services() {
  return (
    <section className={styles.serviceGrid}>
      <div className={styles.firstServiceGrid}>
        <div className={styles.wepDevelop}>
            <i class="fa fa-id-badge" aria-hidden="true"></i>
            <h1>Web Development</h1>
            <p>Building Web-based solutions of world class to suit our clients and their businesses.</p>
        </div>
        <div className={styles.productDesign}>
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            <h1>Product Design</h1>
            <p>Transforming that bright ida of yours into beautiful products</p>
        </div>
      </div>
      <div className={styles.secondServiceGrid}>
      <div className={styles.auditConsultancy}>
            <i class="fa fa-id-badge" aria-hidden="true"></i>
            <h1>Audit And IT Consultancy</h1>
            <p>Optimize and Manage Business with 100% transparency and security</p>
        </div>
        <div className={styles.mobileAppDevelop}>
            <i class="fa fa-address-book-o" aria-hidden="true"></i>
            <h1>Mobile App Development</h1>
            <p>Building Apps that Create awesome experiences for users</p>
        </div>
      </div>
    </section>
  )
}
