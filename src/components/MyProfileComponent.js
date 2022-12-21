import { useEffect } from "react";
import { useState } from "react";
import { getMyData } from "../services";
import Loader from "../components/Loader";
import { Card, Col, Container, Row } from "react-bootstrap";

const MyProfileComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    setIsLoading(true);
    const { detalles, error } = await getMyData();
    if (!error) {
      setUserInfo(detalles);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Row className="d-flex justify-content-center my-3">
      <Col className="d-flex justify-content-center">
        <Card style={{ width: "45rem" }}>
          <Row className="-d-flex justify-content-center">
            <Col md={4} className="d-flex justify-content-center">
              <Card.Img
                className="my-3"
                variant="top"
                src={userInfo?.img}
                style={{ height: "200px", width: "200px" }}
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>
                  {userInfo?.nombre} {userInfo?.apellido}
                </Card.Title>
                <Card.Text>
                  Tipo de usuario: {userInfo?.tipo}
                  <br />
                  Edad: {userInfo?.edad}
                  <br />
                  Correo: {userInfo?.correo}
                  <Card.Footer>
                    Ciudad: {userInfo?.ciudad}
                    <br />
                    Dirección: {userInfo?.adress}
                    <br />
                    CP: {userInfo?.CP}
                  </Card.Footer>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default MyProfileComponent;
