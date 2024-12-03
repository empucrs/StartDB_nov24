import ItemTarefa from "./ItemTarefa";
import { Tarefa } from "./TipoTarefa";

interface ListaTarefasProps {
    lista: Tarefa[];
}

function ListaTarefas( {lista}: ListaTarefasProps) {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {lista.map((tarefa) => (
          <ItemTarefa key={tarefa.id} {...tarefa} />
        ))}
      </ul>
   </div>
  )
}

export default ListaTarefas;