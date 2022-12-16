import { useEffect } from "react";
import { useState } from "react";
import { getMyData } from "../services";
import Loader from "../components/Loader";
import { Card } from "react-bootstrap";

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
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src={userInfo?.img} style={{ height: "500px" }} />
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
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MyProfileComponent;
