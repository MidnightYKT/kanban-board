import React from "react";
import { Button } from "react-bootstrap";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

const Task = ({
  task,
  statuses,
  changeStatus,
  priorities,
  updateTask,
  deleteTask,
}) => {
  return (
    <div className="card" style={{ margin: "5px" }}>
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          Priority: {task.priority}
          <Button
            disabled={task.status === statuses[0].status}
            variant="outline-info"
          >
            ↑
          </Button>{" "}
          <Button
            disabled={task.status === statuses[0].status}
            variant="outline-info"
          >
            ↓
          </Button>{" "}
        </p>
        <p className="card-text">Status: {task.status}</p>
        <Button
          onClick={() => changeStatus(task, -1)}
          disabled={task.status === statuses[0].status}
          variant="outline-primary"
        >
          ←
        </Button>
        <UpdateModal
          statuses={statuses}
          priorities={priorities}
          changeStatus={changeStatus}
          task={task}
          updateTask={updateTask}
        />

        <DeleteModal task={task} deleteTask={deleteTask} />
        <Button
          onClick={() => changeStatus(task, 1)}
          disabled={task.status === statuses[statuses.length - 1].status}
          variant="outline-primary"
        >
          →
        </Button>
      </div>
    </div>
  );
};

export default Task;
