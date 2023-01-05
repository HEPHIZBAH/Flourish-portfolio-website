import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Services from "../components/Services"
import ShortIntro from "../components/ShortIntro"
import WhyChooseUs from "../components/WhyChooseUs"
import HappyClients from "../components/HappyClients"
import HireUsSection from "../components/HireUsSection"



export default function contactUs() {
  return (
    <Layout>
   
    <div className={styles.formHeading}>
            <h1>Contact Us</h1>
            <p>We will like to hear from you</p>
            <div className={styles.intro}>
              <div>
                <h2>Let’s Build Something Great Together!</h2>
              </div>
              <div>
            <form className={styles.form}>
            <div><input type="text" name="Name" placeholder="Name" className={styles.formname} /></div> 
            <div> <input type="email" name="Email" placeholder="Email" className={styles.formemail} /></div>
            <div> <input type="number" name="number" placeholder="Phone number" className={styles.formemail} /></div>
            <div><textarea name="" id="" cols="30" rows="10" placeholder="Message" className={styles.formtext} ></textarea></div>
            <div> <input type="button" value="Submit" className={styles.formbutton} /></div>
          </form>
            </div>
        </div>
      </div>
      <ShortIntro />
         <Services />
         <HireUsSection />
         <WhyChooseUs />
         <HappyClients />
    </Layout>
  )
}
