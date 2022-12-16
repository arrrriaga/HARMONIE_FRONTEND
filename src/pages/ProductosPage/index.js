import { useEffect, useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import { verProductos } from "../../services";
import { Card, Button, Row } from "react-bootstrap";
import "./style.css";
import { UserContext } from "../../context/User.context";
import { Link, NavLink } from "react-router-dom";

const ProductosPage = () => {
  const columns = 4;
  const { productos, guardarProductos, agregarACarrito } =
    useContext(ProductContext);

  const { tipo } = useContext(UserContext);

  const getProductos = async () => {
    const { detalles } = await verProductos();
    guardarProductos(detalles);
  };

  useEffect(() => {
    getProductos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      {productos.map((producto, index) => (
        <Card
          style={{ margin: "15px" }}
          key={index}
          className={`col-${12 / columns}`}
        >
          <Card.Img className="imgCard" variant="top" src={producto.img} />
          <Card.Body>
            <Card.Title>
              {producto.nombre} {producto.ml}
            </Card.Title>
            <Card.Text>{producto.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <h5>${producto.price}</h5>
            <NavLink className="btn btn-info" to={`/products/detalles`}>
              Ver mas...
            </NavLink>
            {tipo === "admin" ? (
              <Button
                variant="danger"
                onClick={() => {
                  agregarACarrito({
                    nombre: producto.nombre + producto.ml,
                    price: producto.price,
                    _id: producto._id,
                  });
                }}
              >
                Eliminar producto
              </Button>
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
          </Card.Footer>
        </Card>
      ))}
    </Row>
  );
};

export default ProductosPage;
