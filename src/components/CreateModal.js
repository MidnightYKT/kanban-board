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

const CreateModal = ({ statuses, priorities, createTask }) => {
  const initialState = {
    name: "",
    description: "",
    status: statuses[0]?.status,
    priority: priorities[0],
  };
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
    setNewTask(initialState);
  };
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    status: statuses[0]?.status,
    priority: priorities[0],
  });

  const onSave = () => {
    toggle();
    createTask(newTask);
  };

  const onCancel = () => {
    toggle();
  };

  return (
    <div>
      <Button color="success" outline onClick={toggle}>
        Create task
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>

        <ModalBody>
          <InputGroup style={{ marginBottom: "15px" }}>
            <Input
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              value={newTask.name}
              placeholder="Task name"
            />
          </InputGroup>
          <InputGroup
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            value={newTask.description}
            style={{ marginBottom: "15px" }}
          >
            <Input placeholder="Task description" />
          </InputGroup>

          <Form.Select
            aria-label="Choose status"
            style={{ marginBottom: "15px" }}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
            value={newTask.status}
          >
            {statuses.map((el, id) => (
              <option key={id} value={el.status}>
                {el.status}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            aria-label="Choose status"
            style={{ marginBottom: "15px" }}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
            value={newTask.priority}
          >
            {priorities.map((el, id) => (
              <option key={id} value={el}>
                {el}
              </option>
            ))}
          </Form.Select>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={onSave}
            disabled={newTask.name === "" || newTask.description === ""}
          >
            Save
          </Button>
          <Button color="secondary" onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateModal;
