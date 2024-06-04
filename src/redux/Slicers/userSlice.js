// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "default_value_1",
  profile_image: "",
  email: "example@gmail.com",
  password: "string",
  address: "",
  nif: "",
  date_birth: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profile_image = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setNif: (state, action) => {
      state.nif = action.payload;
    },
    setDateBirth: (state, action) => {
      state.date_birth = action.payload;
    },
    // Adicione outros reducers conforme necessário
  },
});

export const {
  setName,
  setProfileImage,
  setEmail,
  setPassword,
  setAddress,
  setNif,
  setDateBirth,
} = userSlice.actions;

export default userSlice.reducer;
