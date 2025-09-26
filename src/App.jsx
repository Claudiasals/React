import Counter from "./Counter";
import TextInput from "./TextInput";
import LoginForm from "./LoginForm";
import { List, List2 } from "./ItemList"; //tra le graffe per importare i due componenti contenuti nlìel file jsx
import UncontrolledInput from "./UncontrolledInput";


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
    </>
  )

};

export default App;