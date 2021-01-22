import React from 'react';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul className="menuMenu">
        <li className="menuSubMenu">
          <p> Laboratório </p>
          <ul>
            <li className="menuSubSubMenu">
              <a href="/Laboratorio/Registrar"> Registrar </a>
            </li>
            <li className="menuSubSubMenu">
              <a href="/Laboratorio/Listar"> Listar </a>
            </li>
          </ul>
        </li>
        <li className="menuSubMenu">
          <p> Equipamento </p>
          <ul>
            <li className="menuSubSubMenu">
              <a href="/Equipamento/Registrar"> Registrar</a>
            </li>
            <li className="menuSubSubMenu">
              <a href="/Equipamento/Listar"> Listar </a>
            </li>
          </ul>
        </li>
        <li className="menuSubMenu">
          <p> Software </p>
          <ul>
            <li className="menuSubSubMenu">
              <a href="/Software/Registrar"> Registrar</a>
            </li>
            <li className="menuSubSubMenu">
              <a href="/Software/Listar"> Listar </a>
            </li>
          </ul>
        </li>
        <li className="menuSubMenu">
          <p> Chamados </p>
        </li>
        <li className="menuSubMenu">
          <p> Imagens </p>
        </li>
        <li className="menuSubMenu">
          <p> Usuário </p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
