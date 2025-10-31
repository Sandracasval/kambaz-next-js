import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
//This breaks out the line items that render the todo's title
//and the Delete and Edit buttons
//the component accepts references to the todo object
//as well as deleteTodo and setTodo

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TodoItem({ todo }: any) {
  const dispatch = useDispatch();
  return (
    <ListGroupItem key={todo.id}>
      <Button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        {" "}
        Delete{" "}
      </Button>
      <Button onClick={() => dispatch(setTodo(todo))} id="wd-set-todo-click">
        {" "}
        Edit{" "}
      </Button>
      {todo.title}
    </ListGroupItem>
  );
}
