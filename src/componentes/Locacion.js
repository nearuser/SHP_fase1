import React from "react";
import '../hojas-de.estilo/Locacion.css';

function Locacion({ locacion, seleccionarLocacion, agregarALocacionesGuardadas, abrirVentana }) {
  const handleClick = () => {
    seleccionarLocacion(locacion.id);
    agregarALocacionesGuardadas(locacion);
    abrirVentana(locacion); // Agregar esta línea para abrir la ventana emergente
  };

  return (
    <div className="locacion-card">
      <h3 className="locacion-nombre">{locacion.nombre}</h3>
      <p className="locacion-descripcion">{locacion.descripcion}</p>
      {/* Agrega aquí el resto del contenido de la tarjeta de locación */}
      <button onClick={handleClick}>Seleccionar</button>
    </div>
  );
}

export default Locacion;


/** codigo antes de agregar ventana emergente */
/*
import React from "react";
import '../hojas-de.estilo/Locacion.css';

function Locacion({ locacion, seleccionarLocacion, agregarALocacionesGuardadas }) {
  const handleClick = () => {
    seleccionarLocacion(locacion.id);
    agregarALocacionesGuardadas(locacion);
  };

  return (
    <div className="locacion-card">
      <h3 className="locacion-nombre">{locacion.nombre}</h3>
      <p className="locacion-descripcion">{locacion.descripcion}</p>
      {/* Agrega aquí el resto del contenido de la tarjeta de locación *//*}
      <button onClick={handleClick}>Seleccionar</button>
    </div>
  );
}

export default Locacion;*/
