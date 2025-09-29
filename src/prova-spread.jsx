import React from "react";

const Prova = () => {
    const data = [
        { id: "123", name: "Cla", class: "A" },
        { id: "124", name: "Jen", class: "B" },
        { id: "125", name: "Ken", class: "C" },
    ];

    return (
        <>
            <table>
            
                <thread>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CLASS</th>
                    </tr>
                </thread>
            
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
