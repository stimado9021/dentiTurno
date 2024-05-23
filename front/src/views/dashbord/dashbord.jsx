import React from 'react'
import styles from "./dashbord.module.css"
import Navbar from '../../components/navbar/navbar'
import Content from '../../components/content/content'
import { useEffect,useState } from 'react'
import {setTurns} from '../../reducer/turns/turnsSlice'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'



const Dashbord =  () => {
const {idUser,userName}=useSelector(state=>state.login)

  const dispatch=useDispatch()
  const [data, setData] = useState([]);
 
   useEffect(() => { 
    const fetchData = async (id) => {
      try {               
        const response = await axios.get(`http://localhost:3001/user/${id}`);
        dispatch(setTurns(response.data.turns));
      
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchData(idUser);
  }, []);

  return (
   
    <div>
      <Navbar />
      <Content />
  
      
    </div>
  )
}

export default Dashbord