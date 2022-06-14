import { PlusCircle } from "phosphor-react";

import styles from "./styles.module.css";

export function NewTask() {
  function handleNewTaskTitle() {}

  function handleCreateNewTask() {}

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskTitle}
      />

      <button type="submit" onClick={handleCreateNewTask}>
        <strong>Criar</strong> <PlusCircle size={20} />
      </button>
    </div>
  );
}
