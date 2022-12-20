import { useContext, useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { actualizarProducto } from "../../services";
import Loader from "../../components/Loader";
import "./style.css";
import { NavLink, useParams } from "react-router-dom";
import { ProductContext } from "../../context/Product.context";

const ActualizarProductoPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const { producto } = useContext(ProductContext);
  const productID = useParams().id;

  console.log(producto);
  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    await actualizarProducto(productID, productData);
    setIsLoading(false);
    setImageSrc("");
    alert("Producto actualizado, puede tardar un poco en visualizar el cambio");
  };

  const imageChanged = (event) => setImageSrc(event.target.value);
  useEffect(() => {
    setImageSrc(producto.img);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmited}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          defaultValue={producto.nombre}
          type="text"
          placeholder="Ingresa el nombre"
          name="nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ml">
        <Form.Label>Capacidad</Form.Label>
        <Form.Control
          defaultValue={producto.ml}
          type="text"
          placeholder="Ingresa la cantidad neta de producto"
          name="ml"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripcción</Form.Label>
        <Form.Control
          defaultValue={producto.description}
          type="text"
          placeholder="Ingresa la descripción del producto"
          name="description"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          defaultValue={producto.img}
          type="text"
          placeholder="Ingresa la url de la imagen"
          name="img"
          onChange={imageChanged}
        />
      </Form.Group>

      {imageSrc !== "" && (
        <Image
          className="imgCard"
          src={imageSrc}
          alt="Error, imagen no soportada."
          thumbnail
        />
      )}

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          defaultValue={producto.price}
          type="number"
          placeholder="Ingresa el precio"
          name="price"
        />
      </Form.Group>
      <label style={{ color: "red" }}>{errorMessage}</label>
      <br />

      <Button variant="primary" type="submit">
        Guardar Producto actualizado
      </Button>
      <NavLink
        className="btn btn-secondary"
        to={`/products/detalles/${producto._id}`}
        type="submit"
      >
        Regresar
      </NavLink>
    </Form>
  );
};

export default ActualizarProductoPage;
