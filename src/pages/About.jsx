// importo l'hook useNavigate di react-router-dom 
// ci permette di navigare senza link
import { useNavigate } from "react-router-dom";

const About = () => {
    // inizializzo l'hoook:
    // creao la costante per chiamare e poter poi
    // utilizzare l'hook useNavigate
    const navigate = useNavigate(); 

    // utilizzo useNavigate per creare il collegamento con Home 
    const goHome = () => { 
        navigate("/"); // gli dico: naviga verso la Home
      };

    return (
        <>
            <h1>About This App</h1>
            <p>Questa è una semplice applicazione per gestire le tue attività quotidiane.</p>
            <button onClick={goHome}> HOME </button>
            {/* in button collego il click alla const che mi da le indicazioni sulla navigazione */}
        </>
    )
};

export default About;