
/* ES. 22: Utilizza Fetch in una componente
Crea una componente chiamata TodoList che utilizza useFetch 
per recuperare una lista di to-do da un'API 
(puoi usare un endpoint fittizio come https://jsonplaceholder.typicode.com/todos). 
Visualizza i to-do in una lista, 
mostrando un messaggio di caricamento finché i dati non sono disponibili 
e un messaggio di errore se qualcosa va storto. */

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import useFetch from "./useFetch";
// importo la hook per filtrare i termini di ricerca
import useFilteredTodos from "./useFilteredTodos";



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



    // utlizzo l'hook per ottenere la lista filtrata
    // modifico integrando useMemo per memorizzare il risultsto del filtro e riaggiornarlo
    // solo se cambiano data (lista to do dall'API) o search ( ricerca termini)

    // useMemo serve a "memorizzare" il risultato del filtro,
    // e a rifarlo solo se cambiano i dati (data) o il testo di ricerca (search).
    const filteredTodos = useMemo(() => {

        //  Pulisce il termine di ricerca:
        // lo forza a essere una stringa
        const term = String(search ?? "").trim().toLowerCase();
        // search ?? "" ---> assicura che non sia null o undefine
        //  Se il termine è vuoto, ritorna direttamente tutti i to-do
        // (evita di filtrare inutilmente)
        if (!term) return data ?? [];
        // term = quello che l’utente ha scritto nel campo di ricerca, già pulito (minuscolo e senza spazi).
        // !term = se term è vuoto ( se non è term) e restituisce booleano
        // data ?? [] ---> Se i dati data esistono, restituiscili; altrimenti usa un array vuoto.”

        // Altrimenti, filtra i to-do:
        // controlla se ogni titolo contiene il termine di ricerca
        return (data ?? []).filter((todo) =>
            String(todo.title ?? "").toLowerCase().includes(term)
        );

        // useMemo ricalcola il filtro solo quando cambiano:
        // - data (lista originale)
        // - search (testo inserito dall’utente)
    }, [data, search]);


    // mostro i msg di loading e di errore, perché dal useFetch 
    // prende soltanto i valori e non i msg html
    if (error) return <p>Errore: {error}</p>;
    // if (loading) return <p>Caricamento lista To-Do...</p>; ---> elimino per contrasto con focus input. 
    // inserisco la condizione loading nel return. PERCHé? 
    // perchè questa conodizione blocca subito il render del resto del componente fino a quando 
    // loading diventa false. Di conseguenza l’input non viene mai montato nel DOM finché i dati non sono caricati.
    // Risultato: inputRef.current è sempre null durante il montaggio, quindi il focus non funziona. 
    // soluzione: mettere la condione nel JSX (il return) 
    /*
    L’input viene sempre renderizzato, indipendentemente dal fatto che loading sia true o false.
    Il messaggio di caricamento appare solo sopra l’input mentre i dati stanno arrivando.
    Quando loading passa a false, l’effetto useEffect può leggere inputRef.current e mettere il focus.
    */
    
    // creo la costante per mettere il focus sull'input
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) { /*
            !loading → significa “i dati sono stati caricati”, 
            quindi il componente ha finito di ricevere i dati da useFetch.
            inputRef.current → controlla che il ref sia collegato all’elemento <input>.
            Se non c’è ancora l’input nel DOM, inputRef.current sarebbe null.
            */
            inputRef.current.focus();
        }
    }, [loading]); // dipendenza [loading]: perché in questo caso serve usare loading come dipendenza?
    /* Finché loading è true, React non renderizza l’input.
    Quindi inputRef.current è ancora null.
    Solo quando loading diventa false, il componente “prosegue” oltre queste righe e rende l’input. */

    return ( // utilizzo map per ciclare e poter utilizzare i dati che mi servono 
        // da ogni elemento dell'array scaricato
        <>
            {loading && <p>Caricamento lista To-Do...</p>}
            {/*
             L’input viene sempre renderizzato, indipendentemente dal fatto che loading sia true o false.
              Il messaggio di caricamento appare solo sopra l’input mentre i dati stanno arrivando.
                 Quando loading passa a false, l’effetto useEffect può leggere inputRef.current e mettere il focus.
                  */}

            <input

                ref={inputRef} // collego la variabile che contiene le indicazioni per il focus


                // Il valore dell'input è legato allo stato "search"
                // Questo lo rende un "controlled component": React controlla cosa viene mostrato
                value={search}

                // Funzione che viene chiamata ogni volta che l'utente digita qualcosa
                // "e" è l'evento generato dall'input
                // setSearch aggiorna lo stato "search" con il valore attuale dell'input

                // onChange={(e) => setSearch(e.target.value)} --> la spstituisco con handleSearchChange
                onChange={handleSearchChange}

                /*
              Perchè serve onChange? perché senza onChange:
              L’input diventa readonly, perché React mostra sempre il valore di search 
              ma non c’è modo di aggiornarlo. Risultato: non puoi digitare nulla dentro.
              */


                // Testo che compare dentro l'input quando è vuoto
                // Serve da indicazione per l'utente su cosa scrivere
                placeholder="Cerca un to-do..."
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
