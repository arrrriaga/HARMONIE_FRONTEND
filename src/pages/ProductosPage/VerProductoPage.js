import { Card, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { verOneProduct } from "../../services/product";
import { useParams } from "react-router-dom";

const VerProductoPage = () => {
  const [producto, setProducto] = useState(undefined);
  const idParams = useParams().id;

  useEffect(() => {
    setProducto(verOneProduct(idParams));
    console.log(producto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // <Row>
    //   {
    //     <Card style={{ margin: "15px" }}>
    //       <Card.Img className="imgCard" variant="top" src={producto.img} />
    //       <Card.Body>
    //         <Card.Title>
    //           {producto.nombre} {producto.ml}
    //         </Card.Title>
    //         <Card.Text>{producto.description}</Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <h5>${producto.price}</h5>
    //       </Card.Footer>
    //     </Card>
    //   }
    // </Row>
    <h1>Producto one</h1>
  );
};

export default VerProductoPage;
