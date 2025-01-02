import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 email:"",
 password:"",
}

export const yetkiSlice = createSlice({
  name: 'yetkiSlice',
  initialState,
  reducers: {
    kullaniciOlustur:(state,action)=>{
     
      console.log(action.payload)
      state.email=action.payload.email;
      state.password=action.payload.password;
    },
    kullaniciSil:(state)=>{
      state.email="";
      state.password="";
    }
  }
})

export const {kullaniciOlustur, kullaniciSil } = yetkiSlice.actions

export default yetkiSlice.reducer