import React from "react";
import s from "./style.module.css";

export default function Task({ id, description, isImportant, deleteTask }) {
  const flag = isImportant ? s.isImportantStyle : "";

  return (
    <div>
      <div className={[s.task, flag].join(" ")}>
        <p>{description}</p>
        <button className={s.task_delete_btn} onClick={() => deleteTask(id)}>
          +
        </button>
      </div>
    </div>
  );
}
