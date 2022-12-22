import React from "react";
import { Col, Row } from "react-bootstrap";
import plantas from "../Images/plantas.jpeg";
import TLALLI_LG from "../Images/TLALLI_LG.png";
import { NavLink } from "react-router-dom";
const MainComponente = () => {
  return (
    <Row
      style={{
        margin: 0,
        backgroundImage: `url(${plantas})`,
        objectFit: "fill",
      }}
    >
      <Col style={{ background: "#c1cdaa", margin: "5%" }}>
        <Row className="d-flex justify-content-center mt-3">
          <img
            src={TLALLI_LG}
            alt="Logo"
            style={{ minWidth: "30px", maxWidth: "200px" }}
          />
        </Row>
        <Row className="text-center">
          <h1>Bienvenido a la mejor experiencia para tu piel</h1>
          <h5>
            Haz click en el siguiente botón para conocer nuestros productos
          </h5>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={8} className="d-flex justify-content-center mb-2">
            <NavLink className="btn btn-outline-primary" to={`/login`}>
              Conoce TLALLI
            </NavLink>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainComponente;
