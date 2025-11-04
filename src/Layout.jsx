/*
Utilizza Outlet per layout comuni:
Modifica l'applicazione per utilizzare un layout comune con Outlet 
per il contenuto principale. 
Crea un componente Layout che includa la barra di navigazione e utilizzi 
Outlet per il rendering delle pagine.
*/

/*
Cos’è Outlet?
Outlet è un componente fornito da react-router-dom (dalla versione 6 in poi).
Serve come “punto di uscita” (da qui il nome Outlet) dove verranno renderizzate 
le pagine figlie di un certo percorso.

Immaginalo così:
- Layout è il contenitore comune (con Navbar, Footer, ecc.);
- Outlet è il punto dove React Router “inserisce” il contenuto della pagina attuale. 
*/

import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const Layout = () => {
    return (
        <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
    );
};

export default Layout