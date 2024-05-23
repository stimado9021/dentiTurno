import React, { useState,useEffect } from 'react'
import Navbardos from '../../components/navbar/navbardos'
import Login from '../login/login'
import { useNavigate,Link } from 'react-router-dom';
import styles from './register.module.css'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import {setUserName} from '../../reducer/user/userSlice'


const Register = () => {

const dispatch=useDispatch()
const navigate = useNavigate()


const [values,setValues] = useState({
  name:"",
  email:"",
  fechaNac:"",
  dni:"",
  userName:"",
  password:""
})



const handleInputChange = (event) => {
  const {name,value} = event.target;
  setValues({
    ...values,
    [name]:value,
  })
  
}
      const handleForm = async (event) => {
  event.preventDefault()
  dispatch(setUserName({
   name:values.name,
    email:values.email,
    fechaNac:values.fechaNac,
    dni:values.dni,
    userName:values.userName,
    password:values.password
  }))
        await axios.post('http://localhost:3001/user/registro',values)
      .then(response=>{
        
        const mensaje= response.data

                          Swal.fire({
                        title: "Registro exitozo!",
                        text: mensaje.message,
                        icon: "success"
                      });   
        navigate('/')
      
      })
}


  return (
    <div className={styles.fondo}>       
        <div className={styles.contenedor}>
        <div className={styles.contentFoto} >
        <h3>We help you create smiles</h3> 
     <img src="https://segurospersonales.chubbinsured.com/wp-content/uploads/2020/01/dental-1024x683.png"
               alt="desntinista"
               width='100%'
                />
        </div>
        <div className={styles.contentForm}>
           <p>Registe Users</p>

           <form className={styles.form} action='' onSubmit={handleForm} > 

              <input type="text" value={values.name} name="name" id="name" placeholder='Names' onChange={handleInputChange} />
            
              <input type="email" value={values.email} name="email" id="email"  placeholder='Email' onChange={handleInputChange} />
            
              <div className={styles.dosjuntos}>
                 <input type="date" value={values.fechaNac} name="fechaNac" id="fechaNac"  placeholder='Birthdate' onChange={handleInputChange} />
               
                <input type="text" value={values.dni} name="dni" id="dni" placeholder='DNI' onChange={handleInputChange} />
              
              </div>
              
              <input type="text" value={values.userName} name="userName" id="userName" placeholder='usuario' onChange={handleInputChange} />
           
              <input type="password" value={values.password} name="password" id="password" placeholder='password' onChange={handleInputChange} />
              <br />
             
              <button type='submit' className={styles.button}>Save User</button> 
            
              <p> <Link  to="/"> <button type='button' className={styles.button}>login</button> </Link></p>	
          </form>
        </div>
            
      </div>   
    </div>
  )
}

export default Register