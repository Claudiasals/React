import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import LoginForm from "./pages/LoginForm";


const App = () => {


  return (
    <>

    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />

      </Routes>
  
    </>
  )

};

export default App;