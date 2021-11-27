import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';
import DashboardTable from '../Shared/DashboardTable';

const ManageProducts = () => {
    const [isProductAdded, setIsProductAdded] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)

    };
    console.log(show)
    return (
        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <DashboardTable isProductAdded={isProductAdded} handleShow={handleShow}></DashboardTable>
                </Col>
                <AddProduct
                    setIsProductAdded={setIsProductAdded}
                    handleClose={handleClose}
                    show={show} >

                </AddProduct>

            </Row>
        </Container >
    );
};

export default ManageProducts;