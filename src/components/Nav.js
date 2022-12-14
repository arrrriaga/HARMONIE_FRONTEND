import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/User.context";
import { privateRoutes, publicRoutes } from "../routes";

const NavComponent = () => {
  const { token } = useContext(UserContext);

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">HARMONIE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {(token ? privateRoutes : publicRoutes)
              .filter((route) => route.title)
              .map((route, index) => (
                <Nav.Link as={Link} to={route.path} key={index}>
                  {route.title}
                </Nav.Link>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
