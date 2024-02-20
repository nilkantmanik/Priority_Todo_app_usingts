import React, { useState, useEffect } from "react";
import Taskform from "./Taskform";
import TaskCard from "./TaskCard";
import { Task } from "../interfaces";
import { Gettasks } from "../Taskcontroller";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refresh, SetRefresh] = useState<Boolean>(true);

  const ChangeRefresh = () => {
    SetRefresh(!refresh);
  };

  useEffect(() => {
    const lstasks = Gettasks();

    // console.log(lstasks);
    if (lstasks) {
      setTasks(lstasks);
    }
  }, [refresh]);

  // console.log(Math.random()*10);

  return (
    <div className="App">
      <Taskform changestate={ChangeRefresh} />

      {tasks &&
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} changestate={ChangeRefresh} />
        ))}
    </div>
  );
};

export default Home;
