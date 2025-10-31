import { useState } from "react";
import { FormControl } from "react-bootstrap";
export default function ObjectStateVariable() {
//we declare a person object state variable with initial property 
//values name and age 
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div>
      <h2>Object State Variables</h2>
      {/** object is rendered on the screen using JSON stringify to see changes in real time */}
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <FormControl
        defaultValue={person.name}
        //update field as user types, copy old object, override specific field with new value
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <FormControl
        defaultValue={person.age}
        type="number"
        //update field as user types, copy old object, override specific field with new value
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) })
        }
      />
      <hr />
    </div>
  );
}
