import React from "react";
import "../css/main.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ci from "../assets/ci.png";
import filmora from "../assets/filmora.png";
import compu from "../assets/compu.png";

const Main = () => {
  const Alumno = {
    nombre: "Facundo Ariel Medrano",
    edad: "22 años",
    facultad: "UTN FRT",
  };

  return (
    <div>
      <img src={compu} alt="" className="iconocompu" />
      <div className="educacion">
        <div className="presentacion">
          <p className="texto">
            Hola! soy {Alumno.nombre},tengo {Alumno.edad}, actualmente estoy
            cursando las Carreras Tecnicatura Universitaria en Programación y
            Tecnicatura Universitaria en Logística en la {Alumno.facultad},
            también soy Técnico en equipos e instalaciones electromecánicas
          </p>
        </div>

        <div className="habilidades">
          <h1>Mis Habilidades:</h1>
          <img src={html} className="icono" alt="" />
          <img src={css} className="icono" alt="" />
          <img src={js} className="icono" alt="" />
          <img src={ci} className="icono" alt="" />
          <img src={filmora} className="icono" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
