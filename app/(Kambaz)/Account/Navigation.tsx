"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
//reimplenting the account naviggation sidebar so that iy hides the SignIN and Sinup
///if a user is alreade signed in
//hides the profile link if a user is not yet signed in
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function AccountNavigation() {
  const pathName = usePathname();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink
            as={Link}
            href={link}
            active={pathName.endsWith(link.toLowerCase())}
          >
            {link}
          </NavLink>
        </NavItem>
      ))}
      {/**shows the users only for admin */}
      {currentUser && currentUser.role === "ADMIN" && (
        <NavItem>
          <NavLink
            as={Link}
            href="/Account/Users"
            active={pathName.endsWith("Users")}
          >
            Users
          </NavLink>
        </NavItem>
      )}
    </Nav>
  );
}
