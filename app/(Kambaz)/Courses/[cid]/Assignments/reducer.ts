import { createSlice } from "@reduxjs/toolkit"
import { Assignments } from "@/app/(Kambaz)/Database"
import { v4 as uuidv4 } from "uuid";


//IMPLEMENT addAssignment 
//deleteAssighnment 
//updateAssignmeny
/* eslint-disable @typescript-eslint/no-explicit-any */


const initialState = {
  assignments: Assignments,
};

//creating and naming the slice 
//settung its initial statce 
//declaring reducer functions
//new module is in action.payload 
//hitting save creates the new assignment and add its to the assignments 
//array variable, which now must contain the newly created assinment 
//hitting cancel does not create a new assignment, and navigates back to the assignments 
//screen

const assignmentsSlice = createSlice({
  name: "Assignments",
  initialState,
  reducers: {
    //MAKING THE ADD ASSIGNMENT 
    //SHOULD ALSO NAVIGATE TO THE THE ASSIGNMENT EDUTIR 
    //SHOULD EDIT NAME, DESCRIPTION, POINTS, DUE DATE, AVAILABLE FROM DATE 
    //AVAIALBLE TO DATE
    //
    addAssignment: (state, { payload: assignments }) => {
      const newAssigment: any = {
        _id: assignments._id ?? uuidv4(),
        title: assignments.title,
        course: assignments.course,
        description: "",
        points: 0,
        dueDate: new Date().toISOString(),
        availableFrom: new Date().toISOString(),
        availableUntil: new Date().toISOString(),
      };
      state.assignments = [...state.assignments, newAssigment] as any;
    },
    updateAssignment: (state, { payload: assignments }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignments._id ? assignments : a
      ) as any;
    },
    //delete assignment function
      deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId);
    },


  },
});

//export all reducer functions 
export const { addAssignment, updateAssignment, deleteAssignment, } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
