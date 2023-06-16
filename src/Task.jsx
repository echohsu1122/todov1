import { useState } from "react";
import { useTasksDispatch } from "./TasksContext";

import imgEdit from "./assets/write.png";
import imgDele from "./assets/remove.png";
import imgSave from "./assets/diskette.png";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let textContext;
  if (isEditing) {
    textContext = (
      <>
        <span className="todo_title">
          <textarea
            value={task.text}
            onChange={(e) =>
              dispatch({
                type: "changed",
                task: { ...task, text: e.target.value },
              })
            }
          />{" "}
        </span>
        <button className="btn_img" onClick={() => setIsEditing(false)}>
          <img src={imgSave} />
        </button>
      </>
    );
  } else {
    textContext = (
      <>
        <span className="todo_title">{task.text}</span>

        <button className="btn_img" onClick={() => setIsEditing(true)}>
          {" "}
          <img src={imgEdit} />
        </button>
      </>
    );
  }
  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: "changed",
            task: { ...task, done: e.target.checked },
          })
        }
      />
      {textContext}
      <button
        className="btn_img"
        onClick={() =>
          dispatch({
            type: "deleted",
            id: task.id,
          })
        }
      >
        <img src={imgDele} />
      </button>
    </>
  );
}
