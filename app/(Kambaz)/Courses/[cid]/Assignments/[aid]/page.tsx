"use client";
import { useState } from "react";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormSelect from "react-bootstrap/FormSelect";
import FormCheck from "react-bootstrap/FormCheck";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { addAssignment, updateAssignment } from "../reducer";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable @typescript-eslint/no-explicit-any */

const ASSIGNMENT_GROUPS = [
  "QUIZZES",
  "ASSIGNMENTS",
  "EXAMS",
  "PROJECT",
] as const;

const DISPLAY_GRADE_AS = [
  { value: "POINTS", label: "Points" },
  { value: "PERCENTAGE", label: "Percentage" },
  { value: "LETTERGRADE", label: "Letter Grade" },
  { value: "COMPLETEINCOMPLETE", label: "Complete/Incomplete" },
] as const;

const SUBMISSION_TYPES = [
  { value: "NOSUBMISSION", label: "No Submission" },
  { value: "ONLINE", label: "Online" },
  { value: "EXTERNALTOOL", label: "External Tool" },
  { value: "ONPAPER", label: "On paper" },
] as const;

const ONLINE_ENTRY_OPTIONS = [
  { id: "wd-text-entry", label: "Text Entry", value: "TEXT" },
  { id: "wd-website-url", label: "Website URL", value: "URL" },
  { id: "wd-media-recordings", label: "Media Recordings", value: "MEDIA" },
  {
    id: "wd-student-annotation",
    label: "Student Annotation",
    value: "ANNOTATION",
  },
  { id: "wd-file-upload", label: "File Upload", value: "FILE" },
] as const;

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const { cid, aid } = useParams();
  //checking to see whether the assignment already exists or if it doesnt
  const newAssignment = aid ? (aid === "new" ? true : false) : true;
  const existingAssignment = !newAssignment;

  const existingInfo: any = useSelector((s: any) =>
    existingAssignment
      ? s.assignmentsReducer.assignments.find((a: any) => a._id === aid)
      : undefined
  );

  const reRouter = useRouter();
  const [name, setName] = useState("A1");
  const [description, setDescription] = useState(
    `The assignment is available online

Submit a link to the landing page of your web application running on Netifly

The landing page should include the following:
• Your full name and section
• Links to each of the lab assignments 
• Links to the Kambaz application
• Links to all relevant code repositories 

The Kambaz application should include a link to navigate back to the landing page`
  );
  const [points, setPoints] = useState<number | string>(100);
  const [group, setGroup] =
    useState<(typeof ASSIGNMENT_GROUPS)[number]>("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] =
    useState<(typeof DISPLAY_GRADE_AS)[number]["value"]>("PERCENTAGE");
  const [submissionType, setSubmissionType] =
    useState<(typeof SUBMISSION_TYPES)[number]["value"]>("ONLINE");

  const [onlineEntry, setOnlineEntry] = useState<string[]>(["TEXT", "URL"]);
  const toggleOnlineEntry = (value: string) =>
    setOnlineEntry((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const [assignTo, setAssignTo] = useState("Everyone");
  const [due, setDue] = useState("2000-01-21");
  const [availableFrom, setAvailableFrom] = useState("2000-01-21");
  const [availableUntil, setAvailableUntil] = useState("2000-01-21");

  useEffect(() => {
    if (!existingAssignment || !existingInfo) return;
    setName(existingInfo.title ?? "Untitled");
    setDescription(existingInfo.description ?? "");
    setPoints(existingInfo.points ?? 0);
    setDue((existingInfo.dueDate ?? "").slice(0, 10) || "2000-01-21");
    setAvailableFrom(
      (existingInfo.availableFrom ?? "").slice(0, 10) || "2000-01-21"
    );
    setAvailableUntil(
      (existingInfo.availableUntil ?? "").slice(0, 10) || "2000-01-21"
    );
  }, [existingAssignment, existingInfo]);

  {
    /**here is where i replace the saving  */
  }

  {
    /**this one is for when you add a */
  }

  const saveAssignment = () => {
    if (!cid) return;

    if (existingAssignment && existingInfo) {
      dispatch(
        updateAssignment({
          _id: existingInfo._id,
          title: name,
          course: cid,
          description,
          points: points,
          dueDate: due,
          availableFrom,
          availableUntil,
        })
      );
      //for when the assignment exists already: Dont create id!
      reRouter.push(`/Courses/${cid}/Assignments`);
    } else {
      const newId = uuidv4();
      dispatch(
        addAssignment({
          _id: newId,
          title: name,
          course: cid,
          description,
          points: points,
          dueDate: due,
          availableFrom,
          availableUntil,
        })
      );
      //for when the assignment does not exist  so create a new id!
      reRouter.push(`/Courses/${cid}/Assignments`);
    }
  };

  const cancel = () => reRouter.push(`/Courses/${cid}/Assignments`);

  return (
    <div id="wd-assignments-editor">
      <Form>
        {/* Assignment Name */}
        <FormGroup controlId="wd-name" className="mb-3">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl
            as="textarea"
            rows={1}
            placeholder="A1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        {/* Description */}
        <FormGroup controlId="wd-description" className="mb-3">
          <FormControl
            as="textarea"
            rows={8}
            placeholder="Description…"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>

        {/* Points */}
        <FormGroup
          as={Row}
          controlId="wd-points"
          className="mb-3 align-items-center"
        >
          <FormLabel column sm="2" className="text-sm-end pe-sm-3">
            Points
          </FormLabel>
          <Col sm="10">
            <FormControl
              type="number"
              placeholder="100"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </Col>
        </FormGroup>
        {/**this is where i add the giant map  */}
        <FormGroup
          as={Row}
          controlId="wd-group"
          className="mb-3 align-items-center"
        >
          <FormLabel column sm="2" className="text-sm-end pe-sm-3">
            Assignment Group
          </FormLabel>
          <Col sm="10">
            <FormSelect
              value={group}
              onChange={(e) => setGroup(e.target.value as any)}
            >
              {ASSIGNMENT_GROUPS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </FormSelect>
          </Col>
        </FormGroup>

        {/*another map*/}
        <FormGroup
          as={Row}
          controlId="wd-display-grade-as"
          className="mb-3 align-items-center"
        >
          <FormLabel column sm="2" className="text-sm-end pe-sm-3">
            Display Grade as
          </FormLabel>
          <Col sm="10">
            <FormSelect
              value={displayGradeAs}
              onChange={(e) => setDisplayGradeAs(e.target.value as any)}
            >
              {DISPLAY_GRADE_AS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </FormSelect>
          </Col>
        </FormGroup>
        {/**diff section */}
        <FormGroup
          as={Row}
          controlId="wd-submission-type"
          className="mb-3 align-items-start"
        >
          <FormLabel column sm="2" className="text-sm-end pe-sm-3">
            Submission Type
          </FormLabel>
          <Col sm="10">
            <div className="border rounded p-3">
              <FormSelect
                value={submissionType}
                onChange={(e) => setSubmissionType(e.target.value as any)}
              >
                {SUBMISSION_TYPES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </FormSelect>

              {/*map again*/}
              {submissionType === "ONLINE" && (
                <div className="mt-3">
                  <div className="fw-semibold mb-2">Online Entry Options</div>
                  <div className="d-flex flex-column gap-1">
                    {ONLINE_ENTRY_OPTIONS.map((opt) => (
                      <FormCheck
                        key={opt.value}
                        id={opt.id}
                        type="checkbox"
                        label={opt.label}
                        checked={onlineEntry.includes(opt.value)}
                        onChange={() => toggleOnlineEntry(opt.value)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </FormGroup>
        <div className="border rounded p-3 mb-3">
          <Row className="g-3 align-items-start">
            <Col sm={2} className="text-sm-end pe-sm-3">
              <FormLabel className="mt-1">Assign</FormLabel>
            </Col>
            <Col sm={10}>
              <div className="mb-3">
                <div className="fw-semibold mb-1">Assign To</div>
                <FormControl
                  id="wd-assign-to"
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                />
              </div>

              <Row className="g-3">
                <Col md={4}>
                  <FormLabel htmlFor="wd-due-date" className="fw-semibold">
                    Due
                  </FormLabel>
                  <FormControl
                    id="wd-due-date"
                    type="date"
                    value={due}
                    onChange={(e) => setDue(e.target.value)}
                  />
                </Col>
                <Col md={4}>
                  <FormLabel
                    htmlFor="wd-available-from"
                    className="fw-semibold"
                  >
                    From
                  </FormLabel>
                  <FormControl
                    id="wd-available-from"
                    type="date"
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </Col>
                <Col md={4}>
                  <FormLabel
                    htmlFor="wd-available-until"
                    className="fw-semibold"
                  >
                    Until
                  </FormLabel>
                  <FormControl
                    id="wd-available-until"
                    type="date"
                    value={availableUntil}
                    onChange={(e) => setAvailableUntil(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        {/**calling save and cancel functions here based on reductors here ! */}

        <div className="d-flex gap-2 justify-content-end">
          <Button variant="outline-secondary" onClick={cancel}>
            Cancel
          </Button>

          <Button variant="dark" onClick={saveAssignment}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
