import './App.css';
import logo from './imagenes/logos/logo-rectagular.png'
import CatalogoLocaciones from './componentes/CatalogoLocaciones';
import React, { useState } from 'react';
import Menu from './componentes/Menu';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className='logo-contenedor'>
          <img
            src={logo}
            className='logo'
            alt='logo del proyecto' 
          />
        </div>
        <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
      </header>
      
      <div className="aplicacion-tareas">
        <div className='componentes-principales'>
          <CatalogoLocaciones />
        </div>
      </div>
    </div>
  );
}

export default App;
