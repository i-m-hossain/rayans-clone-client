import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { image, title, short_des, price } = product;
    return (
        <Col md={3} className="mb-3" >
            <Card className="h-100">
                <Link to={`/products/${product._id}`}><Card.Img variant="top" src={image ? `data:image/jpeg;base64,${image}` : ''} /></Link>
                <Card.Body>
                    <Link to={`/products/${product._id}`}><Card.Title>{title}</Card.Title></Link>
                    <Card.Text>
                        {short_des}
                    </Card.Text>
                    <Card.Text>
                        ${price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: 'var(--bgSecondary)' }}>
                    <big className="text-dark">Buy Now</big>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Product;