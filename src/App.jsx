import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import { List, List2, List3 } from "./ItemList"; //tra le graffe per importare i due componenti contenuti nlìel file jsx
import UncontrolledInput from "./UncontrolledInput";
import Prova from "./prova-spread";


const App = () => {

  //definisco l'array di elementi da passare
  const arrayElements = ["Giove", "Marte", "Venere"];

  return (
    <>
      <LoginForm />
      <Counter />
      <TextInput />
      <List />

       {/* passo l'array come prop */}
      <List2/>
      <List3 items={arrayElements} />


      <p>lorem ipsum</p>

      <UncontrolledInput/>
      <Prova/>
    </>
  )

};

export default App;