import React, { useState, useContext } from "react";
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import Calendario from './Calendario';
import "../hojas-de.estilo/CatalogoLocaciones.css";
import { LocacionesContext } from './LocacionContext';

function LocacionGuardada() {
  const location = useLocation();
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [eventos, setEventos] = useState([]);
  const [locacionSeleccionada, setLocacionSeleccionada] = useState(null);
  const [locacionesGuardadas] = useContext(LocacionesContext);

  const seleccionarLocacion = (id) => {
    const locacionSeleccionada = locacionesGuardadas.find((locacion) => locacion.id === id);
    setLocacionSeleccionada(locacionSeleccionada);
    setMostrarCalendario(true);
  };

  const cerrarVentana = () => {
    setLocacionSeleccionada(null);
  };

  return (
    <div>
      <h2>Locaciones Guardadas</h2>
      <div className="locaciones-guardadas">
        {locacionesGuardadas.map((locacion) => (
          <div key={locacion.id}>
            <h3 className="locacion-nombre">{locacion.nombre}</h3>
            <p className="locacion-descripcion">{locacion.descripcion}</p>
            <button
              className={`calendario ${location.pathname === '/locaciones-guardadas' && locacionSeleccionada === locacion.id ? 'seleccionada' : ''}`}
              onClick={() => seleccionarLocacion(locacion.id)}
            >
              Calendario
            </button>
          </div>
        ))}
      </div>

      {mostrarCalendario && (
        <Modal isOpen={mostrarCalendario} onRequestClose={() => setMostrarCalendario(false)}>
          <Calendario eventos={eventos} agregarEvento={evento => setEventos([...eventos, evento])} />
          <Modal isOpen={locacionSeleccionada !== null} onRequestClose={cerrarVentana}></Modal>
        </Modal>
      )}
    </div>
  );
}

export default LocacionGuardada;
