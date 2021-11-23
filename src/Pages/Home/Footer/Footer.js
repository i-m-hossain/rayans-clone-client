import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Logo } from '../../../StyledComponents/Logo';

const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={5}>
                        <div>
                            <Logo><Navbar.Brand href="#" className="text-dark">Ryans Clone</Navbar.Brand></Logo>
                        </div>
                    </Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                    <Col sm>sm=true</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;