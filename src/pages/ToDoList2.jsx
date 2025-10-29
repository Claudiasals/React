/* ES. 22: Utilizza Fetch in una componente
Crea una componente chiamata TodoList che utilizza useFetch 
per recuperare una lista di to-do da un'API 
(puoi usare un endpoint fittizio come https://jsonplaceholder.typicode.com/todos). 
Visualizza i to-do in una lista, 
mostrando un messaggio di caricamento finché i dati non sono disponibili 
e un messaggio di errore se qualcosa va storto. */

import { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import useFetch from "./useFetch";
// importo la hook per filtrare i termini di ricerca
// import useFilteredTodos from "./useFilteredTodos";
import TodoContext from "./TodoContext"; // importa il context

const ToDoList2 = () => {
    // Chiamo l'hook useFetch per recuperare i dati dall'API.
    // L'hook restituisce tre valori: 
    // data = i dati ricevuti dall'API
    // loading = true se la fetch è in corso, false se terminata
    // error = eventuale messaggio di errore se la fetch fallisce    
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos");
    console.log(loading)
    console.log(error)
    console.log(data)

    // creo lo state per i termini di ricerca
    const [search, setSearch] = useState("");

    // useCallback per memorizzare la funzione e non ricrearla a ogni render
    const handleSearchChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);
    /* 
    Ogni volta che lo stato o le props di un componente cambiano, 
    React ricrea il componente. Come risolviamo? con useCallback.
    1) handleSearchChange ora è memorizzato con useCallback, 
    quindi React non lo ricrea ad ogni render.
    2) L’input rimane controllato e funziona esattamente come prima.
    3) I componenti figli che eventualmente ricevono questa funzione 
    come prop non si ri-renderizzano inutilmente.
    */

    // utilizzo todos e setTodos dal context 
    const { todos, setTodos } = useContext(TodoContext);

    // quando arrivano i dati dalla fetch, aggiorno lo stato globale
    useEffect(() => {
        if (data) {           
            // jsonplaceholder restituisce un array direttamente
            setTodos(Array.isArray(data) ? data : []);  
            // Aggiorna lo stato globale condiviso
            // Tutti i componenti figli che leggono il context vedranno subito i dati aggiornati
       /*
       setTodos(data) è stato sostituito con 
       setTodos(Array.isArray(data) ? data : []) 
       per garantire che lo stato globale sia sempre un array, 
       indipendentemente dalla struttura di data.
       */
       
       
        }
    }, [data, setTodos]); 
    // Dipendenza [data, setTodos]: l'effetto viene rieseguito quando i dati cambiano

    // creo la costante per mettere il focus sull'input
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) { 
            /*
            !loading → significa “i dati sono stati caricati”, 
            quindi il componente ha finito di ricevere i dati da useFetch.
            inputRef.current → controlla che il ref sia collegato all’elemento <input>.
            Se non c’è ancora l’input nel DOM, inputRef.current sarebbe null.
            */
            inputRef.current.focus();
        }
    }, [loading]); 
    /* Finché loading è true, React non renderizza l’input.
    Quindi inputRef.current è ancora null.
    Solo quando loading diventa false, il componente “prosegue” oltre queste righe e rende l’input. */

    // utilizzo useMemo per memorizzare il risultsto del filtro e riaggiornarlo
    // solo se cambiano todos (dal context) o search ( ricerca termini)
    const filteredTodos = useMemo(() => {
        //  Pulisce il termine di ricerca:
        // lo forza a essere una stringa
        const term = String(search ?? "").trim().toLowerCase();
        // search ?? "" ---> assicura che non sia null o undefine
        //  Se il termine è vuoto, ritorna direttamente tutti i to-do
        // (evita di filtrare inutilmente)
        if (!term) return todos ?? [];

        // Altrimenti, filtra i to-do:
        // controlla se ogni titolo contiene il termine di ricerca
        return (todos ?? []).filter((todo) =>
            String(todo.title ?? "").toLowerCase().includes(term)
        );

        // useMemo ricalcola il filtro solo quando cambiano:
        // - todos (lista globale dal context)
        // - search (testo inserito dall’utente)
    }, [todos, search]);

    // mostro i msg di loading e di errore, perché dal useFetch 
    // prende soltanto i valori e non i msg html
    if (error) return <p>Errore: {error}</p>;
    // if (loading) return <p>Caricamento lista To-Do...</p>; 
    // elimino per contrasto con focus input. Inserisco la condizione nel JSX

    return ( 
        <>
            {loading && <p>Caricamento lista To-Do...</p>}
            {/*
             L’input viene sempre renderizzato, indipendentemente dal fatto che loading sia true o false.
             Il messaggio di caricamento appare solo sopra l’input mentre i dati stanno arrivando.
             Quando loading passa a false, l’effetto useEffect può leggere inputRef.current e mettere il focus.
            */}

            <input
                ref={inputRef} // collego la variabile che contiene le indicazioni per il focus
                value={search} // Il valore dell'input è legato allo stato "search"
                onChange={handleSearchChange} // aggiorna lo stato quando l'utente digita
                placeholder="Cerca un to-do..." // testo grigio quando è vuoto
            />

            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
                {/* Per ogni todo filtrato creo un <li> con titolo
                   key={todo.id} serve a React per sapere quale elemento è quale quando aggiorna il DOM */}
            </ul>
        </>
    )
}

export default ToDoList2;

/* SPIEGAZIONE DELLA SOLUZIONE DEL BUG DEL FOCUS SULL'INPUT CAUSATO DALLA CONDIZIONE IF LOADING:
Prima: if (loading) return ... fuori dal return
if (loading) return <p>Caricamento lista To-Do...</p>;
return (
  <input ref={inputRef} ... />
  <ul>...</ul>
)

React legge il componente.
Appena incontra if (loading) return ..., interrompe il render e restituisce solo quel <p>.
Tutto il resto del JSX (input, lista) non viene nemmeno calcolato.
Risultato: l’input non esiste ancora nel DOM → inputRef.current è null.

Quando loading diventa false, React riesegue il componente e questa volta passa al resto del JSX.

➡️ Problema risolto: l’input viene sempre renderizzato e il focus può essere applicato. */
