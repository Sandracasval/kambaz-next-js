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
