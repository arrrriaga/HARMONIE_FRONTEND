import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const FooterComponent = () => {
  return (
    <footer>
      <Container className="text-center py-3">
        <Row className="py-3">
          <Col>
            <Link>
              <i class="fa-2x fa-brands fa-facebook"></i>
            </Link>
          </Col>
          <Col>
            <Link>
              <i class="fa-2x fa-brands fa-instagram"></i>
            </Link>
          </Col>
          <Col>
            <Link>
              <i class="fa-2x fa-brands fa-twitter"></i>
            </Link>
          </Col>
          <Col>
            <Link>
              <i class="fa-2x fa-brands fa-tiktok"></i>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>Copyright &copy; TLALLI</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
