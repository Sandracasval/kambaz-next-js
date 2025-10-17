"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import IndividualControlButtons from "./IndividualControlButtons";
import { FaBook } from "react-icons/fa6";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.Assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      {/**Implementing new code again for assignments */}
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div
            id="wd-assignments-title"
            className="wd-title p-3 ps-2 bg-secondary"
          >
            <BsGripVertical /> ASSIGNMENTS <AssignmentControlButtons />
          </div>
          {/**this code is the repetitive one */}
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroupItem
                key={
                  assignment._id ?? `${assignment.title}-${assignment.course}`
                }
                className="wd-lesson p-3 ps-1"
              >
                <BsGripVertical />
                <FaBook />
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link"
                >
                  {assignment.title}
                </Link>
                <IndividualControlButtons />
                <ListGroup>
                  <ListGroupItem>
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not Available until</strong> May 6 at 12:00 am |
                    <br /> <strong>Due</strong> May 13 at 11:59 pm | 100 pts
                  </ListGroupItem>
                </ListGroup>
              </ListGroupItem>
            ))}
          {/**repetitive code */}
        </ListGroupItem>
      </ListGroup>
      {/**
       *
       *
       *
       *
       *
       *
       *
       *
       *
       */}

      {/**ANYTHING BELOW THIS IS THE OLD CODE*/}
      {/**THIS THE OLD CODE */}
    </div>
  );
}
