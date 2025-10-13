import { useState, useEffect } from "react";

function useFilteredTodos3 (todos = [], terminiRicerca = "") {
    const [todosAggiornati, setTodosAggiornati] = useState(todos);

useEffect(() => {
   const ricerca = terminiRicerca.toLowerCase().trim();


if (!ricerca) {
    setTodosAggiornati(todos);
    return;
  }

const filtrati = todos.filter((todo) => 
todo.toLowerCase().includes(ricerca)
);

setTodosAggiornati(filtrati)

}, [todos, terminiRicerca]);

return todosAggiornati;
}

export default useFilteredTodos3;