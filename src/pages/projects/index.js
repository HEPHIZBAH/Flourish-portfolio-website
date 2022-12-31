import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function projects() {
  return (
    <Layout>
    <div className={styles.portfolio}>
     <h1>Portfolio Gallery</h1>
     <h2>Projects Created By Flourish DevOps</h2>
     <p>Walk Through Our Past Projects To find Us Suitable for The Job</p>
    <div className={styles.showcaseone}>
           <div>
             <img src="/smartmockups_lc6xjcwg.png" alt="laptop" style={{ maxWidth : '100%'}}/>.  
           </div>
           <div>
             <img src="/smartmockups_lc723caa.png" alt="laptop" style={{ maxWidth : '100%'}}/>.
           </div>
    </div>
    <div className={styles.showcaseone}>
           <div>
             <img src="/smartmockups_lc6z82i5.png" alt="laptop" style={{ maxWidth : '100%'}}/>.  
           </div>
           <div>
             <img src="/smartmockups_lc6ybofk.png" alt="laptop" style={{ maxWidth : '100%'}}/>.
           </div>
    </div>
    <div className={styles.showcaseone}>
           <div>
             <img src="/smartmockups_lc70oltt.png" alt="laptop" style={{ maxWidth : '100%'}}/>.  
           </div>
           <div>
             <img src="/smartmockups_lc70xivo.png" alt="laptop" style={{ maxWidth : '100%'}}/>.
           </div>
    </div>
    <div className={styles.showcaseone}>
           <div>
             <img src="/smartmockups_lc711t97.png" alt="laptop" style={{ maxWidth : '100%'}}/>.  
           </div>
           <div>
             <img src="/smartmockups_lc72sh47.png" alt="laptop" style={{ maxWidth : '100%'}}/>.
           </div>
    </div>
    <div className={styles.showcaseone}>
           <div>
             <img src="/smartmockups_lc72m0gg.png" alt="laptop" style={{ maxWidth : '100%'}}/>.  
           </div>
           <div>
             <img src="/smartmockups_lc71ya4b.png" alt="laptop" style={{ maxWidth : '100%'}}/>.
           </div>
    </div>
    </div>
    </Layout>
  )
}
