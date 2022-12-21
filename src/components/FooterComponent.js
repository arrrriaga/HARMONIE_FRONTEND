import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

const FooterComponent = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; TLALLI</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
