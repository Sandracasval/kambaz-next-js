"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as db from "../../Database";

import FormControl from "react-bootstrap/FormControl";

//refactoring the SignIn screen by adding a CREDENTIALS STATE VARIABLE FOR USERS TO ENTER THEIR CREDENTIALS
//when users click the SignIn button: search for a user with the credentials
//of there's a user that matches, store it in the reducer by dispatching it to the
//AccountReducer using the setCurrentUser reducer function.
//Ignore the SignIn attempt if there's no match

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {/**this is for the username */}
      <FormControl
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        id="wd-username"
        placeholder="username"
        className="mb-2"
      />
      {/**this is for the password */}
      <FormControl
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      {/**this is for the sign in button */}
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        {" "}
        Sign in{" "}
      </Button>

      {/** this is for the signup link */}
      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
