            import React from 'react'
import { useSelector } from 'react-redux'
import { yetkiSlice } from './../features/yetkiSlice';
import Login from '../pages/Login';
import { Navigate, Outlet } from 'react-router-dom';
            
            const PrivateRouter = () => {

                    const {email,password}=useSelector((state)=>state.yetkiSlice)


              return  email==="helen@gmail.com" && password==="1234" ? <Outlet/>  : (<Navigate to="/login"/>)
            }
            
            export default PrivateRouter