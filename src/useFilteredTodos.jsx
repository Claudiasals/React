/* React
Crea un hook per filtrare i to-do
Crea un hook personalizzato chiamato useFilteredTodos che accetta 
una lista di to-do e un termine di ricerca. Utilizza useEffect per filtrare 
i to-do in base al termine di ricerca e restituisci i to-do filtrati. */

// importo gli hook che mi servono
import { useState, useEffect } from "react";

// hook che accetta due argomenti(parametri): 1.una lista to do 2.parola ricercata
const useFilteredTodos = (todos, searchTerm) => {
    // Stato interno per salvare la lista filtrata
    const [filteredTodos, setFilteredTodos] = useState(todos);

// utilizzo useEffect per filtrare per titolo le todo dellla lista todos, includendo searchTerm
useEffect(() => {
    const filtered = todos?.filter(todo => todo.title.toLowerCase().includes(searchTerm));

    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  return filteredTodos;
};
    

export default useFilteredTodos;