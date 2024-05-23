import React from 'react'
import Navbardos from '../../components/navbar/navbardos'
import styles from './home.module.css'
import Navbar from '../../components/navbar/navbar'
import Content from '../../components/content/content'
import ContentFoto from '../../components/contentFoto/contentFoto'
import { useEffect } from 'react'


const Home = () => {
  
   return (
    <div className={styles.fondo}>
     <Navbar />
      <div className={styles.contenedor}>
        <div className={styles.contentFoto} >
        <h1>We help you create smiles</h1> 
     <img src="https://segurospersonales.chubbinsured.com/wp-content/uploads/2020/01/dental-1024x683.png"
               alt="desntinista"
               width='100%'
                />
        </div>
        <div className={styles.contentForm}>
           <p>a bright smile is the commitment to our patients </p>
        </div>

      </div>
        
      
    </div>
  )
}

export default Home