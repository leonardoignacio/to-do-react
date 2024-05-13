import React, { useState } from 'react';
import './FormTarefa.css';

function FormTarefa({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState('');

  const submeterDados = (e) => {
    e.preventDefault();
    if (novaTarefa.trim() !== '') {
      adicionarTarefa(novaTarefa);
      setNovaTarefa('');
    }
  };

  return (
    <form className="tarefa-form" onSubmit={submeterDados}>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormTarefa;
