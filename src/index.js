import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { TodoProvider } from "./Components/Context/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
