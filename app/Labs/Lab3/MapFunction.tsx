export default function MapFunction() {
  // eslint-disable-next-line prefer-const
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  //this just squares 
  const square = (a: number) => a * a;
  // map function can apply a function to each value of an array
  // and collate all the results into a new array
  const todos = ["Buy milk", "Feed the pets"];
  const squares = numberArray1.map(square);
  //instead of putting the function name inside its putting the 
  //actual math inside 
  //USING AN INLINE FUNCTION 
  const cubes = numberArray1.map((a) => a * a * a);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares} <br />
      cubes = {cubes} <br />
      Todos:
      <ol>
        {/**applying todo on todos 
         * for each element in todo make a <li> item 
         * TAKE EVERY ELEMENT OF TODOS AND TEMPORARILY CALL IT 
         * TODO WHILE YOU RUN THIS CODE
         * I ADDED i KEY TO SILENCE ERROR
        */}
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ol>{" "}
      <hr />
    </div>
  );
}
