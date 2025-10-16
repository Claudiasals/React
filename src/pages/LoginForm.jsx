import { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "", // stato per email 
    password: "" // stato per password
  });

  const handleInput = (event) => {
    const { name, value } = event.target; // destrutturo il nome dell'input e il valore
    setForm((prev) => ({
      ...prev,
      [name]: value, // aggiorna solo il campo modificato
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // blocca il reload, per evitare che al submit la pagina venga aggiornata e quindi si perdano i dati
    alert(`Email: ${form.email}, Password: ${form.password}`);
  };

  return (
    <form onSubmit={handleSubmit}> {/* collega il submit del form alla funzione handleSubmit */}
      <input
        type="email"
        name="email"
        value={form.email} // inserisco value={form.email} così il valore dell'input sarà sempre sincronizzato con lo stato del componente
        onChange={handleInput} // ogni volta che scrivo nell'input aggiorna lo stato
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={form.password} // sincronizza anche la password con lo stato
        onChange={handleInput}
        placeholder="Password"
      />
      <button type="submit">Submit</button> {/* il bottone di tipo submit richiama handleSubmit */}
    </form>
  );
};

export default LoginForm;

/*
Quando clicchi sul bottone all’interno di un <form>, il form tenta di inviare e ricaricare la pagina.
Per evitarlo, devi passare l’evento e chiamare event.preventDefault():

const handleSubmit = (event) => {
    event.preventDefault(); // blocca il reload
    alert(`Email: ${form.email}, Password: ${form.password}`);
}

Senza preventDefault, il form si ricarica subito dopo il click e potresti non vedere l’alert o perdere i dati.
*/
