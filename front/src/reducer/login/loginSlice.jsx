import { createSlice } from "@reduxjs/toolkit";
const initialState={ 
    idUser:0,
    login:false,   
    userName:""
}
export const loginSlice = createSlice({
    name: 'login',
    initialState:initialState,
    reducers:{
        setLogin(state, action){
            state.idUser=action.payload.idUser;
            state.login=action.payload.login;
            state.userName=action.payload.userName;
          
        },  
        unsetLogin(state,action){
            state.idUser=action.payload.idUser;
            state.login=action.payload.login;   
            state.userName=action.payload.userName;
        }  
    }
})
export const {setLogin,unsetLogin} = loginSlice.actions
export default loginSlice.reducer