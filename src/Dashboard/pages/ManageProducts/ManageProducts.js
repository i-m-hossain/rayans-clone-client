import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';
import DashboardTable from '../Shared/DashboardTable';

const ManageProducts = () => {
    const [isProductAdded, setIsProductAdded] = useState(false)
    const [openForm, setOpenForm] = React.useState(false)
    const handleOpenForm = () => {
        setOpenForm(!openForm)
    }
    return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <DashboardTable isProductAdded={isProductAdded} handleOpenForm={handleOpenForm}></DashboardTable>
                </Col>
                {
                    openForm && <Col xs={12} md={4}>
                        <AddProduct setIsProductAdded={setIsProductAdded} ></AddProduct>
                    </Col>
                }
            </Row>
        </Container>
    );
};

export default ManageProducts;