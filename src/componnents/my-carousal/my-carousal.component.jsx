import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './my-carousal.style.css';
import ScrollDown from '../scroll-down/scroll-down.component';

const MyCarousal = () => {
  return(
    <div id= "home">
        <Carousel  controls={false} indicators interval={2500} pauseOnHover={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
          </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
            />
          </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
          <ScrollDown />
    </div>
  );
}

export default MyCarousal