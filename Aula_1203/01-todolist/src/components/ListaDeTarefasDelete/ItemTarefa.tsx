import { Tarefa } from "./TipoTarefa"

interface Props {
    tarefa: Tarefa;
    eliminaTarefa: (id: number) => void;
}

function ItemTarefa({tarefa, eliminaTarefa}: Props) {
  return (
    <li key={tarefa.id}>
        <input type="checkbox" checked={tarefa.completa} />
        <span >{tarefa.descricao}</span>
        <button onClick={() => eliminaTarefa(tarefa.id)}>Excluir</button>
    </li>
  )
}

export default ItemTarefa;