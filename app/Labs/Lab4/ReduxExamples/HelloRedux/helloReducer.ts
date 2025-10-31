import { createSlice } from "@reduxjs/toolkit";
//instead of mantaining state within any particular component, 
//Redux declares and mantains state in separate reducers which then provide 
//the state to the entire application 

//the helloReducer mantains a state that is just a message string initialized to 
//hello world
const initialState = {
  message: "Hello World",
};
//name is the name for the slice 
//initialstate, is the default date for this slice 
//reducers is an object that will contain all the functions that can change this slices state 

const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});
//this exports the reducer function that reduz needs to handle update to this 
//part of the global state 
export default helloSlice.reducer;