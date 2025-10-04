import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { BiTargetLock } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoMegaphoneOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish{" "}
          </Button>{" "}
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </Button>{" "}
        </div>
      </div>
      <br />
      {/**Import existing content button */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </Button>
      {/**Import from commons button */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </Button>
      {/* Complete the rest of the buttons */}
      {/**Choose Home Page button */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiTargetLock className="me-2 fs-5" /> Choose Home Page
      </Button>
      {/**View Course Stream */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsBarChartLineFill className="me-2 fs-5" /> View Course Stream
      </Button>
      {/**New Announcement */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoMegaphoneOutline className="me-2 fs-5" /> New Announcement
      </Button>
      {/**New Analytics Button */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BsBarChartLineFill className="me-2 fs-5" /> New Analytics
      </Button>
      {/**View Course Notifications */}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoNotificationsOutline className="me-2 fs-5" /> View Course
        Notifications
      </Button>
    </div>
  );
}
