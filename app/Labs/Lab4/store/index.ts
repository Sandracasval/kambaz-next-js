import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../ReduxExamples/AddRedux/addReducer";
import todosReducer from "../ReduxExamples/todos/todosReducer";
//application state can mantain data from various components 
//or screens across an entire application 
//each has a separate reduce that is combined into a single store
const store = configureStore({
  reducer: { helloReducer,
     counterReducer,addReducer, todosReducer,
   }});
export default store;