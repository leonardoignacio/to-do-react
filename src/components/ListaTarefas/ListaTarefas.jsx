import React from 'react';
import Tarefa from '../Tarefa/Tarefa';
import './ListaTarefas.css';

const ListaTarefas=({ tarefas, marcarConcluida, excluirTarefa })=> {
  return (
    <ul className="lista-tarefas">
      {tarefas.map(tarefa => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          marcarConcluida={marcarConcluida}
          excluirTarefa={excluirTarefa}
        />
      ))}
    </ul>
  );
}

export default ListaTarefas;

