import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CarouselSlider = () => {
    return (
        <Container className="py-3  w-100">
            <div className="d-flex justify-content-between align-items-center">
                <Carousel>
                    <Carousel.Item as={Link} to="" interval={5000}>
                        <Link to="">
                            <img src="https://i.ibb.co/7bLMsxK/Asus-PRIME-Z690-M-PLUS-web-1635916225.jpg" alt="" style={{ display: "block", width: "100%" }} />
                        </Link>
                        <Carousel.Caption>
                            {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
                <div div className="d-flex flex-column d-none d-md-block" >
                    <div className="pb-3">
                        <Link to="">
                            <img src="https://i.ibb.co/sPLwvbc/Sony-DSC-W800-right-1637389358.jpg" alt="" style={{ display: "block", width: "100%" }} />
                        </Link>
                    </div>

                    <div>
                        <Link to="">
                            <img src="https://i.ibb.co/y5pmznD/Sandisk-1-TB-Extreme-V2-right-sider-1637389483.jpg" alt="" style={{ display: "block", width: "100%" }} />
                        </Link>

                    </div>
                </div >
            </div >
        </Container >
    );
};

export default CarouselSlider;