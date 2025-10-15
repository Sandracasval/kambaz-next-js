"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathName = usePathname();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {/**Replacing the code with this new one for signin */}
      <Link
        href="Signin"
        id="wd-signin-screen-link"
        className={`list-group-item ${
          pathName === "/Account/Signin"
            ? "active border-0"
            : "text-danger border-0"
        }`}
      >
        Signin
      </Link>
      {/**Replacing the old code  for signup again */}
      <Link
        href="Signup"
        id="wd-signup-screen-link"
        className={`list-group-item ${
          pathName === "/Account/Signup"
            ? "active border-0"
            : "text-danger border-0"
        }`}
      >
        Signup
      </Link>
      {/*** Replacing the old code for profile */}
      <Link
        href="Profile"
        id="wd-profile-screen-link"
        className={`list-group-item ${
          pathName === "/Account/Profile"
            ? "active border-0"
            : "text-danger border-0"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
