import { Button, Form, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {/**Assignment Button */}
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-assignment"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      {/**wd-add-assignment-group */}
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-add-assignment"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      {/**Making the search bar with form control */}
      {/**<input placeholder="Search for Assignments" id="wd-search-assignment" /> */}
      <InputGroup size="sm" className="mb-3" style={{ width: "255px" }}>
        <InputGroupText>
          <FaSearch />
        </InputGroupText>
        <FormControl
          type="search"
          placeholder="Search for Assignments"
          id="wd-search-assignment"
        />
      </InputGroup>
    </div>
  );
}
