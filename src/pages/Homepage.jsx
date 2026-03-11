import { useState } from "react";
const Homepage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Studiare React", completed: false },
    { id: 2, text: "Fare la spesa", completed: false },
    { id: 3, text: "Allenarsi", completed: true },
    { id: 4, text: "Leggere un articolo su JavaScript", completed: false },
    { id: 5, text: "Rivedere i CSS Flexbox", completed: true },
  ]);
  return <div></div>;
};

export default Homepage;
