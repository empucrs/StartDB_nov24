import './App.css'
import ListaTarefas from './components/ListaDeTarefasDelete/ListaTarefas'

const todoList = [
  { id: 1, descricao: "Tarefa 1", completa: false },
  { id: 2, descricao: "Tarefa 2", completa: true  },
  { id: 3, descricao: "Tarefa 3", completa: false },
  { id: 4, descricao: "Tarefa 4", completa: true  },
  { id: 5, descricao: "Tarefa 5", completa: false },
  { id: 6, descricao: "Tarefa 6", completa: true  },
];

function App() {
  return (
    <ListaTarefas lista={todoList} />
  )
}

export default App
