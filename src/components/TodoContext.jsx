import { createContext } from "react";

const TodoContext = createContext(); // crea il contesto
export default TodoContext;
/*
Il contesto (Context) in React è come una scatola centrale dei dati a 
cui possono accedere molti componenti senza dover passare i dati di 
componente in componente tramite le props.
*/