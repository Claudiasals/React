import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import { List, List2, List3 } from "./ItemList"; //tra le graffe per importare i due componenti contenuti nlìel file jsx
import UncontrolledInput from "./UncontrolledInput";
import Prova from "./prova-spread";
import Card from "./Card"
import useFetch from "./useFetch";
import ToDoList from "./ToDoList";
import ToDoList2 from "./ToDoList2";

const App = () => {

  //definisco l'array di elementi da passare
  const arrayElements = ["Giove", "Marte", "Venere"];
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/comments");
  //prendo i tre valori dall’oggetto restituito dall’hook e li metti in tre variabili 
  //separate che puoi usare nel componente.

  return (
    <>
      <LoginForm />
      <Counter />
      <TextInput />
      <List />

      {/* passo l'array come prop */}
      <List2 />
      <List3 items={arrayElements} />


      <p>lorem ipsum</p>

      <UncontrolledInput />
      <Prova />
      <Card>
        <ul>
          <li>aggiunto</li>
          <li>children</li>
          <li>html</li>
        </ul>
      </Card>
      <ToDoList/>
      <h2> ToDoList2</h2>
      <ToDoList2/>

  {/* Mostro i dati della fetch */}
    {/* utilizziamo l'AND logico al posto di "if".
     e utilizziamo le 3 variabili collegate ai valori restituiti dall'hook.
     Se loading è true allora renderizza "Caricamento...""*/}
{loading && <p>Caricamento commenti...</p>}
{/* 
  Controllo lo stato `loading` restituito dal nostro hook useFetch. 
  Se `loading` è true, significa che la fetch è ancora in corso, 
  quindi mostro un messaggio di caricamento all’utente.
*/}

{error && <p>Errore: {error}</p>}
{/*
  Qui controllo se c’è un errore (`error` non è null). 
  Se c’è, significa che la fetch non è riuscita o c’è stato un problema di rete, 
  quindi mostro il messaggio di errore all’utente.
*/}

{data && (
  <ul>
    {data.slice(0, 5).map(comment => (
      <li key={comment.id}>{comment.body}</li>
    ))}
  </ul>
)}
{/*
  Qui controllo se `data` contiene dei dati (fetch completata con successo). 
  Se sì, creo una lista <ul> e tramite .map() trasformo ogni commento 
  in un <li> mostrando il testo del commento (`comment.body`). 
  `slice(0,5)` limita la visualizzazione ai primi 5 commenti.
  Ogni <li> ha un `key` unico (comment.id) necessario a React per gestire
  correttamente la lista.
*/}

    </>
  )

};

export default App;