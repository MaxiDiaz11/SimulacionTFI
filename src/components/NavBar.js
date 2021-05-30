import React, { useState, Fragment } from 'react';
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import AcercaDe from './AcercaDe';
import Inicio from './Inicio';
import QuienesSomos from './QuienesSomos';
import Simulador from './Simulador';

const NavBar = () => {
    const [inicio, setInicio] = useState(true);
    const [simulador, setSimulador] = useState(false);
    const [acercaDe, setacercaDe] = useState(false);
    const [quienesSomos, setquienesSomos] = useState(false);

    const mostarInicio = () => {
        setInicio(true);
        setSimulador(false);
        setacercaDe(false);
        setquienesSomos(false);
    };
    const mostarSimulador = () => {
        setInicio(false);
        setSimulador(true);
        setacercaDe(false);
        setquienesSomos(false);
    };
    const mostarAcerca = () => {
        setInicio(false);
        setSimulador(false);
        setacercaDe(true);
        setquienesSomos(false);
    };
    const mostarNosotros = () => {
        setInicio(false);
        setSimulador(false);
        setacercaDe(false);
        setquienesSomos(true);
    };
    return (
        <Fragment>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto my-2">
                        <Button variant="primary" onClick={mostarInicio}>
                            Inicio
            </Button>{" "}
                        <Button variant="primary" onClick={mostarSimulador}>
                            Simulador
            </Button>{" "}
                        <Button variant="primary" onClick={mostarAcerca}>
                            Acerca de la empresa
            </Button>{" "}
                        <Button variant="primary" onClick={mostarNosotros}>
                            Quienes Somos
            </Button>{" "}
                    </Nav>
                </Container>
            </Navbar>
            {inicio ? (<Inicio></Inicio>) : null}
            {simulador ? (<Simulador></Simulador>) : null}
            {acercaDe ? (<AcercaDe></AcercaDe>) : null}
            {quienesSomos ? (<QuienesSomos></QuienesSomos>) : null}
        </Fragment>
    );
}

export default NavBar;