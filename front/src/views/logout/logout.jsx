import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import {useDispatch} from 'react-redux';
import {unsetLogin} from '../../reducer/login/loginSlice'


const Logout = () => {
    const navigate =useNavigate()
    const dispatch=useDispatch()
   

      useEffect(()=>{
        const exitSeccion = ()=>{
          dispatch(unsetLogin({
            idUser:0,
            login:false,   
            userName:""
          }))
 Swal.fire({
                  title: "Exit Sesssion!",
                  text: 'Session Cerrada Con  Exito',
                  icon: "success",
                }); 
              setInterval(()=>{
                  navigate("/")
                },1000)
        }
        exitSeccion()

      },[])

  return (
    <div>
      
        
    </div>
  )
}

export default Logout