import React from "react";
import { Button } from "reactstrap";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";

const Task = ({
  task,
  statuses,
  changeStatus,
  priorities,
  updateTask,
  deleteTask,
  changePriority,
}) => {
  const plusPriority = () => {
    changePriority(task, 1);
  };

  const minusPriority = () => {
    changePriority(task, -1);
  };

  return (
    <div className="card" style={{ margin: "5px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mr-auto">{task.name}</h5>
          <DeleteModal task={task} deleteTask={deleteTask} />
        </div>
        <div className="mt-3">
          <p className="card-text">{task.description}</p>
          <p className="card-text">
            Priority: {task.priority}
            <Button
              variant="outline-info"
              className="mx-2"
              onClick={plusPriority}
              disabled={task.priority === 10}
            >
              ↑
            </Button>
            <Button
              variant="outline-info"
              onClick={minusPriority}
              disabled={task.priority === 0}
            >
              ↓
            </Button>
          </p>
          {/* <p className="card-text">Status: {task.status}</p> */}
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => changeStatus(task, -1)}
              disabled={task.status === statuses[0].status}
              outline
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
            <Button
              onClick={() => changeStatus(task, 1)}
              disabled={task.status === statuses[statuses.length - 1].status}
              outline
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
