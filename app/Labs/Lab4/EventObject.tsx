import { useState } from "react";
//the eventobject conrains info about when the
//event occured, where the mouse was, and the DOM element
//responsible for generating the evemy
export default function EventObject() {
  const [event, setEvent] = useState(null);
  //declares funciton handleClick that accepts an event object e
  //and removes the view property and replaces it to avoid circular references
  //it then stores the event object in a variable called event
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };
  return (
    <div>
      {/**the component renders the JSON representation */}
      <h2>Event Object</h2>
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
