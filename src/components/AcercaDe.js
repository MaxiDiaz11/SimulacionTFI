import React, { Fragment } from "react";
import Titulo from "./Titulo";
import { Carousel } from "react-bootstrap";
import styled from "@emotion/styled";
import slide1 from "./img/slides/slide1.jpg";
import slide2 from "./img/slides/slide2.jpg";
import slide3 from "./img/slides/slide3.jpg";

const AcercaDe = () => {
  const Icono = styled.a`
    font-size: 50px;
    margin: 10px;
    text-decoration: none;
  `;
  const Slide = styled.img`
    width: 400px;
    height: 620px;
    transform: scale(1.1);
  `;

  const Descripcion = styled.p`
    font-size: 25px;
  `;


  return (
    <Fragment>
      <Titulo titulo="Kalimera - Yogur Griego Artesanal"></Titulo>
      <div className="container text-center p-4 border border-2 my-3 w-75">
        <Carousel className="my-3 slider-none">
          <Carousel.Item>
            <Slide className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Slide className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <Slide className="d-block w-100" src={slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <Descripcion className="my-3 lead">
          Kalimera es un yogur griego elaborado de manera Artesanal, sin el
          agregado de azúcares, conservantes ni espesantes. Su textura cremosa y
          su sabor Natural te permiten combinarlo de mil formas tanto dulces
          como saladas y usarlo también para cocinar! 😋 No dejes de probarlo!
          <br></br>
          <b>Ubicacion: Carlos Pellegrini 457, San Miguel de Tucumán, Tucumán</b>
          <hr></hr>
        </Descripcion>
        <Icono
          className="bx bxl-facebook-square bx-tada-hover"
          href="https://www.facebook.com/kalimera.yogur.griego"
          target="_blanck"
        ></Icono>
        <Icono
          className="bx bxl-instagram bx-tada-hover"
          href="
        https://www.instagram.com/kalimerayogurgriegoartesanal/"
          target="_blanck"
        ></Icono>
      </div>
    </Fragment>
  );
};

export default AcercaDe;
