import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    /* useState restituisce un array con in posizione 0 il valore dello state
     e in posizione 1 la funzione che va a triggerare il set del valore 
     di state, quindi va a modificare il valore di state andando a 
     rendirizzare ciò che viene restituito da questo componente */
     // possiamo inserire più state , basta che abbiano un nome diverso 
     // es.: const [value, setValue] = useState(0);
    return (
        <div>
        <button></button>
        <p> Count: {count} </p>
        </div>
    )

}
export default Counter