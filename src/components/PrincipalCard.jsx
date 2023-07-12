import React from "react";

export const PrincipalCard = ({ img, titulo, descripcion, parrafo, tipo }) => {
  return (
    <div className="gridItem">
      <img className="PincipalCard" src={img} alt={titulo} />
      <p className="title">{titulo}</p>
      <p className="description">{descripcion}</p>
      <hr />
      <p>{parrafo}</p>
      <div>
        <button>{tipo === "alimento" ? "Pruebalo" : "Trayectoria"}</button>
      </div>
    </div>
  );
};
