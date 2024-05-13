import React from 'react';
import './Tarefa.css';

function Tarefa({ tarefa, marcarConcluida, excluirTarefa }) {
  return (
    <li className={tarefa.concluida ? 'tarefa concluida' : 'tarefa'}>
      <span onClick={() => marcarConcluida(tarefa.id)}>{tarefa.texto}</span>
      <button onClick={() => excluirTarefa(tarefa.id)}>Excluir</button>
    </li>
  );
}

export default Tarefa;
