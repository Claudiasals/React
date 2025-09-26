// Es. 14-15-16 useRef UncontrolledInput
import {useRef} from "react";

const UncontrolledInput = () => {
 const inputRef = useRef();

 
const handleSubmit = (event) => {
    event.preventDefault();
    // Legge il valore dell'input tramite il ref
    alert(`Hai scritto: ${inputRef.current.value}`);
  }


 return (
    <form onSubmit={handleSubmit}>
    <input type="text" ref={inputRef} placeholder="Scrivi qui..." />
    <button type="submit">Invia</button>
  </form>
);
};

export default UncontrolledInput;


/*
Nella versione con useRef, il ref punta direttamente all’input, 
e quando clicchi “Invia” (o fai submit), la funzione handleSubmit 
legge il valore dell’input tramite il ref:

alert(`Hai scritto: ${inputRef.current.value}`);

inputRef.current → è l’elemento <input> vero e proprio nel DOM.
.value → è il testo che l’utente ha scritto dentro l’input.

L’alert serve solo a mostrare quel valore.
Quindi sì, l’alert legge il valore tramite ref, 
senza bisogno di useState.
*/