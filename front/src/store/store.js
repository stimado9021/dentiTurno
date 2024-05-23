import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../reducer/user/userSlice'
import turnsReducer from '../reducer/turns/turnsSlice'
import loginSlice from '../reducer/login/loginSlice'
export default configureStore({
    reducer:{
        user:userReducer,
        turns:turnsReducer,
        login:loginSlice
    }
})