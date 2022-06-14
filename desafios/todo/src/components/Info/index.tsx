import styles from "./styles.module.css";

export function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.created}>
        <span>Tarefas criadas</span>
        <div className={styles.counter}>5</div>
      </div>
      <div className={styles.done}>
        <span>Concluídas</span>
        <div className={styles.counter}>2 de 5</div>
      </div>
    </div>
  );
}
