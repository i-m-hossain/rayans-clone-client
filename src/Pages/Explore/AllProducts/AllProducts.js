import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Product from '../../Home/ProductsCollection/Product/Product'

const AllProducts = () => {
    const [products] = useProducts([])
    return (
        <div>
            <Container>
                <h2 className="text-start">All the products</h2>
                <hr className="border border-2 border-danger" />
                {
                    products.length > 0
                        ?
                        <Row>
                            {
                                products.map(product => <Product product={product} key={product._id} />)
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

export default AllProducts;