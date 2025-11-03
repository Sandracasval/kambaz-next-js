import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import DeleteEditor from "./DeleteEditor";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

//using the deleteEditor here for the pop up
export default function IndividualControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {/** this is the trash icon */}
      <FaTrash onClick={handleShow} className="text-danger me-2 mb-1" />
      <DeleteEditor
        show={show}
        handleClose={handleClose}
        onConfirm={() => {
          deleteAssignment(assignmentId);
        }}
        dialogTitle="Delete Assignment"
        dialogQuestion="Are you sure you want to delete this assignment?"
      />
    </div>
  );
}
