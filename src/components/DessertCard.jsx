import React from 'react'

export const DessertCard = ({img, titulo, descripcion, precio,comprar}) => {
  return (
    <div className="gridItem">
      <img className="PincipalCard" src={img} alt={titulo} />
      <p className="description">{descripcion}</p>
      <hr />
      <p className="precio">{precio}</p>
      <div>
        <button>{comprar === "alimento" ? "Pruebalo" : "Trayectoria"}</button>
      </div>
    </div>

  )
}

