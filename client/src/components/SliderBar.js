import React from 'react';
import {Button, Carousel, Container} from "react-bootstrap";
import bD from '../assets/bg.png'
const SliderBar = () => {
    return (
        <Container >
            <Carousel slide={false} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bD}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Blue-Jay Fasteners!</h1>
                        <p>Всі права захищені.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bD}
                        alt="Second slide"
                    />

                    <Carousel.Caption style={{margin:150}}>
                        <h4 >SPECIAL OFFER</h4>
                        <h3>GET UP TO 50% OFF</h3>
                        <Button variant="primary">Check if Out</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bD}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default SliderBar;