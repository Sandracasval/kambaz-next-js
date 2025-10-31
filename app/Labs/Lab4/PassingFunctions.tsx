"use client";
//function passed as a parameter
//passes the function say hello to component passing function 
//when the button is clicked say hello is involked
//a function that takes no parameters and returns nothing
export default function PassingFunctions({
  theFunction,
}: {
  theFunction: () => void;
}) {
  return (
    <div>
      <h2>Passing Functions</h2>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}
