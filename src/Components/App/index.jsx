import TaskForm from "../TaskForm";
import TasksContainer from "../TasksContainer";
import "./style.css";

function App() {
  return (
    <div>
      <a
        target="_blank"
        className={"link"}
        href="https://github.com/RedMaxMay/todo-calendar"
        rel="noreferrer"
      >
        Link GitHub
      </a>
      <TaskForm />
      <TasksContainer />
    </div>
  );
}

export default App;
