import { Link } from "react-router-dom";

const Navbar = () => {

    return (

        <>
            <nav className="flex items-center justify-center gap-6 py-4 shadow">
                <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                > Home </Link>
                <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200"
                >  About </Link>
                <Link
                    to="/login"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Login
                </Link>

            </nav>
        </>

    )
}

export default Navbar

/*
Classe Tailwind	Effetto
flex items-center justify-center	Allinea i link orizzontalmente e li centra verticalmente
gap-6	Spazio tra i link
bg-gray-100	Sfondo grigio chiaro
py-4	Padding verticale
shadow	Aggiunge un’ombra leggera
text-gray-700	Colore del testo
hover:text-blue-600	Cambia colore al passaggio del mouse
transition-colors duration-200	Rende fluido il cambio colore
font-medium	Testo con peso medio
*/