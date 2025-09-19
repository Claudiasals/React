import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);
    /* Destracturing da useState: useState restituisce un array con in posizione 0 il valore dello state
     e in posizione 1 la funzione che va a triggerare il set del valore 
     di state, quindi va a modificare il valore di state andando a 
     rendirizzare ciò che viene restituito da questo componente. */
    // Il secondo parametro inizia sempre con "set" e poi il nome della variabile.
    // possiamo inserire più state , basta che abbiano un nome diverso 
    // es.: const [value, setValue] = useState(0);

    //inseriamo nel bottone l'attributo "onClick" con all'interno la funzione {} 
    // che vogliamo sia eseguita al click, ovvero {handleClickButton}
    const handleClickButton = () => {
        setCount((_count) => {// CALLBACK PER accedere al valore precedente per sommare 1
            //aggiungiamo _ per far capire che sono diversi i cunt ma si chiamano uguae perché sono collegati
            return _count + 1; // la callback ci deve restituire questo valore 
        });
    }
    const handleClickButton2 = () => {
        setCount((_count) => {// CALLBACK PER accedere al valore precedente per sommare 1
            //aggiungiamo _ per far capire che sono diversi i cunt ma si chiamano uguae perché sono collegati
            return _count - 1; // la callback ci deve restituire questo valore 
        });
    }

    const resetButton = () => 
        setCount(0); // riportiamo count a 0
    


        return (
            <div>
                <button onClick={handleClickButton}>ADD +1</button>
                <button onClick={handleClickButton2}>ADD -1</button>
                <button onClick={resetButton}>RESET</button>

                <p> Count: {count} </p>
            </div>
        )
    };
   
    export default Counter