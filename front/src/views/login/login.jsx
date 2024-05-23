
import styles from './login.module.css'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import  Swal from 'sweetalert2'
import { useNavigate, Link} from 'react-router-dom'
import { setLogin } from '../../reducer/login/loginSlice'


const Login = () => {
 useEffect(()=>{

 },[])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  


  const [values,setValues] = useState({
  userName:"",
  password:""
})


const handleInputChange2 = (event) => {
const {name,value} = event.target;
setValues({
  ...values,
  [name]:value,
})  
}



const handleForm = async (event) => {
  event.preventDefault()
          await axios.post('http://localhost:3001/user/login',values)
          .then(response=>{
          
            dispatch(setLogin({
              idUser:response.data.newUser[0].idUser,
              login:response.data.login,
              userName:response.data.newUser[0].userName   
            }))

            const mensaje = response.data.message

            Swal.fire({
              title: "Login Exitozo!",
              text: mensaje,
              icon: "success"
            });  

           
              navigate("./home")
           

          })

}



  return (
    <div className={styles.fondo}>  
    <div className={styles.contenedor}>
    <div className={styles.contentFoto} >
    <h1>We help you create smiles</h1> 
 <img src="https://segurospersonales.chubbinsured.com/wp-content/uploads/2020/01/dental-1024x683.png"
           alt="desntinista"
           width='100%'
            />
    </div>
    <div className={styles.contentForm}>
       <p>Login Users</p>

       <form className={styles.form}  onSubmit={handleForm} > 

       <input type="text" value={values.userName} name="userName" id="userName" placeholder='usuario' onChange={handleInputChange2} />
              <br />
              <input type="password" value={values.password} name="password" id="password" placeholder='password' onChange={handleInputChange2} />
              <br />           
          
          <button type='submit' className={styles.button}>Login   User</button> 
          <Link  to="/register"><button type='button' className={styles.button}>Register</button> </Link>
          <br />
        
        
      </form>
     
    </div>
    
        
  </div>   
</div>
  )
}

export default Login