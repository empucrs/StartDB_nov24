import { Tarefa } from "./TipoTarefa"

function ItemTarefa(algo: Tarefa) {
  return (
    <li key={algo.id}>
        <span>{algo.descricao}</span>
    </li>
  )
}

export default ItemTarefa;