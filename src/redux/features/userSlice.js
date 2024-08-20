import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
  username: "",
  role: "",
  companyId: 0,
  // email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isUser = true;
      state.username = action.payload.username;
      state.role = action.payload.role;
      state.companyId = action.payload.companyId;
      console.log(action.payload);
      // state.email = action.payload.email;
    },
    userLogout: (state) => {
      state = initialState;
      localStorage.removeItem("hrmapToken");
    },
  },
});
export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
