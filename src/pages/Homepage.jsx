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

  return (
    <>
      <ul>
        {visibleTasks.map((task) => {
          return (
            <li key={task.id}>
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
