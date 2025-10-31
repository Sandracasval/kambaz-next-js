"use client"
//this function expects 2 number parameters 
const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};
export default function PassingDataOnEvent() {
  return (
    <div id="wd-passing-data-on-event">
      <h2>Passing Data on Event</h2>
      {/** calling rge on click function with 2, 3 as parameters */}
      {/**USE CLOSURE -- A FUNCTION INSIDE ANOTHER FUNCTION */}
      {/**AN ANOYMOUS ARROW FUNCTION THAT CONTAINS THE CALL TO ADD 2 AND 3 */}
      <button onClick={() => add(2, 3)}
              // NOT THIS! onClick={add(2, 3)}
              className="btn btn-primary"
              id="wd-pass-data-click">
        Pass 2 and 3 to add()
      </button>
      <hr/>
    </div>
);}

