import { Check, Trash } from "phosphor-react";
import styles from "./styles.module.css";

interface TaskProps {
  title: string;
  isDone: boolean;
}

export function Task({ title, isDone }: TaskProps) {
  function handleCheckTask() {}

  function handleDeleteTask() {}

  return (
    <div className={styles.container}>
      <button
        className={`${styles.checkButton} ${isDone && styles.checkDoneButton}`}
        onClick={handleCheckTask}
      >
        {isDone && <Check size={10} weight="bold" />}
      </button>

      <span className={`${styles.title} ${isDone && styles.titleDone}`}>
        {title}
      </span>

      <button className={styles.trashButton} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
