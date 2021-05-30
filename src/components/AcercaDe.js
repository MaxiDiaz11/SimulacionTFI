import React, { Fragment } from "react";
import Titulo from "./Titulo";
import { Carousel } from "react-bootstrap";

const AcercaDe = () => {
  return (
    <Fragment>
      <Titulo titulo="Kalimera - Yogur Griego Artesanal"></Titulo>
      <div className="container text-center p-4 border border-2 my-3">
        <Carousel className="my-3">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p className="lead">
          Kalimera es un yogur griego elaborado de manera Artesanal, sin el
          agregado de azúcares, conservantes ni espesantes. Su textura cremosa y
          su sabor Natural te permiten combinarlo de mil formas tanto dulces
          como saladas y usarlo también para cocinar! 😋 No dejes de probarlo!
        </p>
      </div>
    </Fragment>
  );
};

export default AcercaDe;
