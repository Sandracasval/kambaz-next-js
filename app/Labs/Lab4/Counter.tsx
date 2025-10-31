import { useState } from "react";
export default function Counter() {
  //initial value of the count variable is  7
  //let count = 7;
  //we have to rell react that changes to a particular variable is indeed releant to changes in the DOM
  //create and initiliaze a state variable
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        //the code here is an anonymous arrow function
        //a funciton that takes no arguments and runs the code when clicked
        //(inside function): render state variable, handle events, and update state variable with mutator
        //which now updates to the state variable, do update the dom as desired!
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
      >
        Up
      </button>
      <button onClick={() => setCount(count - 1)} id="wd-counter-down-click">
        Down
      </button>
      <hr />
    </div>
  );
}
