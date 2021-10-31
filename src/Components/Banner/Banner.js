import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../src/images/banner1.jpg' ; 
import banner2 from '../../../src/images/banner2.jpg' ; 
import banner3 from '../../../src/images/banner3.jpg' ; 

const Banner = () => {
    return (
        <>
          <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-75"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption>
                 
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption>
                 
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  
        </ >
    );
};

export default Banner;