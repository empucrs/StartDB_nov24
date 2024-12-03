import { useReducer } from 'react'
import './App.css'

interface State{
  count: number
}

interface Action{
  type: string
}

function reducer(state: State, action: Action): State{  

  switch (action.type) {
    case 'incremento':      
    { return { count:state.count + 1 }; }
  
    case 'decremento':      
    { return {count:state.count - 1 }; }
  
    default:
      { throw Error('Ação desconhecida '+ action.type); }
  }
}

const estadoInicial = {count : 0};

function AppReducer() {
  const [estadoContador, dispatch] = useReducer(reducer, estadoInicial ) //{count : 0}

  function handleClickPlus() {
    dispatch({type: 'incremento'});
  }


  return (
    <div className="card">
      <button onClick={handleClickPlus} > + </button>
      <p>A nova contagem é {estadoContador.count} </p>
      <button onClick={ () => dispatch({type: 'decremento'}) } > - </button>
    </div>
  )
}

export default AppReducer
