import React from "react";
import { useTodoContext } from "../Context/todoContext";
import TaskDay from "../TaskDay";
import s from "./style.module.css";

export default function TasksContainer() {
  const { tasks } = useTodoContext();

  const mon = tasks.filter((task) => task.day === "Mon");
  const tue = tasks.filter((task) => task.day === "Tue");
  const wed = tasks.filter((task) => task.day === "Wed");
  const thu = tasks.filter((task) => task.day === "Thu");
  const fri = tasks.filter((task) => task.day === "Fri");
  const sat = tasks.filter((task) => task.day === "Sat");
  const sun = tasks.filter((task) => task.day === "Sun");

  return (
    <div>
      {mon[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Mon</div>
          <TaskDay tasks={mon} />
        </div>
      )}

      {tue[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Tue</div>
          <TaskDay tasks={tue} />
        </div>
      )}

      {wed[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Wed</div>
          <TaskDay tasks={wed} />
        </div>
      )}

      {thu[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Thu</div>
          <TaskDay tasks={thu} />
        </div>
      )}

      {fri[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Fri</div>
          <TaskDay tasks={fri} />
        </div>
      )}

      {sat[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Sat</div>
          <TaskDay tasks={sat} />
        </div>
      )}

      {sun[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Sun</div>
          <TaskDay tasks={sun} />
        </div>
      )}
    </div>
  );
}
