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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselIMG d-block w-100"
          src={skin4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cuarta slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarruselComponente;
