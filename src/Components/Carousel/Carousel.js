import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
const DarkVariantExample = () => {
    return (
        <div className='container'>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://www.traveltourxp.com/wp-content/uploads/2017/01/Attractions-In-Barbados.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 className="carousel-caption">Attraction of Barbados</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://cdn.thecrazytourist.com/wp-content/uploads/2016/09/Amboseli-National-Park.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4 className="carousel-caption">Amboseli National Park Kenya</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/El-Djem.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 className="carousel-caption">Colosseum in Tunisian Republic</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default DarkVariantExample;