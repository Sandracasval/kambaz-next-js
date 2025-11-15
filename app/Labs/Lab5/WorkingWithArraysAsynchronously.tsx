"use client";
import React, { useState, useEffect } from "react";
import * as client from "./client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";
import { FormControl } from "react-bootstrap";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  //adding the function for creating a new tododo item
  const createNewTodo = async () => {
    const todos = await client.createNewTodo();
    setTodos(todos);
  };
  //adding the postNewTodo Function here
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  //adding the removeTodo function here
  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  //when you click the pencil icon you set the todo's editing property to true
  //pressing the Enter key sets the todo's editing property to false and shows the updated title
  //the onchange attribute calls updateTodo!

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };

  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  //this is the new version deleteTodo
  //this version ignores the response from the server and instead filters the removed todo
  //from the local state variable.
  //This is fine for now, but the operation is too optimistic assuming the server
  //succesfully deleted the item from the array updating the user interface without confurmation
  const deleteTodo = async (todo: any) => {
    try {
      //the code is not doing anything with the response, this would typically be a const
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}
      <h4>
        Todos{" "}
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />{" "}
        <FaPlusCircle
          onClick={postNewTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      <ListGroup>
        {/**the code for the todos  */}
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            {/**adding the new delete button HERE  */}
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
              id="wd-delete-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
            />

            <input
              type="checkbox"
              className="form-check-input me-2"
              defaultChecked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? null : (
              <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              />
            )}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}{" "}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>{" "}
      <hr />
    </div>
  );
}
