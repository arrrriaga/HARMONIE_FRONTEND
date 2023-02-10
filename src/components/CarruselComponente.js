import React, { useState } from "react";
import "../index.css";
import Carousel from "react-bootstrap/Carousel";
import skin1 from "../Images/skin1.jpg";
import skin2 from "../Images/skin2.jpg";
import skin3 from "../Images/skin3.jpg";
import skin4 from "../Images/skin4.jpg";

const CarruselComponente = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="fluid" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hidrata tu piel</h3>
          <h2>Reduce las marcas ocasionadas por el paso del tiempo.</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Conecta con la naturaleza</h3>
          <h2>Tranquila, todos nuestros productos son de origen natural.</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Disfruta al primer contacto</h3>
          <h2>
            Déjate llevar por tus sentidos con tu rutina de cuidado personal.
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nutre tu piel, nutre tu vida</h3>
          <h2>
            Déjate consentir por los productos que nos otorga la naturaleza
          </h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselComponente;
