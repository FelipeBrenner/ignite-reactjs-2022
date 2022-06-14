import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

export function TasksList() {
  function handleNewTaskTitle() {}

  function handleCreateNewTask() {}

  return (
    <main className={styles.container}>
      <div className={styles.newTaskContainer}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskTitle}
        />

        <button type="submit" onClick={handleCreateNewTask}>
          <strong>Criar</strong> <PlusCircle fontSize={20} />
        </button>
      </div>
    </main>
  );
}
