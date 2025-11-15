import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};
//creating asynchronous versions of the functions that we had previously developed

//get the assignment object
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;
export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};
//update the title of the assignment object
export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

//getting the todos
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;
export const fetchTodos = async () => {
  const response = await axios.get(TODOS_API);
  return response.data;
};
//adding a removeTodod client function that sends a deleteRequest to the server
//the server will respond with an array of the surviving todos
export const removeTodo = async (todo: any) => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};
//ading deleteTodo
//this version uses axios.delete insteas od axios.get so that it matches the
//servers's app.delete as well as the Url without the trailing /delete
export const deleteTodo = async (todo: any) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

//creating new data in a server asynchronously
//requests creating a new todo item from the server as shown below
export const createNewTodo = async () => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

//adding the postNewTodo function
//this function posts new todo objects to the server
//the second agrument in the axios.post() method contains the new todo object instance sent to the server
export const postNewTodo = async (todo: any) => {
  const response = await axios.post(`${TODOS_API}`, todo);
  return response.data;
};

//NEW VERSION OF UPDATE TODO FUNCTION THAT PUTS UPDATES TO THE SERVER AS SHOWN BELOW
//THE SECOND ARGUMENT IN THE AXIOS.PUT() METHOD CONTAINING THE UPATED TODO OBJECT INSTANCE
//SENT TO THE SERVER. THE RESPONSE CONTAINS A STATUS
export const updateTodo = async (todo: any) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};
