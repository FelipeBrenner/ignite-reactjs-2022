import styles from "./styles.module.css";

interface TaskProps {
  title: string;
  isDone: boolean;
}

export function Task({ title, isDone }: TaskProps) {
  return <div className={styles.container}></div>;
}
