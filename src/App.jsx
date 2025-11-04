import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginForm from "./pages/LoginForm";
import TodoDetails from "./pages/TodoDetails";


const App = () => {


  return (
    <>
      {/* useParams serve per segnalare a react quale parte dell'url è variabile. */}
      <Routes>
        {/* Layout come contenitore principale che contiene Navbar + Outlet */}
        <Route path="/" element={<Layout />} >
          
          {/* inserisco la pagina dei dettagli delle todo */}
          <Route path="todo/:id" element={<TodoDetails />} />

          {/* index = rotta principale ("/") */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  )

};

export default App;