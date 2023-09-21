import styles from "./header.module.css";
import todologo from "../../assets/todoLogo.svg";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Header({ onAddTask }) {
  const [title, setTitle] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onchangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todologo} />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="Add new task" type="text" value={title} onChange={onchangeTitle} />
        <button>Create</button>
      </form>
    </header>
  );
}

export default Header;
