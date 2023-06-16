import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TasksContext";

let nextId = 3;
export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <div className="wrap_add">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn_add"
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        +
      </button>
    </div>
  );
}
