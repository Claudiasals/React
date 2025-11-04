import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import LoginForm from "./pages/LoginForm";


const App = () => {


  return (
    <>
      <Routes>
        {/* Layout come contenitore principale che contiene Navbar + Outlet */}
        <Route path="/" element={<Layout />} >
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