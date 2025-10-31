"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/dist/client/components/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */

//refactoring the account screen so that the default screen is signin if no one is signed up yet
//profile is someone is signed in

export default function AccountPage() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}
