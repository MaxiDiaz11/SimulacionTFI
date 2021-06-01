import React, { Fragment, useState } from "react";
import Titulo from "./Titulo";
import reloj from "./img/simulador/reloj.jpg";
import simulador from "./img/simulador/simulador.PNG";
import lecheImg from "./img/simulador/leche.jpg";
import bacteriaImg from "./img/simulador/bacterias.jpg";
import axios from 'axios';

const Simulador = () => {

  const [tiempo, obtenerTiempo] = useState(0)
  const [temperatura, obtenerTemperatura] = useState(0)
  const [leche, obtenerLeche] = useState(0)
  const [bacteria, obtenerBacteria] = useState("")
  const [consistencia, obtenerConsistencia] = useState("")
  const [perdida, obtenerPerdida] = useState(0)
  const [gananciaTotales, obtenerGananciaTotales] = useState(0)
  const [perdidasTotales, obtenerPerdidasTotales] = useState(0)
  const [frascosTotales, obtenerFrascosTotales] = useState(0)
  const [aumentarEmpleados, aumentarCantEmpleados] = useState("")

  const getPoisson = (a) => {
    const url = `PseudoAleatoreos/Poisson?a=${a}`;
    const resultado = axios.get(url);
    return resultado
  }
  const getRamdomNumber = (a, n, c, m) => {
    const url = `PseudoAleatoreos/GetRandomNumber?a=${a}&n=${n}&c=${c}&m=${m}`
    const resultado = axios.get(url);
    return resultado
  }
  const getNormal = (media, desvio) => {
    const url = `PseudoAleatoreos/Normal?media=${media}&devio=${desvio}`
    const resultado = axios.get(url);
    return resultado
  }
  const getUniforme = (a, b, entero, u) => {
    const url = `PseudoAleatoreos/Uniforme?a=${a}&b=${b}&isInt=${entero}&u=${u}`
    const resultado = axios.get(url);
    return resultado
  }

  // useEffect(() => {
  //   getPoisson();
  //   getRamdomNumber();
  //   getNormal();
  //   getUniforme();
  // }, [])

  const simular = () => {
    let dias = 0, mes = 0, posiblesPerdidas = 0, contrata = "", frascosVendidos = 0, frascosTotales = 0, perdidasTotales = 0, ganancias = 0, consistencia = "", tipoLeche = "", bacteria = "";
    while (mes < 6) {
      let dia = getPoisson(7);
      dias += dia;
      let nroAleatorio = getRamdomNumber(3);
      let litros = getUniforme(50, 80, true, nroAleatorio);
      nroAleatorio = getRamdomNumber(10);
      if (nroAleatorio <= 30) {
        tipoLeche = `Leche pasteurizada - ${litros} L`
      } else {
        tipoLeche = `Leche no pasteurizada - ${litros} L`
      }

      obtenerLeche(tipoLeche);

      nroAleatorio = getRamdomNumber(2);
      if (nroAleatorio <= 60) {
        bacteria = "Lactobacillus Bulgaricus"
      } else {
        bacteria = "Streptococcus Thermophilus"
      }
      obtenerBacteria(bacteria);
      let temperatura = getNormal(45, 5);
      obtenerTemperatura(temperatura);
      nroAleatorio = getRamdomNumber(5);
      let horaIncubacion = getUniforme(4, 6, true, nroAleatorio);
      obtenerTiempo(horaIncubacion)
      nroAleatorio = getRamdomNumber(1);
      if (nroAleatorio <= 80) {
        consistencia = "Alcanzo la consistencia deseada";
        obtenerPerdida(0)
      } else {
        consistencia = "No se alcanzo la consistencia deseada";
        posiblesPerdidas = 150 * litros;
        perdidasTotales += posiblesPerdidas;
        obtenerPerdida(posiblesPerdidas)
      }
      obtenerConsistencia(consistencia)
      if (dias > 30) {
        nroAleatorio = getRamdomNumber(6);
        frascosVendidos = getUniforme(150, 200, true, nroAleatorio);
        frascosTotales += frascosVendidos;
        mes++;
        dias -= 30;
        ganancias = frascosVendidos * 280;
      }
      obtenerGananciaTotales(ganancias)
      obtenerPerdidasTotales(perdidasTotales)
    }
    obtenerFrascosTotales(frascosTotales)
      (ganancias > (2 * perdidasTotales)) ? contrata = "Conviene contratar otro empleado." : contrata = "No onviene contratar otro empleado."
    aumentarCantEmpleados(contrata);
  }

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
                  value={tiempo}
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
                    value={temperatura}
                  ></input>
                </div>
              </div>
              <div className="row my-4 d-flex justify-content-center text-center">
                <div className="col">
                  <img src={lecheImg} alt="leche" className="w-50 mb-2" />
                  <input
                    type="text"
                    className="form-control w-100 my-1"
                    placeholder="Leche"
                    disabled
                    value={leche}
                  ></input>
                </div>
                <div className="col">
                  <img src={bacteriaImg} alt="bacteria" className="w-50 mb-2" />
                  <input
                    type="text"
                    className="form-control w-100 my-1"
                    placeholder="Bacteria"
                    disabled
                    value={bacteria}
                  ></input>
                </div>
                <div className="container border border-2 p-3 mt-3">
                  <p>Consistencia obtenida</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    disabled
                    value={consistencia}
                  ></input>
                  <p className="mt-2">Posibles perdidas</p>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder=""
                    disabled
                    value={perdida}
                  ></input>
                </div>
              </div>
              <div className="row mb-2">
                <button type="button" class="btn btn-primary w-100" onClick={simular}>
                  Simular
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container border border-2 p-3">
              <h4 className="text-center my-2">Resultados de la simulacion</h4>
              <p>Ganancia total</p>
              <input
                type="text"
                className="form-control"
                placeholder=""
                disabled
                value={gananciaTotales}
              ></input>
              <p className="mt-2">Perdidas totales</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder=""
                disabled
                value={perdidasTotales}
              ></input>
              <p className="mt-2">Cantidad de frascos vendidos</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder=""
                disabled
                value={frascosTotales}
              ></input>
              <p className="mt-2">Aumentar la cantidad de empleados</p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Si/No"
                disabled
                value={aumentarEmpleados}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Simulador;
