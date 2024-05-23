import React from 'react'
import styles from './content.module.css'
import Tabla from '../tabla/tabla'
import Register from '../../views/register/register'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'




const Content = () => {

  
  
  return (
   
    <div className={styles.contenedor} >
   
     <Tabla />
   </div>
  )
}

export default Content