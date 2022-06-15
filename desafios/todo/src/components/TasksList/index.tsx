import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.css";
import { Task } from "../Task";
import { NewTask } from "../NewTask";
import { Info } from "../Info";
import { Empty } from "../Empty";
import { ITask } from "../../types";

export function TasksList() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const storageTasks = JSON.parse(
      localStorage.getItem("@todo:tasks") || "[]"
    );

    setTasks(storageTasks);
  }, []);

  function handleCreateNewTask(title: string) {
    const newTask = {
      id: uuidv4(),
      title,
      isDone: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    localStorage.setItem("@todo:tasks", JSON.stringify([...tasks, newTask]));
  }

  function handleCheckTask(id: string) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isDone: !task.isDone,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  const totalCreatedTasks = tasks.length;
  const totalDoneTasks = tasks.reduce(
    (total, task) => (total += task.isDone ? 1 : 0),
    0
  );

  return (
    <main className={styles.container}>
      <NewTask onCreateNewTask={handleCreateNewTask} />

      <Info
        totalCreatedTasks={totalCreatedTasks}
        totalDoneTasks={totalDoneTasks}
      />

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCheckTask={handleCheckTask}
            onDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <Empty />
      )}
    </main>
  );
}
