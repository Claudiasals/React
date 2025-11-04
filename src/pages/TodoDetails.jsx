// ES. useParams: useParams serve per segnalare a react quale parte 
// dell'url è variabile. 
/* 
In questo modo React può leggere quel valore (es. l'id) e aggiornare la pagina
in base a quel parametro specifico, che nel nostro caso identifica
il singolo to-do di cui vogliamo mostrare i dettagli.
In pratica, ci permette di fare una chiamata API mirata a quel to-do soltanto. 
*/

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const TodoDetails = () => {

    /* creiamo la const per dire a React di prendere 
    il parametro chiamato id dalla URL attuale */
    const { id } = useParams(); // Leggo l'id dalla URL
    const [todo, setTodo] = useState(null);


    useEffect(() => {
        // Faccio la chiamata API con l'id
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((data) => setTodo(data))
            .catch((err) => console.error("Errore:", err));
    }, [id]); // si aggiorna se cambia l'id


    if (!todo) return <p>Caricamento...</p>;


    return (
        <>
            <h1>Dettagli To-do</h1>
            <p>ID: {todo.id}</p>
            <p>Todo: {todo.todo}</p>
            <p>Stato: {todo.completed ? "Completato" : "Da fare"}</p>
            <p>userID: {todo.userId}</p>

        </>
    )
}

export default TodoDetails;