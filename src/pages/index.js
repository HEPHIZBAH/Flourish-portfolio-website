import { Link } from "gatsby"
import * as React from "react"
import HappyClients from "../components/HappyClients"
import HireUsSection from "../components/HireUsSection"
import Layout from "../components/Layout"
import Services from "../components/Services"
import ShortIntro from "../components/ShortIntro"
import WhyChooseUs from "../components/WhyChooseUs"
import * as styles from '../styles/home.module.css'


export default function Home() {
  return ( 
       <Layout>
          <div className={styles.header}>
            <div>
            <h1>FLOURISH DEVOPS</h1>
            <h2>Design, Develop, and Deploy</h2>
            <p>We are a team of highly skilled professionals that offer Top-notch software development solutions and IT consultancy services to aid and achieve your business goals.</p>
            <Link className={styles.btn} to="/contactUs">Contact Us</Link>
            </div>
            <img src="/pngfind.com-laptops-png-2478300.png" alt="laptop" style={{ maxWidth : '100%' }} />
         </div>
         <ShortIntro />
         <Services />
         <HireUsSection />
         <WhyChooseUs />
         <HappyClients />
       </Layout>
  )
}
