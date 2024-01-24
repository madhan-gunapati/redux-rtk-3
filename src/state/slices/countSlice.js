import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:'countSlice',
    initialState:{
        count:0
    },
    reducers:{
        'add':(state)=>{state.count += 1},
        'sub':(state)=>{state.count -= 1},
        'add_val':(state, action)=>{state.count += action.payload.value}
    }
})

export const {add , sub, add_val} = countSlice.actions;
export default countSlice.reducer