import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Logo } from '../../../StyledComponents/Logo';
import { FaFacebookF } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { AiOutlineGoogle } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "var(--bgMain)", }}>
            <Container className="py-5" >
                <Row>
                    <Col xs={6} md={3} >
                        <div style={{ color: "white" }}>
                            <Logo ><Navbar.Brand href="#" className="text-dark">Ryans Clone</Navbar.Brand></Logo>
                            <div className="d-flex justify-content-center mt-4 ">
                                <h1><FaFacebookF className="rounded me-2 p-2 bg-primary text-light" /></h1>
                                <h1><GrTwitter className="rounded me-2 p-2 bg-info text-light" /></h1>
                                <h1><AiOutlineGoogle className="rounded me-2 p-2 bg-danger text-light" /></h1>
                                <h1><BsInstagram className="rounded me-2 p-2 bg-light text-dark" /></h1>
                            </div>
                        </div>

                    </Col>
                    <Col xs={6} md={3}>
                        <ul className="text-start border-none border-md-start" >
                            <li><Link to="" className="text-light">About Us</Link></li>
                            <li><Link to="" className="text-light">Branches & Pickup Points</Link></li>
                            <li><Link to="" className="text-light">Warranty</Link></li>
                            <li><Link to="" className="text-light">Cookie Policy</Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <ul className="text-start " >
                            <li><Link to="" className="text-light">Order Procedure</Link></li>
                            <li><Link to="" className="text-light"> Return & Refund Policy</Link></li>
                            <li><Link to="" className="text-light">Payment Method</Link></li>
                            <li><Link to="" className="text-light">Terms & Conditions</Link></li>
                            <li><Link to="" className="text-light"> Privacy Policy</Link></li>
                            <li><Link to="" className="text-light"> Offers</Link></li>

                        </ul>
                    </Col>
                    <Col xs={6} md={3}>
                        <ul className="text-start " >
                            <li><Link to="" className="text-light"> Offers</Link></li>
                            <li><Link to="" className="text-light" >Contact Us</Link></li>
                            <li><Link to="" className="text-light"> Head Office</Link></li>
                            <li><Link to="" className="text-light"> Kusholi Bhaban, 4th Floor, 238/1 Begum Rokeya Sharani, Agargaon, Dhaka-1207</Link></li>
                            <li><Link to="" className="text-light"> Email: info @ryansplus.com</Link></li>
                        </ul>
                    </Col>

                </Row>
                <p className="text-light">Developed with Love by Md Imran Hossain &copy;2021 All rights reserved.  </p>
            </Container>
        </div >
    );
};

export default Footer;