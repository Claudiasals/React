// Es. 16: Aggiungi un bottone che, quando cliccato, mostra un alert con il valore corrente dell'input di testo.

import React from "react";

// Il componente ItemList riceve una "prop" chiamata items
// (cioè un array di elementi che vogliamo mostrare come lista).
function List() {
    const name = ["Claudia", "Margherita", "Piero", "Gianfranco", "Samanta"];
    return (
        <>
        <h2> array di stringhe </h2>
        <ul> 
            {name.map((item, index) => { //usiamo .map per utilizzare l'array e trasformarlo
                return <li key={index}>{item}</li> //In questo caso essendo un array gli diamo come key l'indice
            })}
        </ul>
        </>
    )
}

/* Cos’è una prop? In questo esempio la prop si chiama items ed è 
un array di stringhe dentro ItemList. React usa questa prop 
per fare il .map e trasformare ogni stringa in un <li>.
Così il componente ItemList diventa riutilizzabile: 
puoi passargli un array di stringhe, di oggetti o di numeri. */

function List2() {
    const objs = [
        {
            id: 1,
            name: "Claudia",
            lastname: "Salsini"
        }, 
    {
        id: 2,
        name: "Piero",
        lastname: "Rossi"
    }];

    return (
        <>
        <h2> array di oggetti </h2>
        <ul>
                {objs.map((item,index) => { 
                return <li key={item.id}>{item.id}</li>})} 
      
        </ul>
        </>
    )
} /* senza key React mostrerà un warning in console */


export const List3= ({ items }) => {
    return (
        <>
        <h2> Lista importata da array in App</h2>
        <ul>
            {items.map((el, index) => ( // el rappresenta ogni elemento dell'array. 
            // Il secondo parametro di .map(), cioè l’index, serve solo se non hai un identificatore unico da usare come key.
                <li key={index}>{el}</li>
            ))}
        </ul>
        </>
    )
}

export {List, List2}; // esportazione nominata per esportare più di un componente dallo stesso file

// part2: Usa il componente ItemList in un altro componente principale, passando un array di elementi.
