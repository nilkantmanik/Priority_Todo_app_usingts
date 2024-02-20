import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Addtask } from "../Taskcontroller";

import { Task } from "../interfaces";

import "./taskfrom.css";

interface TaskformProps {
  changestate: () => void;
}

const Taskform: React.FC<TaskformProps> = ({ changestate }) => {
  const [task, setTask] = useState<string>("");
  const [prior, setPrior] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(Date.now())); // Use Date type for selectedDate

  const handleSubmit = () => {
    console.log("form submitted");
    const newTask: Task = {
      id: Date.now(),
      name: task,
      prior: prior,
      todoby: selectedDate,
    };
    Addtask(newTask);
    changestate();
    setTask("");
    setPrior(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrior(parseInt(e.target.value)); 
  };

  const handledateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container">
      <div className="tasknamediv">
        <label htmlFor="taskname">Task :</label>
        <input
          type="text"
          placeholder="Add task here"
          id="taskname"
          value={task}
          onChange={handleChange}
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
      <button type="button" onClick={handleSubmit} className="formsubmitbtn">
        Add Task
      </button>
    </div>
  );
};

export default Taskform;
