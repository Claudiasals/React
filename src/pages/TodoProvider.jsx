import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

// creo il provider
const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    // todos sono i dati da condividere e setTodos come usarli
    /*
Questo è un hook interno di React introdotto in React 18.
Serve per connettere React a uno “store esterno” (tipo Redux o un oggetto condiviso) 
in modo che il componente si aggiorni quando lo store cambia.
    */

return (
    <TodoContext.Provider value={{ todos, setTodos }}>
        {children} {/* tutti i componenti figli qui dentro possono accedere a todos */}
    </TodoContext.Provider>
);
};

export default TodoProvider;

/* Sto creando il componente che assume il ruolo di Provider, dove specificheremo 
tutti i dati che vogliamo condividere nel context. Il context è un magzzino a cui 
accedono tutti i componenti. Accedono al ontext solo i componenti dove viene importato 
il provider, il provider è una sorta di porta al context. */