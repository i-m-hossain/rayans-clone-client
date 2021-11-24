import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Logo } from '../../../StyledComponents/Logo';

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: "var(--bgMain)" }} expand="lg" variant="dark" className="py-3">
            <Container fluid>
                <Logo >
                    <Navbar.Brand as={Link} to="/" className="text-dark">Ryans Clone </Navbar.Brand>
                </Logo>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Container >
                    <Form className="d-flex w-75 mx-auto p-2">
                        <InputGroup>
                            <FormControl
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Container>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav
                        className="ms-auto my-2 pb-2 my-lg-0"
                    >
                        <NavDropdown title="All Products" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Brands</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Laptos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Monitor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/addProduct">Add Product</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="#action1" className="text-white">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/Login" className="text-white">Login</Nav.Link>
                        <Nav.Link as={Link} to="/" className="text-white">Account</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;