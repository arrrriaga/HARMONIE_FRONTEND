import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User.context";
import "./style.css";
import TLALLI from "../Images/TLALLI.png";
import { clienteRoutes, adminRoutes, publicRoutes } from "../routes";

const NavComponent = () => {
  const { tipo, token } = useContext(UserContext);

  return (
    <Navbar className="NAV" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img src={TLALLI} alt="TLALLI" height={50}></img>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
