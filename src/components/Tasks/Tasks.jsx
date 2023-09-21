import styles from "./tasks.module.css";
import { useState } from "react";
import Task from "../Task/Task";

function Tasks() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleAddTask = e => {
    e.preventDefault();
    if (newTask.trim() !== " ") {
      setTask([...tasks, newTask]);
      setNewTask(" ");
    }
  };
  const handleInputChange = e => {
    setNewTask(e.target.value);
  };

  return (
    <section className={styles.tasks}>
      <div>
        <form onSubmit={handleAddTask} className={styles.newTaskForm}>
          <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter new task " />
          <button type="submit">Add Task</button>
        </form>
      </div>
      <header className={styles.taskInfo}>
        <div>
          <p>Created Tasks</p>
          <span>8</span>
        </div>
        <div>
          <p className={styles.textGreen}>Completed tasks</p>
          <span>2 of 2</span>
        </div>
      </header>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </section>
  );
}
export default Tasks;
