import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import TodoProvider from "./components/TodoProvider";
import "./output.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  < TodoProvider >
    {/* Avvolgo qui tutto ciò che deve usare il context */ }
    <App />
  </TodoProvider>
  </BrowserRouter>

);
