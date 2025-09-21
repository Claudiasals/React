import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState(""); // stato per username
    const [password, setPassword] = useState(""); // stato per password

    const loginUsername = (event) => {
        setUsername(event.target.value); // aggiorna lo stato username
        // setUsername: serve per collegare il valore dell’input allo stato del componente (input “controllato”).

        /*
        username → è la variabile di stato che contiene il valore attuale. 
        setUsername → è la funzione che React ti fornisce per aggiornare lo stato. 
        La parte set è standard e significa “imposta”/“aggiorna”, 
        e la parte Username corrisponde al nome dello stato a cui si riferisce. 
        */

        console.log(event.target.value);
    }
    
    const loginPassword = (event) => {
        setPassword(event.target.value); // aggiorna lo stato password
        console.log(event.target.value);
    }



    return (
        <form>
            <input type="text" onInput = {loginUsername} /> 
            <input type="text" onInput = {loginPassword} />
        </form>
    )
}
export default LoginForm