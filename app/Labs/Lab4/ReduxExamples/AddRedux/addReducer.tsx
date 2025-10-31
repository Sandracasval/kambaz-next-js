import { createSlice } from "@reduxjs/toolkit";
//a reducer than can keep track of the arithemtic addition 
//of two parameters 
//when we call add reducer function, the parameters are encoded 
//as an object into a payload property found in the action parameter 
//passed to the reducer function 

//functions can extract parameters a and b as 
//action action.payload.a and then use parameters to update the sum 
//variable 
const initialState = {
  sum: 0,
};
const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});
export const { add } = addSlice.actions;
export default addSlice.reducer;