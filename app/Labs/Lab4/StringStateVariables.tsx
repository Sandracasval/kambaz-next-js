import { useState } from "react";
import { FormControl } from "react-bootstrap";
//HOW TO USE USESTATE WITH STRING STATE VARIABLES
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      {/** initialize a  text input field with a s attee variable */}
      <FormControl
        defaultValue={firstName}
        //the onChange attribute invokes the setFirstName 
        //mutator function to update the state variable 
        //the e.target.value contains the value of the input field 
        //and is used ot update the current value of the state 
        //variab;e
        onChange={(e) => setFirstName(e.target.value)}/>
        {/**update the state variable with each key stroke */}
<hr/></div>);}