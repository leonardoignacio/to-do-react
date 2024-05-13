import React, { useState } from 'react';
import ListaTarefas from './components/ListaTarefas/ListaTarefas';
import FormTarefa from './components/FormTarefa/FormTarefa';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa, concluida: false }]);
  };

  const marcarConcluida = (id) => {
    setTarefas(tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    }));
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <div className="container">
      <h1>TO-DO Gerenciador Tarefas</h1>
      <FormTarefa adicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        marcarConcluida={marcarConcluida}
        excluirTarefa={excluirTarefa}
      />
    </div>
  );
}

export default App;
