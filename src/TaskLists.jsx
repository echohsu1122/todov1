import { useState } from "react";
import { useTasks } from "./TasksContext";
import Task from "./Task";
import Pagination from "./Pagenation";
export default function TaskLists() {
  const [tab, setTab] = useState("all");
  const inittasks = useTasks();
  const tasks = filterTasks(inittasks, tab);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = tasks.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(tasks.length / recordsPerPage);
  function filterTasks(tasks, tab) {
    return tasks.filter((task) => {
      if (tab === "all") {
        return true;
      } else if (tab === "active") {
        return !task.done;
      } else if (tab === "completed") {
        return task.done;
      }
    });
  }

  return (
    <>
      <div className={"tabs"}>
        <button
          className={`tab ${tab === "all" && "active-btn"}`}
          onClick={() => setTab("all")}
        >
          All
        </button>
        <button
          className={`tab ${tab === "active" && "active-btn"}`}
          onClick={() => setTab("active")}
        >
          Active
        </button>
        <button
          className={`tab ${tab === "completed" && "active-btn"}`}
          onClick={() => setTab("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        <ul>
          {currentRecords.map((task) => (
            <li key={task.id}>
              <Task task={task} />
            </li>
          ))}
        </ul>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}
