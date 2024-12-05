import './App.css'
import { Link, Outlet } from 'react-router'

function App() {
  return (
    <>
      <header>
        <h1> web app com route</h1>
        <nav>
        <Link to={"/"}>[Tela principal]</Link>
        <Link to={"/sobre"}>[Tela sobre]</Link>
        <Link to={"/usuarios"}>[Tela lista de usuarios]</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Nascendo um web app com rotas</p>
      </footer>
    </>
  )
}

export default App
