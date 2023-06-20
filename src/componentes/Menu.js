import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../hojas-de.estilo/Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className={`menu-contenido ${isOpen ? 'visible' : ''}`}>
        <ul>
          <li>
            <a href="www.youtube.com">Inicio</a>
          </li>
          <li>
            <a href="www.youtube.com">Locaciones</a>
          </li>
          <li>
            <a href="www.youtube.com">Nosotros</a>
          </li>
          <li>
            <a href="www.youtube.com">Contacto</a>
          </li>
        </ul>
      </div>

      <button className="menu-button" onClick={toggleMenu}>
        <FaBars />
      </button>
    </div>
  );
}

export default Menu;
