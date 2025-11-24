import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
//THIS INTEGRATES THE USER ROUTES IMPLEMENTED IN THE SERVER
export const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export const USERS_API = `${HTTP_SERVER}/api/users`;

//the client function signin posrs a credential object containing
//the username and password expected by the server
//if the credentials are found, the response should contain the logged in user
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/signin`,
    credentials
  );
  return response.data;
};

//this signup client posts the new user to the Web API as shown below
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

//the updateUser function sends user updates to the server to be saved to the
//database
export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(
    `${USERS_API}/${user._id}`,
    user
  );
  return response.data;
};
//implenting a function to retrieve the account information from the server route
//implemented above as shown below
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};

//ADD A CLIENT FUNCTION THAT CAN POST TO THE SIGNOUT ROUTE
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

//the findAllUsers function sends a GET request to the server and awaits for the
//server reponse containing an array of users in
//in the data property
export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

//this encodes the role in the query string of the url
export const findUsersByRole = async (role: string) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
//encodes the name in the query string which the sever can use to filter
//users by their first and lastName
export const findUsersByPartialName = async (name: string) => {
  const response = await axios.get(`${USERS_API}?name=${name}`);
  return response.data;
};

//the user interface can interact with the server using the findUserById client function
export const findUserById = async (id: string) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

//client function integrates with the deleteUser route in the server
export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};
//the createUser function interacts with the route created aboe
//this posts the new user object to the server
export const createUser = async (user: any) => {
  const response = await axios.post(`${USERS_API}`, user);
  return response.data;
};
