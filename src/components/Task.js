import React from "react";

const Task = ({ task }) => {
  return (
    <div className="card" style={{ margin: "5px" }}>
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">Priority: {task.priority}</p>
        <p className="card-text">Status: {task.status}</p>
      </div>
    </div>
  );
};

export default Task;
