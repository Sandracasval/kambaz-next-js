"use client";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
export default function KambazNavigation() {
  const pathName = usePathname() || "";
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center ${
          pathName.toLowerCase().startsWith("/account")
            ? "bg-white"
            : "bg-black"
        }`}
      >
        <Link
          href="/Account"
          id="wd-account-link"
          className={`text-decoration-none ${
            pathName.toLowerCase().startsWith("/account")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathName.toLowerCase().startsWith("/account")
                ? "text-danger"
                : "text-white"
            }`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>

      <ListGroupItem
        className={`border-0 text-center ${
          pathName.toLowerCase().startsWith("/dashboard")
            ? "bg-white"
            : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          id="wd-dashboard-link"
          className={`text-decoration-none ${
            pathName.toLowerCase().startsWith("/dashboard")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <AiOutlineDashboard
            className={`fs-1 ${
              pathName.toLowerCase().startsWith("/dashboard")
                ? "text-danger"
                : "text-danger"
            }`}
          />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      {/* complete styling the rest of the links */}
      <ListGroupItem
        className={`border-0 text-center ${
          pathName.toLowerCase().startsWith("/courses")
            ? "bg-white"
            : "bg-black"
        }`}
      >
        <Link
          href="/Dashboard"
          id="wd-courses-link"
          className={`text-decoration-none ${
            pathName.toLowerCase().startsWith("/courses")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <FaBook
            className={`fs-1 ${
              pathName.toLowerCase().startsWith("/courses")
                ? "text-danger"
                : "text-danger"
            }`}
          />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      {/*Calendar */}
      <ListGroupItem
        className={`border-0 text-center ${
          pathName.toLowerCase().startsWith("/calendar")
            ? "bg-white"
            : "bg-black"
        }`}
      >
        <Link
          href="/Calendar"
          id="wd-courses-link"
          className={`text-decoration-none ${
            pathName.toLowerCase().startsWith("/calendar")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <IoCalendar
            className={`fs-1 ${
              pathName.toLowerCase().startsWith("/calendar")
                ? "text-danger"
                : "text-danger"
            }`}
          />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      {/*INBOX */}
      <ListGroupItem
        className={`border-0 text-center ${
          pathName.toLowerCase().startsWith("/inbox") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Inbox"
          id="wd-courses-link"
          className={`text-decoration-none ${
            pathName.toLowerCase().startsWith("/inbox")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <FaInbox
            className={`fs-1 ${
              pathName.toLowerCase().startsWith("/inbox")
                ? "text-danger"
                : "text-danger"
            }`}
          />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      {/*Labs  */}
      <ListGroupItem
        className={`border-0 text-center ${
          pathName.toLowerCase().startsWith("/labs") ? "bg-white" : "bg-black"
        }`}
      >
        <Link
          href="/Labs"
          id="wd-courses-link"
          className={`text-decoration-none ${
            pathName.toLowerCase().startsWith("/labs")
              ? "text-danger"
              : "text-white"
          }`}
        >
          <GoGear
            className={`fs-1 ${
              pathName.toLowerCase().startsWith("/labs")
                ? "text-danger"
                : "text-danger"
            }`}
          />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}
