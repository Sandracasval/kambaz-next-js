import { createSlice } from "@reduxjs/toolkit";
//implenting an account reducer to keep track of the currently 
//signed in user and to share it across the entire application 
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;