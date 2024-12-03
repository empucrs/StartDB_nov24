import { useState } from "react";
import ItemTarefa from "./ItemTarefa";
import { Tarefa } from "./TipoTarefa";

interface ListaTarefasProps {
    lista: Tarefa[];
}

function ListaTarefas( {lista}: ListaTarefasProps) {

  const [descricaoDaNovaTarefa, setDescricaoDaNovaTarefa] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState(lista);
  const [filtro, setFiltro] = useState("todas"); // "todas", "completas" ou "incompletas"

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

  const listaFiltrada = listaDeTarefas.filter((tarefa) => {
    if (filtro === "completas") {
      return tarefa.completa;
    } else if (filtro === "incompletas") {
      return !tarefa.completa;
    }
    return true;
  });

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
      <div>
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("completas")}>Completas</button>
        <button onClick={() => setFiltro("incompletas")}>Incompletas</button>
      </div>
      <ul>
        {listaFiltrada.map((tarefa) => (
          <ItemTarefa key={tarefa.id} {...tarefa} />
        ))}
      </ul>
   </div>
  )
}

export default ListaTarefas;