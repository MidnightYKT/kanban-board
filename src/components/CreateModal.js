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
import Form from "react-bootstrap/Form";

const CreateModal = ({ statuses, nu }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>

        <ModalBody>
          <InputGroup style={{ marginBottom: "15px" }}>
            <Input placeholder="task name" />
          </InputGroup>
          <InputGroup style={{ marginBottom: "15px" }}>
            <Input placeholder="task description" />
          </InputGroup>

          <Form.Select
            aria-label="Choose status"
            style={{ marginBottom: "15px" }}
          >
            {statuses.map((el) => (
              <option value={el.status}>{el.status}</option>
            ))}
          </Form.Select>

          <Form.Select aria-label="Choose status">
            {statuses.map((el) => (
              <option value={el.status}>{el.status}</option>
            ))}
          </Form.Select>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateModal;
