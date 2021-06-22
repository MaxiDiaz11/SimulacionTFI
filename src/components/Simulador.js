import React, { Fragment, useState } from "react";
import Titulo from "./Titulo";
import reloj from "./img/simulador/reloj.jpg";
import simulador from "./img/simulador/simulador.PNG";
import lecheImg from "./img/simulador/leche.jpg";
import bacteriaImg from "./img/simulador/bacterias.jpg";
import axios from 'axios';

const Simulador = () => {

  const [tiempo,setTiempo] = useState(0)
  const [temperatura,setTemperatura] = useState(0)
  const [leche,setLeche] = useState(0)
  const [bacteria,setBacteria] = useState("")
  const [consistencia,setConsistencia] = useState("")
  const [perdida,setPerdida] = useState(0)
  const [gananciaTotales,setGananciaTotales] = useState(0)
  const [perdidasTotales,setPerdidasTotales] = useState(0)
  const [frascosTotales,setFrascosTotales] = useState(0)
  const [aumentarEmpleados, aumentarCantEmpleados] = useState("")
  const urlBase = "https://localhost:44342/api/"

  const getPoisson = async (a) => {
    const url = urlBase+`PseudoAleatoreos/Poisson?a=${a}`;
    const resultado = await axios(url);
    return resultado.data.number
  }   
  const getRamdomNumber = async (a, n, c, m) => {
    const url = urlBase+`PseudoAleatoreos/GetRandomNumber?a=${a}&n=${n}&c=${c}&m=${m}`
    const resultado =await axios(url);
    return resultado.data.number
  }
  const getNormal = async (media, desvio) => {
    const url = urlBase+`PseudoAleatoreos/Normal?media=${media}&devio=${desvio}`
    const resultado = await axios(url);
    return resultado.data.number
  }
  const getUniforme = async (a, b, entero, u) => {
    const url = urlBase+`PseudoAleatoreos/Uniforme?a=${a}&b=${b}&isInt=${entero}&u=${u}`
    const resultado = await axios(url);
    return resultado.data.number
  }

  const getRandomInt = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const simular = async () => {
    let dias = 0, mes = 0, posiblesPerdidas = 0, contrata = "", frascosVendidos = 0, frascosT = 0, perdidasTotales = 0, ganancias = 0, consistencia = "", tipoLeche = "", bacteria = "";
    while (mes < 6) {
      let dia = await getPoisson(7);
      dias += dia;
      let nroAleatorio = await getRamdomNumber(getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10));
      let litros = await getUniforme(50, 80, true, nroAleatorio);
      nroAleatorio = await getRamdomNumber(getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10));
      if (nroAleatorio <= 0.30) {
        tipoLeche = `Leche pasteurizada - ${litros} L`
      } else {
        tipoLeche = `Leche no pasteurizada - ${litros} L`
      }
      setLeche(tipoLeche);

      nroAleatorio = await getRamdomNumber(getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10));
      if (nroAleatorio <= 0.60) {
        bacteria = "Lactobacillus Bulgaricus"
      } else {
        bacteria = "Streptococcus Thermophilus"
      }
     setBacteria(bacteria);
      let temperatura = await getNormal(45, 5);
      setTemperatura(temperatura);
      nroAleatorio = await getRamdomNumber(getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10));
      let horaIncubacion = await getUniforme(4, 6, true, nroAleatorio);
     setTiempo(horaIncubacion)
      nroAleatorio = await getRamdomNumber(getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10));
      if (nroAleatorio <= 0.80) {
        consistencia = "Alcanzo la consistencia deseada";
      setPerdida(0)
      } else {
        consistencia = "No se alcanzo la consistencia deseada";
        posiblesPerdidas = 150 * litros;
        perdidasTotales += posiblesPerdidas;
      setPerdida(posiblesPerdidas)
      }
    setConsistencia(consistencia)
      if (dias > 30) {
        nroAleatorio = await getRamdomNumber(getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10));
        frascosVendidos = await getUniforme(150, 200, true, nroAleatorio);
        frascosT += frascosVendidos;
        mes++;
        dias -= 30;
        ganancias = frascosVendidos * 280;
      }
    setGananciaTotales(ganancias)
    setPerdidasTotales(perdidasTotales)
    setFrascosTotales(frascosT)
    }
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
                  <p className="mt-2">Perdidas</p>
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
                <button type="button" className="btn btn-primary w-100" onClick={simular}>
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
