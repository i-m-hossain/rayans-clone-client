import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slider1 from '../../../assignment13-asset/slider/16december.jpg'
import slider2 from '../../../assignment13-asset/slider/Asus.jpg'
import slider3 from '../../../assignment13-asset/slider/Barishalhome.jpg'
const CarouselSlider = () => {
    return (
        <Container className="py-3  w-100">
            <div className="d-flex justify-content-between align-items-center">
                <Carousel>
                    <Carousel.Item as={Link} to="" interval={5000}>
                        <Link to="">
                            <img src="https://i.ibb.co/7bLMsxK/Asus-PRIME-Z690-M-PLUS-web-1635916225.jpg" alt="" style={{ display: "block", width: "100%" }} />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item as={Link} to="" interval={5000}>
                        <Link to="">
                            <img src={slider1} alt="" style={{ display: "block", width: "100%" }} />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item as={Link} to="" interval={5000}>
                        <Link to="">
                            <img src={slider2} alt="" style={{ display: "block", width: "100%" }} />
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item as={Link} to="" interval={5000}>
                        <Link to="">
                            <img src={slider3} alt="" style={{ display: "block", width: "100%" }} />
                        </Link>
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