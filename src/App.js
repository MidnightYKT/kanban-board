import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";

import Column from "./components/Column";
import CreateModal from "./components/CreateModal";

function App() {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);

  const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getStatuses = () => {
    axios
      .get("https://expressjs-server.vercel.app/statuses")
      .then((res) => {
        setStatuses(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getTasks = () => {
    axios
      .get("https://expressjs-server.vercel.app/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTasks();
    getStatuses();
  }, []);

  const createTask = (newTask) => {
    axios
      .post("https://expressjs-server.vercel.app/tasks", newTask)
      .then((res) => {
        getTasks();
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        alert("server in unavailable");
      });
  };

  const changeStatus = (task, direction) => {
    const stringStatuses = statuses.map((el) => el.title);
    const currentIndex = stringStatuses.indexOf(task?.status);

    const newIndex = currentIndex + direction;
    const status = stringStatuses[newIndex];

    axios
      .patch(`https://expressjs-server.vercel.app/tasks/${task._id}`, {
        status,
      })
      .then((res) => {
        getTasks();
      })
      .catch((e) => {
        console.log(e);
        alert("something is going wrong");
      });
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <CreateModal
        statuses={statuses}
        priorities={priorities}
        createTask={createTask}
      />
      <div className="container text-center">
        <div className="row align-items-start">
          {statuses.map((el) => (
            <Column
              statuses={statuses}
              key={el._id}
              column={el}
              tasks={tasks}
              changeStatus={changeStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
