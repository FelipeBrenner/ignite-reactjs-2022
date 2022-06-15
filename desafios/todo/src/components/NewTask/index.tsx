import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from "./styles.module.css";

interface NewTaskProps {
  onCreateNewTask: (title: string) => void;
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [title, setTitle] = useState("");

  function handleNewTaskTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleCreateNewTask() {
    onCreateNewTask(title);
    setTitle("");
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskTitle}
        value={title}
      />

      <button type="submit" onClick={handleCreateNewTask}>
        <strong>Criar</strong> <PlusCircle size={20} />
      </button>
    </div>
  );
}
