import React from "react";
import Task from "./Task";

const Column = ({ column, tasks, statuses, changeStatus }) => {
  return (
    <div className="col">
      <h3>{column.title}</h3>
      {tasks
        .filter((el) => el.status === column.status)
        .map((el) => (
          <Task
            task={el}
            key={el._id}
            statuses={statuses}
            changeStatus={changeStatus}
          />
        ))}
    </div>
  );
};

export default Column;
