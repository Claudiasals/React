import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import useFilteredTodos2 from "./useFilteredTodos2"; // importo la mia custom hook

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

  const [term, setTerm] = useState(""); // creo lo state per il termine di ricerca

  const filteredTodos2 = useFilteredTodos2(todos || [], term); // utilizzo hook personalizzandolo con i parametri di ToDoList

  if (loading) return <p>Caricamento lista To-Do...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!todos.length) return <p>Nessun dato trovato.</p>;

  return (
    <>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={term} // mostra il valore attuale della ricerca
        onChange={(e) => setTerm(e.target.value)} // aggiorna lo stato quando digiti
        placeholder="Cerca un to-do..." // testo grigio quando è vuoto
      />
      <ul>
        {filteredTodos2.map((todo) => (   // <--- usa lo stato locale "todos"
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}   // checkbox dinamica
              onChange={() => toggleTodo(todo.id)}  // cliccando cambia lo stato
            />{" "}
            {/*  <span> è un contenitore inline neutro (non crea blocchi, non cambia layout);
            serve per poter “agganciare” lo stile condizionale;
            dentro ci metto il testo del to-do. e la condizione per sbarrarlo */}
            <span style={{
              textDecoration: todo.completed ? "line-through" : "none", // utilizzo il ternario per applicare uno stile in base ad una condiione
              // Qui l'oggetto ha una sola proprietà: textDecoration.
            }}
            >
              {/* aggiungo la riga sui todo completati, se todo.completed è true si sbarra. */}
              {/* style è la prop inline per applicare stili CSS direttamente sull'elemento. */}

              {todo.todo} {/* mostro il testo del to-do */}
            </span>


            {/* Bottone Dettagli : “Quando l’URL corrisponde a /todo/id, React 
            mostra il componente (la pagina) <TodoDetails />.”*/}
            <Link to={`/todo/${todo.id}`}>
              <button>Details</button>
            </Link>


          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
