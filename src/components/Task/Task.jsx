import styles from "./task.module.css";
function Task({ task }) {
  return (
    <div className={styles.task}>
      <p>{task}</p>
    </div>
  );
}
export default Task;
