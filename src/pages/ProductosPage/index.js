import { useEffect, useContext } from "react";
import { ProductContext } from "../../context/Product.context";
import { verProductos } from "../../services";
import { Card, Button, Row } from "react-bootstrap";
import "./style.css";
import { UserContext } from "../../context/User.context";

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
            {tipo === "admin" ? (
              <Button
                onClick={() => {
                  agregarACarrito({
                    nombre: producto.nombre + producto.ml,
                    price: producto.price,
                    _id: producto._id,
                  });
                }}
              >
                Actualizar producto
              </Button>
            ) : (
              <Button
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
