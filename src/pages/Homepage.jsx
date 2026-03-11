import { useState } from "react";
const Homepage = () => {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Studiare React", completed: true },
    { id: 2, text: "Fare la spesa", completed: true },
    { id: 3, text: "Allenarsi", completed: false },
    { id: 4, text: "Leggere un articolo su JavaScript", completed: true },
    { id: 5, text: "Rivedere i CSS Flexbox", completed: false },
  ]);

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <>
      <button
        onClick={() => {
          setFilter("all");
        }}
      >
        Tutti
      </button>
      <button
        onClick={() => {
          setFilter("active");
        }}
      >
        Non Completati
      </button>
      <button
        onClick={() => {
          setFilter("completed");
        }}
      >
        Completati
      </button>
      <ul>
        {visibleTasks.map((task) => {
          return (
            <li key={task.id} onClick={() => toggleTask(task.id)}>
              {task.text}, status:{" "}
              {task.completed ? "Completato" : "Non completato"}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Homepage;
