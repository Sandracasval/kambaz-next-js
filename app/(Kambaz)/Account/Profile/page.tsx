"use client";
import Link from "next/link";
import FormControl from "react-bootstrap/FormControl";
import FormSelect from "react-bootstrap/FormSelect";
import { Button } from "react-bootstrap";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";

//refactor the Profile screen to retrieve the current User from the Account reducer
//if there is no currentUser, then the screen should redirect to the SignIn screen
//if there is a currentUser, then the Profile screen should populate a form with the user's information.
//if the current user sclicks a sign out button then the current user should be nulled
//and navigate to the SignIn screen

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return redirect("/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <>
          {/**REPLACE EVERYTHING WITH FORM CONTROL */}

          <FormControl
            id="wd-username"
            className="mb-2"
            defaultValue={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />

          <FormControl
            id="wd-password"
            className="mb-2"
            defaultValue={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />

          {/**firsname*/}
          <FormControl
            id="wd-firstname"
            className="mb-2"
            defaultValue={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          {/**lastname */}
          <FormControl
            id="wd-lastname"
            className="mb-2"
            defaultValue={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          {/**date of birth */}
          <FormControl
            id="wd-dob"
            type="date"
            className="mb-2"
            defaultValue={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          {/**email  */}
          <FormControl
            id="wd-email"
            className="mb-2"
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <FormSelect
            id="wd-role"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="FACULTY">FACULTY</option>
            <option value="STUDENT">STUDENT</option>
          </FormSelect>
          {/** button to sign out  */}
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </>
      )}
    </div>
  );
}
