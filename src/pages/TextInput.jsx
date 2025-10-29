import { useState } from "react";
import { useRef, useEffect } from "react"; 
// importo useRef per mettere il focus sull'input 
// e importo useEffect per dire a react quando eseguirlo

const TextInput = () => {
  // creo la costante per mettere il focus sull'input
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // metti il cursore quando monta il componente
  }, []); // dipendenza []: useEffect con array vuoto [] fa sì che il focus venga 
  // impostato solo al montaggio del componente.

  const [text, setText] = useState(""); // inizializzo stringa vuota

  const handleInput = (event) => {
    setText(event.target.value); // aggiorno lo stato con quello che scrivi
    console.log(event.target.value); // stampo in console il valore
  };
  /*
  text → è la variabile di stato che contiene il valore attuale (inizialmente "", 
  cioè stringa vuota).
  
  setText → è la funzione che modifica quello stato. Non puoi cambiare text direttamente, 
  devi sempre passare da setText. 
  */

  /*
  ---- Cosa succede in setText(event.target.value):
  Quando scrivi dentro un input (<input type="text" />), React ti dà accesso all’evento event:
  event.target → è l’elemento HTML che ha scatenato l’evento, in questo caso l’<input>.
  event.target.value → è il valore attuale dentro la casella di testo (quello che stai digitando).
  */
  return (
    <>
      <input ref={inputRef} type="text" value={text} onChange={handleInput} />
      <p>Hai scritto: {text}</p>
    </>
  )
}
// oppure onInput, onChange è l'attributo più corretto per l'input di testo
// value={text}: 
//questo trasforma l’input in un controlled component → l’input mostra sempre il valore che hai nello stato text.

// <p>Hai scritto: {text}</p> Per vedere subito a schermo quello che digitiamo
export default TextInput


/* esercizio :
React

Gestisci il focus dell'input di ricerca con useRef
Utilizza useRef per gestire il focus dell'input di ricerca quando il componente viene montato. 

--> Quando un campo di input è “in focus”, 
significa che il cursore lampeggia dentro di lui, pronto per scrivere.

*/