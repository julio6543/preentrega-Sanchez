
import './App.css'
import { NavBar } from './Components/NavBar/NavBar'

function App() {
  const saludar = () =>{
    alert("Bienvenido")
  }

  return (
    // is a React.fragment
    <div className='App'>
    <NavBar/>
    <button onClick={saludar}>click</button>
    </div>
  )
}

export default App
