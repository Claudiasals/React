import { useEffect, useState } from "react"

/* ESERCIZIO USEFETCH: Crea un hook personalizzato chiamato useFetch che recupera dati da una URL 
passata come argomento. L'hook dovrebbe restituire i dati recuperati, uno stato di caricamento 
e uno stato di errore. */

const useFetch = (url) => {
    const [data, setData] = useState(null); // gestisco lo stato dei dati
    const [loading, setLoading] = useState(true);  // gestisco lo stato del loading
    const [error, setError] = useState(null);  // gestisco lo stato degli errori

    const fetchData = async () => { // funzione che fa la fetch

        try { // codice che potrebbe causare errori di risposta o di rete 
            const response = await fetch("https://jsonplaceholder.typicode.com/comments"); // chiamata fetch
            if (!response.ok) { // se la chiamata non è ok esegui questo codice
                throw new Error(`Errore HTTP: ${response.status}`); // lanciamo l'errore 
            };

            const fetchedData = await response.json(); // converto json in valori js
            setData(fetchedData);

        } catch (error) { // cattura e gestisce gli errori generati nel try e f ail modo che il codice possa proseguire
            console.log(error) // loggo l'errore
            setError(error.message); // aggiorno lo state di error

        } finally {
            setLoading(false); // il fetch è terminato quindi setto loadign a false per interrompere il messaggio di loading
            // Senza il setLoading(false), il tuo componente resterebbe per sempre con loading = true, 
            //quindi nella UI vedresti sempre la scritta “Loading…” e non vedresti mai i dati o l’errore.
        };
    };

    useFetch(() => {
        fetchData();
    }, []); // DEPENDENCY ARRAY: array vuoto per eseguire al mount del componente


    return { data, loading, error }; // restituisce i dati, loading e error



};
export default useFetch;