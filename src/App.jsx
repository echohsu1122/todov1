// import { useState } from "react";
// import { useReducer } from "react";
import TaskLists from "./TaskLists";
import AddTask from "./AddTask";
import TasksProvider from "./TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <div className="container">
        <h1>TO DO Lists </h1>
        <AddTask />

        <TaskLists />
      </div>
    </TasksProvider>
  );
}
