import { useState } from "react";
const Homepage = () => {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    { id: 1, text: "Studiare React", stato: "Non completato" },
    { id: 2, text: "Fare la spesa", stato: "Completato" },
    { id: 3, text: "Allenarsi", stato: "Non completato" },
    { id: 4, text: "Leggere un articolo su JavaScript", stato: "Completato" },
    { id: 5, text: "Rivedere i CSS Flexbox", stato: "Completato" },
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
              {task.text}, status: {task.stato}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Homepage;
