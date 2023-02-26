import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email:"",
    username:"",
    phone:"",
    password:""
}
export const registerSlice = createSlice({
    name:'register',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.phone = action.payload.phone;
            state.password = action.payload.phone;
        }
    }
});

export const {addUser} = registerSlice.actions;
export default registerSlice.reducer;