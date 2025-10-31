import { useState } from "react";
import { FormControl } from "react-bootstrap";
export default function DateStateVariable() {
//tha stateDate variable is intialized to the current date using new date
  const [startDate, setStartDate] = useState(new Date());
  //arrow funciton 
  //this converts the date object into the YYYY-MM-DD format expected by the HTML date input field 

  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };
  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      {/** display the raw date object */}
      <h3>{JSON.stringify(startDate)}</h3>
      {/** call function to display in YYYY-MM-DD Format */}
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      {/**update when you change the date with the date picker */}
      <FormControl
        type="date"
        defaultValue={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
<hr/></div>);}