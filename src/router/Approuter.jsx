import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './../pages/Login';
import Navbar from './../components/Navbar';
import PrivateRouter from './PrivateRouter';
import News from './../pages/News';

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<PrivateRouter/>} >
           <Route path="" element={ <News/>  }/>
        </Route>
         
          <Route  path="/login" element={ <Login/>  }  >

          </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Approuter