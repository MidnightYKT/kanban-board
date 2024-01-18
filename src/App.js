import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";

import Column from "./components/Column";
import CreateModal from "./components/CreateModal";

function App() {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [number, setNumber] = useState();

  const getStatuses = () => {
    axios
      .get("https://expressjs-server.vercel.app/statuses")
      .then((res) => {
        setStatuses(res.data);
        console.log(res.data);
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
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTasks();
    getStatuses();
  }, []);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <CreateModal statuses={statuses} number={number} setNumber={setNumber} />
      <div className="container text-center">
        <div className="row align-items-start">
          {statuses.map((el) => (
            <Column key={el._id} column={el} tasks={tasks} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
