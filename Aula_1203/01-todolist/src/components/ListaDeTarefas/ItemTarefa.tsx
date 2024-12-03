import { Tarefa } from "./TipoTarefa"

function ItemTarefa(algo: Tarefa) {
  return (
    <li key={algo.id}>
        <span>{algo.id} ; {algo.descricao} ; {algo.completa ? "Feito" : "Por fazer"}</span>
    </li>
  )
}

export default ItemTarefa;