import { Modal, FormControl, Button } from "react-bootstrap";
//you can type in the name of your module in an input field 
//as you type the name of the module, the setModuleName updates 
//the modile name and clicking on the Add module button calls the 
//addModule function which actually adds the module
export default function ModuleEditor({
  show,
  handleClose,
  dialogTitle,
  moduleName,
  setModuleName,
  addModule,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormControl
          value={moduleName}
          onChange={(e) => {
            setModuleName(e.target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {" "}
          Cancel{" "}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addModule();
            handleClose();
          }}
        >
          {" "}
          Add Module{" "}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
