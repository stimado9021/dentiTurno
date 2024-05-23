import React  from 'react'
import { useState,useEffect } from 'react'
import {setTurns} from '../../reducer/turns/turnsSlice'
import Navbar from '../../components/navbar/navbar'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'

import styles from  './addTurns.module.css'

const AddTurns = () => {     
    const {idUser} = useSelector(state=>state.login)
     const [values,setValues] = useState({
        description:"",
        fechaCita:"",
        horaCita:"",
        userId:idUser      
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
      
      await axios.post('http://localhost:3001/turns/create',values)
            .then(response=>{              
                const mensaje= response.data          
                    Swal.fire({
                      title: "Register of turns success!",
                      text: mensaje.message,
                      icon: "success"
                    });                         
            })
      }    
    
  return (
   <div>
    <Navbar />
    <div className={styles.contenedor}>
     
        <h2>Add Turns</h2>
        <div className={styles.conteForm}>
                <form action="" onSubmit={handleForm}>
                    <label >Description</label>
                    <select type="text" value={values.description} name="description"  id="description" onChange={handleInputChange}>
                        <option value="Calsa de Muelas0">Elija Consulta</option>
                        <option value="Calsa de Muelas">Calsa de Muelas</option>
                        <option value="Limpieza Dental">Limpieza Dental</option>
                        <option value="Blanqueamiento de Dientes">Blanqueamiento de Dientes</option>
                        <option value="Protesis Dental">Protesis Dental</option>
                       
                    </select>
                    
                    <label >Fecha de la Cita</label>
                    <input type="date" name="fechaCita" id="fechaCita" onChange={handleInputChange}/>
                    
                    <label >Hora de la Cita</label>
                    <input type="time" name="horaCita" id="horaCita" onChange={handleInputChange}/>
                    <br />  
                    <br />  
                    <button className={styles.button} type='submit'>Save Turns</button>



                </form>
        </div>
    </div>
    </div>
  )
}

export default AddTurns