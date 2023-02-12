import React from "react";
import Task from "../Task";
import s from "./style.module.css";

export default function TaskDay({ tasks, deleteTask, deleteAllDayTasks }) {
  return (
    <div className={s.task_day}>
      {tasks.map((task) => (
        <Task key={task.id} {...task} deleteTask={deleteTask} />
      ))}
      <button
        onClick={() => deleteAllDayTasks(tasks[0].day)}
        className={s.task_day_delete_btn}
      >
        +
      </button>
    </div>
  );
}
