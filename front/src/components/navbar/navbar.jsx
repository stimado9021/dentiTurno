import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const Navbar = () => {
	
	const {userName} = useSelector(state=>state.login)
	
	
  return (
    <div>
      <header>
		<div className={styles.contenedor}>
		<div className={styles.logo}>
				
					<small style={{color:'yellow', textShadow: 'black 0.1em 0.1em 0.2em',fontSize:'28px'}}>Healthy</small>
					<strong style={{color:'white', textShadow: 'black 0.1em 0.1em 0.2em',fontSize:'40px'}}>Teeth</strong> 
			
				<div>
					<div className={styles.cabeza}>
						<ul class={styles.nav}>
					
							<li>
							
								<div >
									<img className={styles.foto} src="119601799_2078027518995815_8345434599790124682_n.jpg" alt="" />
								</div>
								
								<a >BienVenido Usuario <strong>{userName}</strong></a>	
								
								
								
														
							</li>							
						</ul>
					</div>
				</div>
		</div>
			<nav className="menu">
			
				<ul>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/dashbord">Gestionar Citas</Link></li>
					<li><Link to="/addTurns">Add Turns</Link></li>								    						
					<li><Link to="/logout">Logout</Link></li>										  
				</ul>
				    
			</nav>
		</div>
	</header>
    </div>
  )
}

export default Navbar