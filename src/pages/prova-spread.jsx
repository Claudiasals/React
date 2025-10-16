import React, { useEffect, useState } from "react";

const Prova = () => {
    const [data, setData] = useState([ //lo gestisco con lo state
        { id: "123", name: "Cla", class: "A" },
        { id: "124", name: "Jen", class: "B" },
        { id: "125", name: "Ken", class: "C" },
    ]);
/* 
il setData mi permette di inserire un el. in iù, per es. un useEffect
*/ 

useEffect(() => {
    setTimeout(() => {
setData((data) => ([...data, {id: "126", name: "Lily", class: "D"}]))
}, 2000); 
},
[]);
/* 
L’operatore spread (...) “scompone” un array o un oggetto nei suoi elementi.
Quando aggiorniamo lo state, React sostituisce l’intero valore con quello nuovo:
 - SENZA spread --> perdiamo i dati precedenti (rimane solo l’ultimo).
 - CON spread --> ricreiamo un nuovo array che contiene sia i dati vecchi 
   che i nuovi elementi aggiunti.
*/

    return (
        <>
            <table>
            
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CLASS</th>
                    </tr>
                </thead>
            
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id}> 
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.class}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </>
    )
} 
 export default Prova;