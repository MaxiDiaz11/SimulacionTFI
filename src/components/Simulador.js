import React, { Fragment } from "react";
import Titulo from "./Titulo";
import reloj from "./img/simulador/reloj.jpg";
import simulador from "./img/simulador/simulador.PNG";
import leche from "./img/simulador/leche.jpg";
import tipoYogur from "./img/simulador/tipoYogur.jpg";
import bacteria from "./img/simulador/bacterias.jpg";

const Simulador = () => {
  return (
    <Fragment>
      <Titulo titulo="Simulador"></Titulo>
      <div className="container p-4 border border-2 mb-3">
        <div className="row">
          <div className="col-md-6 mb-3 border border-2 p-1">
            <div className="container">
              <div className="row d-flex justify-content-center align-content-center w-25 h-25">
                <img src={reloj} alt="reloj" className="w-75 my-1" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tiempo"
                  disabled
                ></input>
              </div>
              <div className="row">
                <div className="d-flex flex-column align-items-center">
                  <img src={simulador} alt="simulador" className="w-50" />
                  <input
                    type="text"
                    className="form-control w-50 my-1"
                    placeholder="Temperatura"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="row my-4 d-flex justify-content-center text-center">
                <div className="col">
                  <img src={leche} alt="leche" className="w-50 mb-2" />
                  <input
                    type="text"
                    className="form-control w-100 my-1"
                    placeholder="Leche"
                    disabled
                  ></input>
                </div>
                <div className="col">
                  <img src={tipoYogur} alt="tipoYogur" className="w-50 mb-2" />
                  <input
                    type="text"
                    className="form-control w-100 my-1"
                    placeholder="Tipo de Yogur"
                    disabled
                  ></input>
                </div>
                <div className="col">
                  <img src={bacteria} alt="bacteria" className="w-50 mb-2" />
                  <input
                    type="text"
                    className="form-control w-100 my-1"
                    placeholder="Bacteria"
                    disabled
                  ></input>
                </div>
              </div>
              <div className="row mb-2">
                <button type="button" class="btn btn-primary w-100">
                  Simular
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container border border-2 p-3">
              <h4 className="text-center my-2">Resultados de la simulacion</h4>
              <p>Porcentaje de consistencia obtenido</p>
              <input
                type="text"
                className="form-control"
                placeholder=""
                disabled
              ></input>
              <p className="mt-2">Posibles perdidas</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder=""
                disabled
              ></input>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Simulador;
