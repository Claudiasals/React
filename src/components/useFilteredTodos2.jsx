import { useState, useEffect } from "react";

//creo hook con parametri
function useFilteredTodos2 (todos =[], searchTerm="") {
    //dentro la funzione creiamo lo state per i todos filtrati
    const [filteredTodos, setFilteredTodos] = useState(todos);
/* 
filteredTodos → è la variabile che contiene lo stato attuale, 
cioè i to-do filtrati in questo momento (da mostrare a schermo).

setFilteredTodos → è la funzione che usi per aggiornare quello stato 
(cambia il contenuto di filteredTodos).

fa sì che:
filteredTodos = tutti i todos (cioè l’elenco completo, non filtrato),

setFilteredTodos = funzione che puoi usare per dire a React:
“Ehi, aggiorna filteredTodos con questo nuovo valore!”.
*/

useEffect(() => {

    const term = searchTerm.trim().toLowerCase(); // trasforma il termine di ricerca in minuscolo
    
if (!term) {
    setFilteredTodos(todos ?? []); 
    //se todos fosse null o undefined, usa un array vuoto [] per evitare errori.
    return;
}
// altrimenti filtra i todos in base ai termini di ricerca
const filtered = (todos).filter((todo) => 
todo.todo.toLowerCase().includes(term) // trasforma in minuscolo anche le todos nella lista api per fare il confronto
);

setFilteredTodos(filtered); //Aggiorno setFilteredTodos = funzione che puoi usare per dire a React:
// “Ehi, aggiorna filteredTodos con questo nuovo valore!”.

}, [todos, searchTerm]); // chiudo useEffect con le dipendenze 
    /*
    Qui diciamo a React: esegui questo effetto ogni volta che arrivano i todos 
    dal fetch o ogni volta che cambia todos oppure searchTerm
    */
    
    return filteredTodos; // quando viene utilizzato l'hook, ritorna la lista filtrata dei Todo
};


export default useFilteredTodos2
