import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ArrayStateVariable() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  //declare array state
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  //these two functions are used to add and remove elements to and from the array
  //copy everything from the array and then add a random number
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  //index is the position in the array that you want to remove
  //the filter is saying: go through each element item, in the array and keep
  //the leement only if its position i is not qual to the one im deleting
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-success mb-3" onClick={addElement}>
        Add Element
      </button>
      {/** the map function loops trhough the arraw and creates a
       * list, each showing and a delete bitton
       * when you click a button that element is removed from the array
       * and map re renders the list
       */}
      <ul className="list-group">
        {array.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteElement(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
