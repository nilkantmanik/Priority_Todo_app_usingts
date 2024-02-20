import { Task } from "./interfaces";

export const Addtask = (task: Task) => {
  const storedTasksJSON = localStorage.getItem("Tasks");
  const storedTasks: Task[] = storedTasksJSON
    ? JSON.parse(storedTasksJSON)
    : [];

  storedTasks.push(task);

  localStorage.setItem("Tasks", JSON.stringify(storedTasks));
};

export const Gettasks = () => {
  const storedTasksJSON = localStorage.getItem("Tasks");
  const storedTasks: Task[] = storedTasksJSON
    ? JSON.parse(storedTasksJSON)
    : [];

  storedTasks.sort((a, b) => {
    if (a.prior > b.prior) {
      return -1;
    } else if (a.prior < b.prior) {
      return 1;
    } else {
      return 0;
    }
  });

  return storedTasks;
};

export const GettaskbyId = (id: any) => {
  const storedTasksJSON = localStorage.getItem("Tasks");
  const storedTasks: Task[] = storedTasksJSON
    ? JSON.parse(storedTasksJSON)
    : [];

  const taskId = parseInt(id);

  const task = storedTasks.find((ta) => ta.id === taskId);
  //  const task = storedTasks.filter((ta) => ta.id===id);
  return task;
};

export const Deletetask = (task: Task) => {
  const storedTasksJSON = localStorage.getItem("Tasks");
  let storedTasks: Task[] = storedTasksJSON ? JSON.parse(storedTasksJSON) : [];

  storedTasks = storedTasks.filter((ta) => ta.id !== task.id);

  localStorage.setItem("Tasks", JSON.stringify(storedTasks));
};

export const Updatetask = (task: Task) => {
  const storedTasksJSON = localStorage.getItem("Tasks");
  let storedTasks: Task[] = storedTasksJSON ? JSON.parse(storedTasksJSON) : [];

  storedTasks = storedTasks.filter((ta) => ta.id !== task.id);

  storedTasks.push(task);

  localStorage.setItem("Tasks", JSON.stringify(storedTasks));
};
