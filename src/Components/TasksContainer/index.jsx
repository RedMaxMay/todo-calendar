import React from "react";
import TaskDay from "../TaskDay";
import s from "./style.module.css";

export default function TasksContainer({
  tasks,
  deleteTask,
  deleteAllDayTasks,
}) {
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
          <TaskDay
            tasks={mon}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}

      {tue[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Tue</div>
          <TaskDay
            tasks={tue}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}

      {wed[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Wed</div>
          <TaskDay
            tasks={wed}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}

      {thu[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Thu</div>
          <TaskDay
            tasks={thu}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}

      {fri[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Fri</div>
          <TaskDay
            tasks={fri}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}

      {sat[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Sat</div>
          <TaskDay
            tasks={sat}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}

      {sun[0] && (
        <div className={s.tasks_container}>
          <div className={s.tasks_container_day}>Sun</div>
          <TaskDay
            tasks={sun}
            deleteTask={deleteTask}
            deleteAllDayTasks={deleteAllDayTasks}
          />
        </div>
      )}
    </div>
  );
}
