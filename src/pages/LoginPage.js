import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { loginSignUp } from "../services";
import Loader from "../components/Loader";
import { UserContext } from "../context/User.context";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const serviceType = "login";
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { saveToken, saveUserId } = useContext(UserContext);

  const onSubmited = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { token, userId, error } = await loginSignUp(serviceType, data);

    if (error) {
      setErrorMessage(error);
    } else {
      saveToken(token);
      saveUserId(userId);
      event.target.reset();
    }
    setIsLoading(false);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmited}>
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="text" placeholder="Correo" name="correo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>

      <label style={{ color: "red" }}>{errorMessage}</label>
      <br />
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <p>
        You do not have an account? <Link to="/register">Sign up</Link>
      </p>
    </Form>
  );
};

export default LoginPage;
