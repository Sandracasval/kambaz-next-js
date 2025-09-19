export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br></br>
      <br></br>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page of"
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="QUIZZES">QUIZZES</option>
                <option value="ASSIGNMENTS" selected>
                  ASSIGNMENTS
                </option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="POINTS">Points</option>
                <option value="PERCENTAGE" selected>
                  Percentage
                </option>
                <option value="LETTERGRADE">Letter Grade</option>
                <option value="COMPLETEINCOMPLETE">Complete/Incomplete</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="NOSUBMISSION">No Submission</option>
                <option value="ONLINE" selected>
                  Online
                </option>
                <option value="EXTERNALTOOL">External Tool</option>
                <option value="ONPAPER">On Paper</option>
              </select>
            </td>
          </tr>
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
