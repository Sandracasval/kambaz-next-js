export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  //this is displaying the stringified version of squares 
  //AKA the JSON version
  //CONVERTS JAVASCRIPT STRUCTURES INTO FORMATTED STRINGS
  return (
    <div className="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)}
      <hr />
    </div>
);}
