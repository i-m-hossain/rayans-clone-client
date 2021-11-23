import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';


const ProductsCollection = () => {
    const [products] = useProducts([])
    return (
        <div>
            <Container>
                <h2 className="text-start">Collections</h2>
                <hr className="border border-2 border-danger" />
                <Row>
                    {
                        products.map(product => <Product product={product} key={product._id} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ProductsCollection;