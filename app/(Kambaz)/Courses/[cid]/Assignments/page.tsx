import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import IndividualControlButtons from "./IndividualControlButtons";
import { FaBook } from "react-icons/fa6";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />
      {/**THIS IS WHERE THE NEW CODE BEGINS */}
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div
            id="wd-assignments-title"
            className="wd-title p-3 ps-2 bg-secondary"
          >
            <BsGripVertical /> ASSIGNMENTS <AssignmentControlButtons />
          </div>
          <ListGroup id="wd-assignment-list" className="wd-lessons rounded-0">
            <ListGroupItem
              id="wd-assignment-list-item"
              className="wd-lesson p-3 ps-1"
            >
              <BsGripVertical />
              <FaBook />
              <Link
                href="/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A1 - ENV + HTML
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
            <ListGroupItem
              id="wd-assignment-list-item"
              className="wd-lesson p-3 ps-1"
            >
              <BsGripVertical />
              <FaBook />
              <Link
                href="/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A2 - CSS + BOOTSRAP
              </Link>
              <IndividualControlButtons />
              <ListGroup>
                <ListGroupItem>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not Available until</strong> May 13 at 12:00 am |
                  <br></br>
                  <strong>Due</strong> May 20 at 11:59 pm | 100 pts
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
            <ListGroupItem
              id="wd-assignment-list-item"
              className="wd-lesson p-3 ps-1"
            >
              <BsGripVertical />
              <FaBook />
              <Link
                href="/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A3 - JAVASCRIPT + REACT
              </Link>
              <IndividualControlButtons />
              <ListGroup>
                <ListGroupItem>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <strong>Not Available until</strong> May 20 at 12:00 am |
                  <br></br>
                  <strong>Due</strong> May 27 at 11:59 pm | 100 pts
                </ListGroupItem>
              </ListGroup>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
      {/**THIS THE OLD CODE */}
    </div>
  );
}
