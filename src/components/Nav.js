import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User.context";
import "./style.css";
import TLALLI from "../Images/TLALLI.png";
import { clienteRoutes, adminRoutes, publicRoutes } from "../routes";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavComponent = () => {
  const { tipo, token } = useContext(UserContext);
  const expand = "sm";
  const expand2 = "lg";
  return (
    <>
      <Navbar key={expand} variant="dark" expand={expand} className="NAV mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={TLALLI} alt="TLALLI" height={50}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand2}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            style={{ width: "30vw", background: "#c1cdaa" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menú
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-1">
                {(token
                  ? tipo === "admin"
                    ? adminRoutes
                    : clienteRoutes
                  : publicRoutes
                )
                  .filter((route) => route.title)
                  .map((route, index) => (
                    <Nav.Link as={Link} to={route.path} key={index}>
                      {route?.title}
                    </Nav.Link>
                  ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
