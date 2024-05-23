import { createSlice } from "@reduxjs/toolkit";
const initialState={
    nombre:"",
    email:"",
    fechaNac:"",
    dni:"",
    userName:"",
    password:""
}
export const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{
        setUserName(state, action){
            state.nombre=action.payload.nombre;
            state.email=action.payload.email;
            state.fechaNac=action.payload.fechaNac;
            state.dni=action.payload.dni;
            state.userName=action.payload.userName;
            state.password=action.payload.password;
        }    
    }
})
export const {setUserName} = userSlice.actions
export default userSlice.reducer