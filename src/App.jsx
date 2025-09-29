import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import { List, List2 } from "./ItemList"; //tra le graffe per importare i due componenti contenuti nlìel file jsx
import UncontrolledInput from "./UncontrolledInput";
import Prova from "./prova-spread";


const App = () => {

  return (
    <>
      <LoginForm />
      <Counter />
      <TextInput />
      <List />
      <List2 />
      <p>lorem ipsum</p>

      <UncontrolledInput/>
      <Prova/>
    </>
  )

};

export default App;