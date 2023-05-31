import React from 'react'

const Tarjeta = ({cliente,styles}) => {
  return (
    <div className='tarjeta' style={{backgroundColor: styles.background, color: styles.color}}>
        <h2>Bienvenido a nuestra concesionaria {cliente.name}</h2>
        <h3>Tu color de Auto Favorito es {styles.background}</h3>
        <h3>Tu entrevista será el {cliente.date}</h3>
        <h1>Te esperamos para conocerlo!!</h1>
    </div>
  )
}

export default Tarjeta