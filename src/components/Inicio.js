import React, { Fragment } from "react";
import Titulo from "./Titulo";
import styled from "@emotion/styled";
import logo from "./img/facultad/logo.jpg";

const Inicio = () => {
  const Lista = styled.li`
    list-style: none;
    font-size: 20px;
  `;

  const Imagen = styled.img`
    width: 300px;
    height: 300px;
  `;

  return (
    <Fragment>
      <Titulo titulo="SIMULACION 2021" />
      <div className="container text-center border border-2 p-4 my-3 mb-5">
        <h3>TRABAJO DE CAMPO</h3>
        <div className="container my-4">
          <Imagen src={logo} alt="logo" />
        </div>
        <h4>
          “Simulación de consistencia y pérdidas ocasionadas en la producción de
          yogur”
        </h4>
        <ul>
          <Lista>Diaz, Daniel Maximiliano</Lista>
          <Lista>Guzman, Facundo Ismael</Lista>
          <Lista>Soria, Juan Pablo</Lista>
          <Lista>Carmena, Patricia</Lista>
        </ul>
        <h5>
          Docente de Teoría: Ing. Teri, María Eugenia <br></br>
          Docente de Práctica: Ing. Paredi, Mario
        </h5>
      </div>
    </Fragment>
  );
};

export default Inicio;
