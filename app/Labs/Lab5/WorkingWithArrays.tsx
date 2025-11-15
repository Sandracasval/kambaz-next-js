"use client";
import React, { useState } from "react";
import { FormControl, FormCheck } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithArrays() {
  //adding a state variable for todo
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const API = `${HTTP_SERVER}/lab5/todos`;

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />
      {/**retrieving an item from an array by ID */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}`}
      >
        Get Todo by ID
      </a>
      <FormControl
        id="wd-todo-id"
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      {/**Filtering array items */}
      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
      {/**adding a hyperlink component for creating a new item in the array */}
      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />
      {/** adding a hyperlink component for removing from an errary */}
      <h3>Removing from an Array</h3>
      <a
        id="wd-remove-todo"
        className="btn btn-primary float-end"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}{" "}
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr />
      {/**adding a hyperlink component for updating an item
       * in an array (in this case the title of the todo)
       *
       */}
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        defaultValue={todo.title}
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br />
      <br />
      <hr />
      {/**EDIT THE COMPLETED PROPERTY TODO BY THEIR ID */}

      <h3>Update Todo Completed</h3>
      <div className="d-flex align-items-center gap-2">
        {/* Checkbox to toggle completed status */}
        <FormCheck
          className="form-check-input"
          type="checkbox"
          id="wd-todo-completed"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />

        <FormControl
          defaultValue={todo.id}
          className="w-25 float-start me-2"
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />

        {/* Link that calls the server route with ID and completed value */}
        <a
          id="wd-update-todo-completed"
          className="btn btn-primary float-end"
          style={{ width: "180px" }}
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Update Todo Completed
        </a>
      </div>

      {/*EDIT THE DESCRIPTION PROPERTY OF THE TODO BY THEIR ID */}
      <hr />
      {/**adding a hyperlink component for updating the description of an
       *  an array (in this case the title of the todo)
       *
       */}
      <h3>Updating todo description</h3>
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <FormControl
        defaultValue={todo.id}
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl
        defaultValue={todo.description}
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <br />
      <br />
      <hr />
    </div>
  );
}
