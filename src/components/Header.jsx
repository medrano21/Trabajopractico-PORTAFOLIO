// Header.js (Componente hijo)
import React from "react";
import foto from "../assets/morado.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="titulo">
        <h1>Facundo Ariel Medrano</h1>
        <h2>Estudiante de Programacion</h2>
      </div>

      <img src={foto} className="perfil" alt="Tu foto" />
    </div>
  );
};

export default Header;
