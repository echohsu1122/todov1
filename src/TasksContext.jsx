import { createContext, useContext, useReducer } from "react";

//provides the current list of tasks.
export const TasksContext = createContext(null);
// provides the function that lets components dispatch actions.
export const TasksDispatchContext = createContext(null);

/*It will manage the state with a reducer.
It will provide both contexts to components below.
It will take children as a prop so you can pass JSX to it. */
export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
// It takes two arguments, the current state and the action object
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    default: {
      throw Error("Unknow action:" + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
