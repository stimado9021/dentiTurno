import React from 'react'
import './tabla.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { cancelTurns } from '../../reducer/turns/turnsSlice'
import axios from 'axios'
const voltearFecha = (fec)=>{
 var seg =fec.split("-")
  const newFec = seg[2]  + '-' + seg[2]  + '-' + seg[0] 
  return newFec

}
 
const Tabla =  () => {
  const dispatch = useDispatch()
  const {listTurns} = useSelector(state=>state.turns)
 const cancelarCita = async(id) => {
   dispatch(cancelTurns({id}))
   try {

    const response = await axios.put(`http://localhost:3001/turns/${id}`);
    console.log(response)
   } catch (error) {
    console.error(error)
   }
 }
  return (
    <div>
        <h2>Turns List</h2>
    <table >
    
    <tr> <th>description</th> <th>fechaCita</th> <th>horaCita</th>
    <th>status</th><th>Accion</th>
    </tr>
    
    {listTurns.length>0 ?
 
  listTurns.map((item) =>  (
     
           <tr key={item.id}> 
            <td>{item.description}</td> 
            <td>{voltearFecha(item.fechaCita)}</td> 
            <td>{item.horaCita}</td>
            <td>{item.active}</td>
            <td><button  className={{background:'red',color:'white'}}  onClick={()=>{cancelarCita(item.id)}}>Cancelar Cita {item.id} </button></td>
           </tr>
    ) ): (<tr><td colSpan={5}>Este Usuario No tiene turnos agendados</td></tr>)}
   
    
    </table>
    </div>
  )
}

export default Tabla