"use client";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSelect from "react-bootstrap/FormSelect";
import FormCheck from "react-bootstrap/FormCheck";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div id="wd-assignments-editor">
        <Form>
          <FormGroup controlId="wd-name" className="mb-3">
            <FormLabel>Assignment Name</FormLabel>
            <FormControl as="textarea" rows={1} placeholder="A1" />
          </FormGroup>
          {/**Now doing form group for points??? */}
          <FormGroup controlId="wd-description" className="mb-3">
            <FormControl
              as="textarea"
              rows={8}
              placeholder={`
                The assignment is available online

                Submit a link to the landing page of your web application running on Netifly

                The landing page should include the following:
                • Your full name and section
                • Links to each of the lab assignments 
                • Links to the Kambaz application
                • Links to all relevant code repositories 

                The Kambaz application should include a link to navigate back to the landing page
                `.replace(/^\s{2,}/gm, "")}
            />
          </FormGroup>
          {/** For the next ones i need to do the horizontal responsive forms from the slides with labels! */}
          {/**Form Group  */}

          <FormGroup
            as={Row}
            controlId="wd-points"
            className="mb-3 align-items-center"
          >
            <FormLabel column sm="2" className="text-sm-end pe-sm-3">
              Points
            </FormLabel>
            <Col sm="10">
              <FormControl type="number" placeholder="100" />
            </Col>
          </FormGroup>
          {/**DOING ASSIGNMENT GROUP WHERE THE OPTIONS ARE: */}
          {/**QUIZZES, ASSIGNMENTS, EXAMS, PROJECT */}
          <FormGroup
            as={Row}
            controlId="wd-group"
            className="mb-3 align-items-center"
          >
            <FormLabel column sm="2" className="text-sm-end pe-sm-3">
              Assignment Group
            </FormLabel>
            <Col sm="10">
              <FormSelect defaultValue="ASSIGNMENTS">
                <option value="QUIZZES">QUIZZES</option>
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </FormSelect>
            </Col>
          </FormGroup>
          {/**NOW DOING IT FOR DISPLAY GRADE AS */}
          {/**THE OPTIONS ARE POINTS, PERCENTAGE, LETTERGRADE, COMPLETEINCOMPLETE2 */}
          <FormGroup
            as={Row}
            controlId="wd-display-grade-as"
            className="mb-3 align-items-center"
          >
            <FormLabel column sm="2" className="text-sm-end pe-sm-3">
              Display Grade as
            </FormLabel>
            <Col sm="10">
              <FormSelect defaultValue="PERCENTAGE">
                <option value="POINTS">Points</option>
                <option value="PERCENTAGE">Percentage</option>
                <option value="LETTERGRADE">Letter Grade</option>
                <option value="COMPLETEINCOMPLETE">Complete/Incomplete</option>
              </FormSelect>
            </Col>
          </FormGroup>
          {/**Now doing it for Submission Type */}
          <FormGroup
            as={Row}
            controlId="wd-submission-type"
            className="mb-3 align-items-start"
          >
            <FormLabel column sm="2" className="text-sm-end pe-sm-3">
              Submission Type
            </FormLabel>
            <Col sm="10">
              {/**The rightside contains the box */}
              <div className="border rounded p-3">
                <FormSelect defaultValue="ONLINE">
                  <option value="NOSUBMISSION">No Submission</option>
                  <option value="ONLINE">Online</option>
                  <option value="EXTERNALTOOL">External Tool</option>
                  <option value="ONPAPER">On paper</option>
                </FormSelect>
              </div>
            </Col>

            {/**OPTIONS TITLE FOR ONLINE + CHECKBOXES */}
          </FormGroup>
          {/**Now figure out how do sumission type, is it going to be a nested form?? */}
          {/**I LEFT OFF HERE CALLED CODE EXPLANATION REACT FORM  */}
          {/* Online Entry Options */}
        </Form>
      </div>

      {/** this is the main big table  */}
      <table>
        <tbody>
          {/** I had originally made a row row for each table  */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type"></label>
            </td>
            <td>
              Online Entry Options:
              <br></br>
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>

            {/**THIS IS THE END OF WHAT IM LOOKING AT */}
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              Assign To
              <br />
              <input id="wd-assign-to" defaultValue={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              {/*JUST BLANK SPACE FOR FORMATTING */}
            </td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" defaultValue="2000-01-21" id="wd-due-date" />
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              {/*JUST BLANK SPACE FOR ALIGNMENT */}
            </td>
            <td>
              <label htmlFor="wd-available-from">From</label>
              <br />
              <input
                type="date"
                defaultValue="2000-01-21"
                id="wd-available-from"
              />
              <br />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input
                type="date"
                defaultValue="2000-01-21"
                id="wd-available-until"
              />
              <br />
            </td>
          </tr>

          {/* Complete on your own */}
        </tbody>
      </table>
    </div>
  );
}
