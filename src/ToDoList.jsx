import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const ToDoList = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/todos");
  const [todos, setTodos] = useState([]); // stato locale modificabile

  // Copia i dati fetchati nello stato locale
  useEffect(() => {
    if (data && data.todos) {
      setTodos(data.todos);
    }
  }, [data]);

  // Funzione per invertire lo stato completed di un todo
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (loading) return <p>Caricamento lista To-Do...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!todos.length) return <p>Nessun dato trovato.</p>;

  return (
    <>
      <h2>Lista To-Do</h2>
      <ul>
        {todos.map((todo) => (   // <--- usa lo stato locale "todos"
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}   // checkbox dinamica
              onChange={() => toggleTodo(todo.id)}  // cliccando cambia lo stato
            />{" "}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.todo}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
