import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  Input,
} from "reactstrap";

const DeleteModal = ({ task, deleteTask }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const [checking, setChecking] = useState();

  const onDelete = () => {
    toggle();
    deleteTask(task);
  };

  const onCancel = () => {
    toggle();
    setChecking("");
  };

  return (
    <div>
      <Button
        variant="button"
        color="danger"
        outline
        onClick={toggle}
        className="btn-sm"
      >
        ×
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete</ModalHeader>
        <ModalBody>
          <p>To confirm, type "{task.name}" in the box below</p>
          <InputGroup style={{ marginBottom: "15px" }}>
            <Input
              onChange={(e) => setChecking(e.target.value)}
              value={checking}
              placeholder="task name"
            />
          </InputGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={onDelete}
            disabled={task.name !== checking}
            className="btn-sm"
          >
            Delete
          </Button>
          <Button color="secondary" onClick={onCancel} className="btn-sm">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;
