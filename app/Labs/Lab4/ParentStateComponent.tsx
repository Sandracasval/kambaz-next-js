import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
//state can be shared between components 
//by passing references to state variables 
//or functions that update them 
//THE PARENT AND CHILD COMPONENTS SHARE THE COUNTER STATE VARIABLE 
//AND SETCOUNTER MUTATOR FUNCTION 
export default function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
    <div>
      <h2>Counter {counter}</h2>
      <ChildStateComponent
        counter={counter}
        setCounter={setCounter} />
      <hr/>
    </div>
);}
