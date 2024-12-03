import { useState } from "react";
import ItemTarefa from "./ItemTarefa";
import { Tarefa } from "./TipoTarefa";

interface ListaTarefasProps {
    lista: Tarefa[];
}

function ListaTarefas( {lista}: ListaTarefasProps) {

  const [descricaoDaNovaTarefa, setDescricaoDaNovaTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState(lista);

  function adicionaTarefa() {
    const id = listaDeTarefas.map((tarefa) => tarefa.id).reduce((max, val) => Math.max(max, val), -Infinity) + 1;
    const novaTarefa = {
      id: id,
      descricao: descricaoDaNovaTarefa,
      completa: false,
    };
    setListaDeTarefas([...listaDeTarefas, novaTarefa]);
    setDescricaoDaNovaTarefa("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          placeholder="descreva a nova tarefa"
          value={descricaoDaNovaTarefa}
          onChange={(e) => setDescricaoDaNovaTarefa(e.target.value)} 
        />
        <button onClick={adicionaTarefa}>Adicionar</button>
      </div>
      <ul>
        {listaDeTarefas.map((tarefa) => (
          <ItemTarefa key={tarefa.id} {...tarefa} />
        ))}
      </ul>
   </div>
  )
}

export default ListaTarefas;