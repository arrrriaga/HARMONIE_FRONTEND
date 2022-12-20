import { Button, Card, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { verOneProduct } from "../../services/product";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/Product.context";

const VerProductoPage = () => {
  const { producto, setProducto } = useContext(ProductContext);
  const idParams = useParams().id;

  useEffect(() => {
    const obtenerProducto = async () => {
      const { data } = await verOneProduct(idParams);

      setProducto(data.detalles);
      console.log(producto);
    };
    obtenerProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      <h1>Producto</h1>
      <h1>{producto.nombre}</h1>
    </Row>
  );
};

export default VerProductoPage;
