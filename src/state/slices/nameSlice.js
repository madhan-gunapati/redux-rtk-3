import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name:'nameSlice',
    initialState:{
        fname:'ravi',
        lname:'kumar'
    },
    reducers:{
        'name_change':(state)=>{state.fname = 'kumar' ; state.lname='ravi'},
        'font_change':(state)=>{state.fname = 'Ravi' ; state.lname='Kumar'}
    }
})

export const {name_change , font_change} = nameSlice.actions;
export default nameSlice.reducer 