import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

// Creo il provider
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  // todos sono i dati da condividere e setTodos serve per aggiornarli

  const [loading, setLoading] = useState(true);
  /* Creo una variabile di stato (loading) e una funzione per modificarla (setLoading).
     All’inizio la imposto a true --> “sto ancora caricando”.
     Quando il fetch finisce (nel finally), la imposto a false.
  */

  const [error, setError] = useState(null);
  // serve per salvare eventuali messaggi d’errore

  // Inserisco il fetch direttamente dentro al provider
  // useEffect serve per eseguire del codice "di effetto collaterale"
// (come chiamate API o fetch) dopo che il componente è stato renderizzato
useEffect(() => {

    // Definiamo una funzione asincrona per fare la richiesta HTTP
    const fetchData = async () => {
      try {
        // Facciamo una richiesta GET all'URL indicato
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  
        // Se la risposta non è "ok" (cioè status non 200–299) interrompo il flusso e passo al 
        // throw che lancia un errore
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  
        // Convertiamo la risposta da JSON in un normale oggetto JavaScript
        const data = await res.json();
  
        // Aggiorniamo lo stato "todos" con i dati ottenuti
        setTodos(data);
  
      } catch (err) {
        // Se qualcosa va storto (es. errore di rete o status non ok),
        // memorizziamo il messaggio d’errore nello stato "error"
        setError(err.message);
  
      } finally {
        // Questo viene eseguito SEMPRE, anche in caso di errore
        // Qui diciamo a React che il caricamento è finito
        setLoading(false);
      }
    };
  
    // Chiamiamo subito la funzione per eseguire la fetch
    fetchData();
  
  // L’array vuoto [] significa: esegui questo effetto solo una volta,
  // quando il componente viene montato (come "componentDidMount" in classi)
  }, []);
  
  return (
    <TodoContext.Provider value={{ todos, setTodos, loading, error }}>
      {children}
      {/* Tutti i componenti figli qui dentro possono accedere ai dati del context */}
    </TodoContext.Provider>
  );
};

export default TodoProvider;


/* Sto creando il componente che assume il ruolo di Provider, dove specificheremo 
tutti i dati che vogliamo condividere nel context. Il context è un magzzino a cui 
accedono tutti i componenti. Accedono al ontext solo i componenti dove viene importato 
il provider, il provider è una sorta di porta al context. */


/*
Riassunto del flusso logico del fetch:

fetch() → parte la richiesta
attende (await) la risposta
se response.ok è falso → lancia un errore (throw)
si interrompe il blocco try
passa subito al catch
nel catch gestisci l’errore (es. setError(err.message))
dopo il catch, viene sempre eseguito il finally → chiudi il caricamento (setLoading(false))
*/