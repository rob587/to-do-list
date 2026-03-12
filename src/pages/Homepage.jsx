import { useEffect, useState } from "react";
const Homepage = () => {
  //stato per alternare il filtro tra ALL ACTIVE E COMPLETED, inizializzato a all
  const [filter, setFilter] = useState("all");

  //gestione dello stato per l'input
  const [inputValue, setInputValue] = useState("");

  //stato per la lista delle task - legge da localstorage se disponibile
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, text: "Studiare React", completed: true },
          { id: 2, text: "Fare la spesa", completed: true },
          { id: 3, text: "Allenarsi", completed: false },
          { id: 4, text: "Leggere un articolo su JavaScript", completed: true },
          { id: 5, text: "Rivedere i CSS Flexbox", completed: false },
        ];
  });

  //effetto per salvare nel localstorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //filtraggio delle task in base al filtro attivo nel momento
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // funzione per invertire lo stato della task selezionata
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  //funzione di rimozione della task tramite id
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //funzione di aggiunzione task con id unico basato sul timestamp
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        {/* Titolo + contatore */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 fw-bold mb-0">📝 Todo App</h1>
          <span className="badge bg-secondary fs-6">
            {tasks.filter((t) => !t.completed).length} rimasti
          </span>
        </div>

        {/* Input aggiungi task */}
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Aggiungi un nuovo task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && inputValue.trim() !== "") {
                addTask(inputValue);
                setInputValue("");
              }
            }}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              if (inputValue.trim() === "") return;
              addTask(inputValue);
              setInputValue("");
            }}
          >
            Aggiungi
          </button>
        </div>

        {/* filtri */}
        <div className="btn-group mb-4 w-100">
          <button
            className={`btn ${filter === "all" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setFilter("all")}
          >
            Tutti
          </button>
          <button
            className={`btn ${filter === "active" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setFilter("active")}
          >
            Non Completati
          </button>
          <button
            className={`btn ${filter === "completed" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setFilter("completed")}
          >
            Completati
          </button>
        </div>

        {/* Lista task */}
        <ul className="list-group">
          {visibleTasks.length === 0 && (
            <li className="list-group-item text-center text-muted">
              Nessun task da mostrare
            </li>
          )}
          {visibleTasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? "list-group-item-success" : ""}`}
              onClick={() => toggleTask(task.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-2">
                {/* Checkbox — stopPropagation evita il doppio toggle con il click sul li */}
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  onClick={(e) => e.stopPropagation()}
                />
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTask(task.id);
                }}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Homepage;
