import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'user',
  initialState:{
    loginUser:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : null
  },
  reducers: {
    userData: (state,action) =>{
        state.loginUser = action.payload
    }
  },
})
export const {userData} = counterSlice.actions

export default counterSlice.reducer