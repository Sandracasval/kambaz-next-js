"use client";
import { useState } from "react";
import Link from "next/link";
import * as db from "../Database";
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  FormControl,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
/* eslint-disable @typescript-eslint/no-explicit-any */

//AN ARRAY OF JSONS WE CAN ITERARE ON TO USE MAP TO RENDER EACH COURSE DYNAMICALLY IN
//REACT!
//const courses = db.courses;

//Now that the currentUser is stored in the Account reducer, the Dashboard
//can filter the courses and only display the courses in which the current
//user is enrolled in
export default function Dashboard() {
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  //adding state to the kambaz dashboard
  //const [courses, setCourses] = useState<any[]>(db.courses);
  //create a course object with defaultValues
  //connvert course into s atate variable so we can change it and force a redraw if the UI
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  //NOTE WE HAD TO DELETE ALL OF THE BUTTONS
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

    if (!currentUser) {
    redirect("/Account/Signin");
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {/** adding a button to invoke the addNewCourse function */}
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          Add
        </button>
        {/**adding a form to edit the course state variable's name, and description properties */}
        <button
          className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {/**THIS IS WHERE WE IMPLEMENT THE NEW MAP*/}
          {courses
            .filter((course: any) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            )
            .map((course: any) => (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <CardImg
                      src="/images/reactjs.jpg" //here is where we would add the course image
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}{" "}
                      </CardTitle>
                      <CardText
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}{" "}
                      </CardText>
                      <Button variant="primary"> Go </Button>
                      {/**add the delete button next to the course's name
                       * to invoke deleteCourse when clicked passing the course's Id
                       * and preventing the Link's default behavior to navigate to the Course Scrren
                       */}
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(course._id));
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      {/**next to the Delete Button an edit button to copy the course
                       * to be edited into the form
                       * prevent default to navigate to the home screen
                       */}
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
          {/**This is the end of the huge function */}
        </Row>

        {/**THIS IS THE END OF THE RENOVATED COURSES */}
      </div>
    </div>
  );
}
