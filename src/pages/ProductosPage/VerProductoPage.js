import { Button, Card, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import "./style.css";
import { verOneProduct } from "../../services/product";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import { UserContext } from "../../context/User.context";

const VerProductoPage = () => {
  const { agregarACarrito } = useContext(ProductContext);
  const { tipo } = useContext(UserContext);
  const { producto, setProducto } = useContext(ProductContext);
  const idParams = useParams().id;

  useEffect(() => {
    const obtenerProducto = async () => {
      const { data } = await verOneProduct(idParams);

      setProducto(data.detalles);
    };
    obtenerProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="imgCard" variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>
            {producto.nombre} {producto.ml}
          </Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <h6>ID:{producto._id}</h6>
          <Card.Footer>
            <h5>${producto.price}</h5>
            {tipo === "admin" ? (
              <NavLink
                className="btn btn-info"
                to={`/products/actualizar/${producto._id}`}
              >
                Actualizar producto
              </NavLink>
            ) : (
              <Button
                variant="success"
                onClick={() => {
                  agregarACarrito({
                    nombre: producto.nombre + producto.ml,
                    price: producto.price,
                    _id: producto._id,
                  });
                }}
              >
                Add to cart
              </Button>
            )}
            <NavLink
              className="btn btn-secondary"
              to={`/products`}
              type="submit"
            >
              Regresar
            </NavLink>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default VerProductoPage;
