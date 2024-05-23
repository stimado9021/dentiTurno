import React from 'react'
import { Link } from 'react-router-dom'

import styles from './navbar.module.css'



const Navbardos = () => {
  return (
    <div>
      <header>
		<div className={styles.contenedor}>
			<div className="logo">
       <Link to="/">
		<small style={{color:'yellow', textShadow: 'black 0.1em 0.1em 0.2em',fontSize:'28px'}}>Healthy</small>
		<strong style={{color:'white', textShadow: 'black 0.1em 0.1em 0.2em',fontSize:'40px'}}>Teeth</strong> 
		</Link> 
			
			</div>
			<nav className="menu">
				<ul>					
				<li><Link to="/register">Register</Link></li>
				<li><Link to="/login">Login</Link></li>			
				</ul>        
			</nav>
		</div>
	</header>
    </div>
  )
}

export default Navbardos