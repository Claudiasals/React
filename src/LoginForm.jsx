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

    const submitButton = (event) => {
        event.preventDefault(); // blocca il reload
        return alert(`Username: ${username}, Password: ${password}`)
    }


    return (
        <form>
            <input type="text" value={username} onInput={loginUsername} />
            <input type="text" value={password} onInput={loginPassword} />
            <button onClick={submitButton}>SUBMIT</button>

        </form>
        /* inserisco value={username} così il valore degli input sarà sempre sincronizzato 
        con lo stato del componente. */

    )
}
export default LoginForm

/*
Quando clicchi sul bottone all’interno di un <form>, il form tenta di inviare e ricaricare la pagina.
Per evitarlo, devi passare l’evento e chiamare event.preventDefault():

const submitButton = (event) => {
    event.preventDefault(); // blocca il reload
    alert(`Username: ${username}, Password: ${password}`);
}


Senza preventDefault, il form si ricarica subito dopo il click e potresti non vedere l’alert o perdere i dati.
*/