import Home from './views/home/home'
import Register from './views/register/register'
import Login from './views/login/login'
import Dashbord from './views/dashbord/dashbord';
import Logout from './views/logout/logout';
import AddTurns from './views/addTurns/addTurns';
import Navbar from './components/navbar/navbar';
import axios from 'axios';
import { Routes, Route,useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
 
const location = useLocation()

  return (
    <div >
   
    
    <Routes>
						<Route  path='/home' element={<Home />}/>
						<Route  path='/register' element={<Register />}/>
						<Route  path='/' element={<Login />}/>
            <Route  path='/dashbord' element={<Dashbord />}/>
            <Route  path='/logout' element={<Logout />}/>
            <Route  path='/addTurns' element={<AddTurns />}/>
    </Routes>
     
      
    </div>
  )
}

export default App
