import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './AutoSlideCarousel.css'; 

const AutoSlideCarousel = ({ items, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [items, interval]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className='carousel-container'>
      {items.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.altText}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AutoSlideCarousel;
