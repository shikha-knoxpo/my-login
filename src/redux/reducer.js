import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: "1",
      email: "admin@propelius.tech",
      username: "admin@propelius.tech",
      phone: "1111111111",
      password: "123456@",
    },
  ],
};
export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action) => {
    //   state.email = action.payload.email;
    //   state.username = action.payload.username;
    //   state.phone = action.payload.phone;
    //   state.password = action.payload.phone;
      state.user = [...state.user,action.payload]
    },
  },
});

export const { addUser } = registerSlice.actions;
export default registerSlice.reducer;
