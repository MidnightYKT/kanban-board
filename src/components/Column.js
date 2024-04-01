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
  changePriority,
}) => {
  console.log(tasks);
  return (
    <div className="col-6 col-md-3">
      <h3 className="text-center">{column.title}</h3>
      {tasks
        .filter((el) => el.status === column.status)
        .sort((el1, el2) => el2.priority - el1.priority)
        .map((el) => (
          <Task
            task={el}
            key={el._id}
            statuses={statuses}
            changeStatus={changeStatus}
            priorities={priorities}
            updateTask={updateTask}
            deleteTask={deleteTask}
            changePriority={changePriority}
          />
        ))}
    </div>
  );
};

export default Column;
