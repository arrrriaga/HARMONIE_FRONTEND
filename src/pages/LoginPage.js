import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginSignUp } from "../services";
import Loader from "../components/Loader";
import { UserContext } from "../context/User.context";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const serviceType = "login";
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { saveTipo, saveToken, saveUserId } = useContext(UserContext);

  const onSubmited = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { tipo, token, userId, error } = await loginSignUp(serviceType, data);

    if (error) {
      setErrorMessage(error);
    } else {
      saveToken(token);
      saveUserId(userId);
      saveTipo(tipo);
      event.target.reset();
    }
    setIsLoading(false);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Row className="d-flex justify-content-center mt-3">
        <Col md={6}>
          <Form onSubmit={onSubmited}>
            <Row className="text-center">
              <Form.Group className="mb-3" controlId="correo">
                <Form.Label>
                  <h3>Correo</h3>
                </Form.Label>
                <Form.Control type="text" placeholder="Correo" name="correo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>
                  <h3>Contraseña</h3>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </Form.Group>
              <label style={{ color: "red" }}>{errorMessage}</label>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-3">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Col>
            </Row>
            <Row className="text-center">
              <br />
              <p>
                ¿Aún no tienes una cuenta? <Link to="/register">Sign up</Link>
              </p>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
