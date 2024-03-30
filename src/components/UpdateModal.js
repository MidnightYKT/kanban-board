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

const UpdateModal = ({ statuses, priorities, task, updateTask }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [newTask, setNewTask] = useState(task);

  const onSave = () => {
    toggle();
    updateTask(newTask);
  };

  const onCancel = () => {
    toggle();
  };

  return (
    <div>
      <Button variant="button" color="warning" outline onClick={toggle}>
        Update
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update</ModalHeader>

        <ModalBody>
          <InputGroup style={{ marginBottom: "15px" }}>
            <Input
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              value={newTask.name}
              placeholder="task name"
            />
          </InputGroup>
          <InputGroup style={{ marginBottom: "15px" }}>
            <Input
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              placeholder="task description"
              value={newTask.description}
            />
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

export default UpdateModal;
