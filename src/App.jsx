import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Tarjeta from './Components/Tarjeta'

function App() {

  const [cliente, setCliente] = useState({
    name: '',
    date: null,
  })

  const [styles, setStyles] = useState({
    background: 'transparent',
    color: 'white'
  })
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(cliente.name.length > 3){
      setShow(true)
    }
  }

  return (
    <>
      <Formulario handleSubmit={handleSubmit}  setCliente={setCliente} setStyles={setStyles}/>
      
      {show && <Tarjeta cliente={cliente} styles={styles}/>}

    </>
  )
}

export default App
