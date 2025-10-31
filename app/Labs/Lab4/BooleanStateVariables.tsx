import { useState } from "react";
export default function BooleanStateVariables() {
  //initial value is set to true
  const [done, setDone] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="form-control">
        {/** render content based on boolean state variable value
         * change state variable value when handling events like
         */}
        <input type="checkbox" checked={done} onChange={() => setDone(!done)} />{" "}
        Done
      </label>
      {/** only displays if its done */}
      {done && <div className="alert alert-success">Yay! you are done</div>}
      <hr />
    </div>
  );
}
