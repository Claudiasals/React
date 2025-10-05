
/* ES. 22: Utilizza Fetch in una componente
Crea una componente chiamata TodoList che utilizza useFetch 
per recuperare una lista di to-do da un'API 
(puoi usare un endpoint fittizio come https://jsonplaceholder.typicode.com/todos). 
Visualizza i to-do in una lista, 
mostrando un messaggio di caricamento finché i dati non sono disponibili 
e un messaggio di errore se qualcosa va storto. */

import useFetch from "./useFetch";

const ToDoList2 = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    console.log(loading)
    console.log(error)
    console.log(data)

    if (loading) return <p>Caricamento lista To-Do...</p>;
 
    if (error) return <p>Errore: {error}</p>;


    return (
        <>
        <ul>
         {data.map((todo) => (  
          <li key={todo.id}>{todo.title}</li>
         ))}
         </ul>
        </>
    )
}

export default ToDoList2;