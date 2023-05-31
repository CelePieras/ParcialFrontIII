import React from 'react'

const Formulario = ({setCliente, setStyles, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
        <label >Nombre del cliente</label>
        <input type="text" onBlur={(e) => setCliente((prevState) => ({...prevState, name: e.target.value}))}/>
        <label >Fecha de Visita: </label>
        <input type="date" onChange={(e) => setCliente((prevState) => ({...prevState, date: e.target.value}))}/>

        <label >Color de auto</label>
        <select onChange={(e) => setStyles((prevState) => ({...prevState, background: e.target.value}))}>
            <option value="black">black</option>
            <option value="white">white</option>
            <option value="pink">pink</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <button>Enviar</button>
    </form>
  )
}

export default Formulario