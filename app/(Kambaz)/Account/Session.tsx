import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
/* eslint-disable @typescript-eslint/no-explicit-any */

//THIS FETCHES THE CURRENTUSER FROM THE SERVER AND STORES IN THE STORE SO
//THAT THE REST OF THE APPLICATION CAN HAVE ACCESS TO THE CURRENT USER
//dispatch saves the logged in user to the redux store so that all components
//in the app can access it
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
