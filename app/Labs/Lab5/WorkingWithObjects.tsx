"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
  //adding state variabes
  //create a state variable that holds default values for the assignment
  //eventually we will fetch this initial data from the server and populate the form with the
  //remote data so that we can modify it in the UI
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  //making a module useState constant
  const [module, setModule] = useState({
    id: 5,
    name: "September Module",
    description: "Where the assignments for September will be stored",
    course: "ARTF 2000",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  //making one for module
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Assignment Properties</h4>
      <div className="d-flex align-items-center gap-2">
        <FormControl
          className="w-75"
          id="wd-assignment-title"
          defaultValue={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary float-end"
          style={{ width: "150px" }}
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title{" "}
        </a>
      </div>
      <br />
      {/**modifying the assignment score */}
      <div className="d-flex align-items-center gap-2">
        <FormControl
          className="w-75"
          id="wd-assignment-score"
          type="number"
          defaultValue={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: Number(e.target.value) })
          }
        />
        <a
          id="wd-update-assignment-score"
          className="btn btn-primary float-end"
          style={{ width: "150px" }}
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
      </div>
      {/** now modifying the checkbox for completed */}
      <br />
      <div className="d-flex align-items-center gap-2">
        <FormCheck
          className="form-check-input"
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <a
          id="wd-update-assignment-completed"
          className="btn btn-primary float-end"
          style={{ width: "150px" }}
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completion
        </a>
      </div>
      <hr />

      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      {/**adding the code */}
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      {/**getting the module */}
      <h4>Retrieving Module</h4>
      <a
        id="wd-retrieve-module"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
      {/**getting the modulebname */}
      <h4>Retrieving Module Property</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <hr />
      {/**modyfing the module name */}
      <h4>Modifying Module Properties</h4>
      <div className="d-flex align-items-center gap-2">
        <FormControl
          className="w-75"
          id="wd-module-name"
          defaultValue={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          id="wd-update-module-name"
          className="btn btn-primary float-end"
          style={{ width: "150px" }}
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Update Module Name
        </a>
      </div>
      <br />
      {/**also modyfing module description  */}
      <div className="d-flex align-items-center gap-2">
        <FormControl
          className="w-75"
          id="wd-module-description"
          defaultValue={module.description}
          onChange={(e) =>
            setModule({ ...module, description: e.target.value })
          }
        />
        <a
          id="wd-update-module-description"
          className="btn btn-primary float-end"
          style={{ width: "150px" }}
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Module Description
        </a>
      </div>
      <hr />
    </div>
  );
}
