import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.css";
import { Task } from "../Task";
import { NewTask } from "../NewTask";

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: uuidv4(),
      title:
        "Finalizar o desafio ToDo List da trilha de ReactJS de 2022 do Ignite",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "Finalizar o trabalho de Inteligência Artificial",
      isDone: true,
    },
    {
      id: uuidv4(),
      title: "Finalizar o trabalho de Paradigmas de Programação",
      isDone: false,
    },
  ]);

  return (
    <main className={styles.container}>
      <NewTask />

      <div className={styles.info}>
        <div className={styles.created}>
          <span>Tarefas criadas</span>
          <div className={styles.counter}>5</div>
        </div>
        <div className={styles.done}>
          <span>Concluídas</span>
          <div className={styles.counter}>2 de 5</div>
        </div>
      </div>

      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} isDone={task.isDone} />
        ))}
      </div>
    </main>
  );
}
