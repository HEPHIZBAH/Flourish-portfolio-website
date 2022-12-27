import React from 'react'
import Layout from '../components/Layout'
import WhyChooseUs from '../components/WhyChooseUs'
import HireUsSection from "../components/HireUsSection"
import * as styles from '../styles/home.module.css'
import AboutFounder from '../components/AboutFounder'
import MissionVision from '../components/MissionVision'

export default function aboutUs() {
  return (
    <Layout>
    <div className={styles.header}>
    <img src="/—Pngtree—modern flat design concept of_5332905.png" alt="laptop" style={{ maxWidth : '100%' }} />
      <div>
      <h1 className={styles.aboutUsHeader}>About Us</h1>
      <p>Flourish DevOps is a platform for developers across the globe to enhance their skills, 
        get jobs, work on project hereby gaining a lot of experience that is needed in the technology world. 
        There is a lot of opportunity for developers under this platform as developer can decide to either work 
        remotely or relocate depending on the requirement of the project.</p>
        </div> 
     </div>
     <AboutFounder />
     <MissionVision />
     <WhyChooseUs />
     <HireUsSection />
    </Layout>
  )
}

