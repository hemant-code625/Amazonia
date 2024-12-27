import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle",
  isAuthenticated: false,
  accessToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // fetching user from localstorage and setting isAuthenticated to true
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // storing user details in localstorage and tokens in cookies
      localStorage.setItem("accessToken", action.payload.accessToken);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
