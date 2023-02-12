import React from "react";
import s from "./style.module.css";

export default function TaskForm({ addTask }) {
  return (
    <form className={s.form} onSubmit={addTask}>
      <div className={s.form_wrap}>
        <div className={s.form_options_wrap}>
          <select className={s.form_select} name="select" id="" required>
            <option value="">Select a day...</option>
            <option value="Mon">Monday</option>
            <option value="Tue">Tuesday</option>
            <option value="Wed">Wednesday</option>
            <option value="Thu">Thursday</option>
            <option value="Fri">Friday</option>
            <option value="Sat">Saturday</option>
            <option value="Sun">Sunday</option>
          </select>
          <div>
            <input
              className={s.form_checkbox}
              type="checkbox"
              name="checkbox"
              id="isImportant"
            />
            <label className={s.form_checkbox_label} htmlFor="isImportant">
              Important task
            </label>
          </div>
        </div>
        <input
          name="description"
          type="text"
          placeholder="Write your task..."
          required
          className={s.form_input}
        />
      </div>

      <button className={s.form_btn}>Add Task</button>
    </form>
  );
}
