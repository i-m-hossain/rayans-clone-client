import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from './Product/Product';


const ProductsCollection = () => {
    const [products] = useProducts([])
    return (
        <div>
            <Container>
                <h2 className="text-start">Collections</h2>
                <hr className="border border-2 border-danger" />
                {
                    products.length > 0
                        ?
                        <Row>
                            {
                                products.slice(0, 12).map(product => <Product product={product} key={product._id} />)
                            }
                        </Row>
                        :
                        <Spinner animation="border" role="status" variant="danger">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                }

            </Container>
        </div>
    );
};

export default ProductsCollection;