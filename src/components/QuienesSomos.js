import React, { Fragment } from "react";
import Titulo from "./Titulo";
import { Card } from "react-bootstrap";
import styled from "@emotion/styled";
import img1 from "./img/nosotros/maxi.jpeg";
import img2 from "./img/nosotros/JuanPablo.jpeg";
import img3 from "./img/nosotros/facundo.jpeg";
import img4 from "./img/nosotros/patricia.jpg";


const QuienesSomos = () => {
  const Contenedor = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <Fragment>
      <Titulo titulo="Quienes Somos"></Titulo>
      <Contenedor className=" container text-center p-4 border border-2 my-3">
        <div className="row">
          <div className="col col-md-6 my-3 p-1 d-flex justify-content-center d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Diaz, Daniel Maximiliano</Card.Title>
                <Card.Text>Legajo: 48409</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-md-6 my-3 p-1 d-flex justify-content-center d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Carmena, Patricia</Card.Title>
                <Card.Text>Legajo: 42153</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-md-6 my-3 p-1 d-flex justify-content-center d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Soria, Juan Pablo</Card.Title>
                <Card.Text>Legajo: 48393</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-md-6 my-3 p-1 d-flex justify-content-center d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Guzman, Facundo Ismael</Card.Title>
                <Card.Text>Legajo: 48453</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Contenedor>
    </Fragment>
  );
};

export default QuienesSomos;
