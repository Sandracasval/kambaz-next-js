import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <FaPlus className="fs-4" style={{ bottom: "1px" }} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
