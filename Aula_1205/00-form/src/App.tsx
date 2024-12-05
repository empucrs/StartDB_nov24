import './App.css'
import FormControlado from './components/formControlado'
import FormNaoControlado from './components/formNaoControlado'

function App() {

  return (
    <>
      <h1>Formulário Controlado (useState)</h1>
      <FormControlado />
      <hr />      
      <h1>Formulário Não Controlado (useRef)</h1>
      <FormNaoControlado />
    </>
  )
}

export default App
