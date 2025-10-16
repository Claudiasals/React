import { useState } from "react";

const TextInput = () => {
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
      <input type="text" value={text} onChange = {handleInput} /> 
      <p>Hai scritto: {text}</p>
    </>
  )
}
// oppure onInput, onChange è l'attributo più corretto per l'input di testo
// value={text}: 
//questo trasforma l’input in un controlled component → l’input mostra sempre il valore che hai nello stato text.

// <p>Hai scritto: {text}</p> Per vedere subito a schermo quello che digitiamo
  export default TextInput
