import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toDo, setToDo] = useState([]);

  const [updateTask, setUpdateTask] = useState(false);

  var test = 4;
  test = "tets";

  const [newText, setNewText] = useState("");

  // Add Task
  const addTask = () => {
    const newTask = { id: toDo.length + 1, title: newText, status: false };
    setToDo([...toDo, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    const newTodos = toDo.filter((task) => task.id !== id);
    setToDo(newTodos);
  };

  // Change Task
  const changeTask = (id) => {
    const newTodos = toDo.map((task) => {
      if (task.id == id) return { ...task, status: !task.status };
      return task;
    });

    setToDo(newTodos);
  };

  // Update Task
  // const updateTask = () => {};

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To-Do App (React.JS)</h2>
      <br />
      <br />
      {updateTask && updateTask ? (
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <button className="btn btn-success me-2" onClick={() => {}}>
              Update
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setUpdateTask(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success" onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>
      )}

      <span>{toDo.length ? "" : "No Tasks.."}</span>

      {toDo &&
        toDo.map((task, index) => {
          return (
            <div className="col taskBg">
              <div className={task.status ? "done" : ""}>
                <span className="taskNumber">{task.id}</span>
                <span className="taskText">{task.title}</span>
              </div>

              <div className="iconsWrap">
                <span
                  title="Completed / Not Completed"
                  onClick={() => changeTask(task.id)}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                <span title="Edit" onClick={() => setUpdateTask(true)}>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                <span title="Delete" onClick={() => deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
