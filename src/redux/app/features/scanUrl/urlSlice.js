import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0
}

export const urlSlice = createSlice({
    name:'scanUrl',
    initialState,
    reducers:{
        increment: (state) => {
            state.value =state + 1
          },
    }   
})

export const {increment} = urlSlice.actions  ;
export default urlSlice.reducer;