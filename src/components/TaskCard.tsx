import React from "react";
import "./taskcard.css";

import { Deletetask } from "../Taskcontroller";
import { Task } from "../interfaces";

import { useNavigate } from "react-router-dom";

interface TaskCardProps {
  task: Task;
  changestate: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, changestate }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    Deletetask(task);
    changestate();
  };

  const handleUpdate = () => {
    if (task) {
      navigate(`/taskupdate/${task.id}`);
    }
  };

  return (
    <div className="cardcontainer">
      <div className="taskdetails">
        <div>
          <span className="contentheading">Task Name :</span>
          <span className="contentspan">{task.name}</span>
        </div>

        <div>
          <span className="contentheading">Priorty:</span>
          <span className="contentspan">{task.prior}</span>
          {/* {task.prior} */}
        </div>

        <div>
          <span className="contentheading">Deadline:</span>
          <span className="contentspan">
            {new Date(task.todoby).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div>
        <button id="updatebtn" onClick={handleUpdate}>
          Update
        </button>
        <button id="deletebtn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
