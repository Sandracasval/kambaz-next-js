import { Modal, FormControl, Button } from "react-bootstrap";
import { deleteAssignment } from "./reducer";
export default function DeleteEditor({
  show,
  handleClose,
  dialogTitle = "Delete Assignment",
  dialogQuestion = "Are you sure you want to delete this assignment?",
  onConfirm,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  dialogQuestion: string;
  onConfirm: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{dialogQuestion}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onConfirm();
            handleClose();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
