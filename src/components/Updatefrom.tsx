import React, { useEffect, useState } from "react";
import { Task } from "../interfaces";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useParams } from "react-router-dom";
import { GettaskbyId, Updatetask } from "../Taskcontroller";

import { useNavigate } from "react-router-dom";

// interface TaskUpdateProps{
//     task :Task;
// }

const Updatefrom: React.FC = () => {
  // const [task,setTask] =  useState<Task | null>(null);

  const { id } = useParams();

  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    const rt = GettaskbyId(id);

    console.log(rt)

    if (rt) {
      // setTask(task);
      setTaskid(rt.id);
      setTaskname(rt.name);
      setPrior(rt.prior);
      setSelectedDate(rt.todoby);
    }
  }, [id]);

  const [taskname, setTaskname] = useState<string>("");
  const [taskid, setTaskid] = useState<number>(0);
  const [prior, setPrior] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(Date.now()));

  const handlenameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskname(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrior(parseInt(e.target.value)); // Convert input value to number
  };

  const handledateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleUpdate = () => {
    const newTask: Task = {
      id: taskid,
      name: taskname,
      prior: prior,
      todoby: selectedDate,
    };
    Updatetask(newTask);
    navigate('/');
  };

  return (
    <>
      <div className="container">
        <div className="tasknamediv">
          <label htmlFor="taskname">Task :</label>
          <input
            type="text"
            placeholder="Add task here"
            id="taskname"
            value={taskname}
            onChange={handlenameChange}
          />
        </div>
        <div className="priordiv">
          <label htmlFor="priority">Priority :</label>
          <input
            type="number"
            id="priority"
            value={prior}
            onChange={handlePriorityChange}
          />
        </div>
        <div className="priordiv">
          <span>Date to be completed by:</span>
          <DatePicker
            selected={selectedDate}
            onChange={handledateChange}
            className="datetag"
          />
        </div>
        <button type="button" onClick={handleUpdate} className="formsubmitbtn">
          Update Task
        </button>
      </div>
    </>
  );
};

export default Updatefrom;
