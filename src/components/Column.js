import React from "react";
import Task from "./Task";

const Column = ({
  column,
  tasks,
  statuses,
  changeStatus,
  priorities,
  updateTask,
  deleteTask,
}) => {
  console.log(tasks);
  return (
    <div className="col">
      <h3>{column.title}</h3>
      {tasks
        .sort((el1, el2) => el1.priority - el2.priority)
        .filter((el) => el.status === column.status)
        .map((el) => (
          <Task
            task={el}
            key={el._id}
            statuses={statuses}
            changeStatus={changeStatus}
            priorities={priorities}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
};

export default Column;
