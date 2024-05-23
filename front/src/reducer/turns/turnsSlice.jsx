import { createSlice } from "@reduxjs/toolkit";
const initialState={  
    listTurns:[]
}

export const turnsSlice = createSlice({
    name: 'turns',
    initialState:initialState,
    reducers:{
        setTurns(state, action){
            state.listTurns=action.payload                                
        },
        cancelTurns(state,action){
          
            state.listTurns=state.listTurns.map((t)=>{                
                    if(t.id === action.payload.id){
                        return {...t,active:"cancelada"} 
                    }
                      return t           
                    
                  
            })
        }             
    }
})
export const {setTurns,cancelTurns} = turnsSlice.actions
export default turnsSlice.reducer