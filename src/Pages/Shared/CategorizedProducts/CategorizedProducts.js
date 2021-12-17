import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../../Home/ProductsCollection/Product/Product'

const CategorizedProducts = (props) => {
    const { products } = props;
    return (
        <div>
            <Container>
                <h4 className="text-start mt-3">{props.children}</h4>
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
                        <h4>
                            Not found
                        </h4>

                }

            </Container>
        </div>
    );
};

export default CategorizedProducts;