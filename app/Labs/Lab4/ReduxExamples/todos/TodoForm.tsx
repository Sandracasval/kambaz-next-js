import { Button, ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

//breaking out the form to create and update todos into component todo form 
//the parameters todo, settodo, addtodo, and updatetodo 
//mantain dependencies between the todo list and todoform componeny

//UPDATED use the reducer functions instead od the parameters
//also select todo from the reducer state, instead ot the todo parameter 
export default function TodoForm() {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
 const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
      <FormControl value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
    </ListGroupItem>
);}
