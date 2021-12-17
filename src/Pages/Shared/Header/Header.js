import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Logo, } from '../../../StyledComponents/Logo';
import useProducts from '../../../hooks/useProducts';

const Header = () => {
    const { user, logOut } = useAuth()
    const [searchText, setSearchText] = useState('')
    const [searchProducts, setSearchProduct] = useState('')
    const [products, setProducts] = useProducts()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const searchProducts = products?.filter(pd => pd.title.toLowerCase().includes(searchText))
        setSearchProduct(searchProducts)
        navigate('/searchResult', { state: searchProducts })
    }
    return (
        <Navbar style={{ backgroundColor: "var(--bgMain)" }} expand="lg" variant="dark" className="py-3">
            <Container fluid>
                <Logo >
                    <Navbar.Brand as={Link} to="/" className="text-dark">Ryans Clone </Navbar.Brand>
                </Logo>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Container >
                    <Form className="d-flex w-75 mx-auto p-2" onSubmit={handleSubmit}>
                        <InputGroup>
                            <FormControl
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onBlur={(e) => setSearchText(e.target.value)}
                            />
                            <Button id="button-addon2" type="submit">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Container>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav
                        className="ms-auto my-2 pb-2 my-lg-0"
                    >

                        <Nav.Link as={Link} to="/explore" className="text-white">Explore</Nav.Link>
                        {
                            !user.email && <Nav.Link as={Link} to="/Login" className="text-white">Login</Nav.Link>
                        }
                        {
                            user.email && <NavDropdown title="Account" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/dashboard/welcome">Dashboard</NavDropdown.Item>
                                <NavDropdown.Item onClick={logOut} >Logout</NavDropdown.Item>

                            </NavDropdown>
                        }
                        <Nav.Link href="#action1" className="text-white">Cart</Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;