import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/home.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footrLinks}>
        <div>
          <h2>Quick Links</h2>
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Our Services</Link>
          <Link>Our Work</Link>
          <Link>Blog</Link>
        </div>
        <div>
          <h2>Our Services</h2>
          <Link>Web development</Link>
          <Link>WordPress Expertise</Link>
          <Link>Audit & IT Consultancy</Link>
          <Link>Mobile Development</Link>
          <Link>Product Design</Link>
        </div>
        <div>
          <h2>Follow Us</h2>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>Twitter</Link>
          <Link>Linkedin</Link>
          <Link>Github</Link>
        </div>
      </div>
      <p>copyright @ Flourish DevOps 2022</p>
    </footer>
  )
}
