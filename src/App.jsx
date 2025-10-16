import Counter from "./pages/Counter";
import TextInput from "./pages/TextInput";
import LoginForm from "./pages/LoginForm";
import { List, List2, List3 } from "./pages/ItemList"; //tra le graffe per importare i due componenti contenuti nlìel file jsx
import UncontrolledInput from "./pages/UncontrolledInput";
import Prova from "./pages/prova-spread";
import Card from "./pages/Card"
import useFetch from "./pages/useFetch";
import ToDoList from "./pages/ToDoList";
import ToDoList2 from "./pages/ToDoList2";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {

  //definisco l'array di elementi da passare
  const arrayElements = ["Giove", "Marte", "Venere"];
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/comments");
  //prendo i tre valori dall’oggetto restituito dall’hook e li metti in tre variabili 
  //separate che puoi usare nel componente.

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
    </>
  )

};

export default App;