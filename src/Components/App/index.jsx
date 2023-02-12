import { useEffect, useState } from "react";
import TaskForm from "../TaskForm";
import TasksContainer from "../TasksContainer";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();

    let day = e.target.select.value;
    let isImportant = e.target.checkbox.checked;
    let description = e.target.description.value;

    let taskObj = {
      id: Date.now(),
      day,
      isImportant,
      description,
    };

    setTasks([...tasks, taskObj]);

    e.target.select.value = "";
    if (e.target.checkbox.checked) {
      e.target.checkbox.checked = !e.target.checkbox.checked;
    }
    e.target.description.value = "";
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteAllDayTasks = (day) => {
    const newTasks = tasks.filter((task) => task.day !== day);
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <TasksContainer
        tasks={tasks}
        deleteTask={deleteTask}
        deleteAllDayTasks={deleteAllDayTasks}
      />
    </div>
  );
}

export default App;
