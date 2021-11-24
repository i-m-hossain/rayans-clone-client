import React from 'react';
import { Card } from 'react-bootstrap';

const ProductDescription = ({ product }) => {
    return (
        <Card className="mb-2">
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.rating ? product.rating : ''}
                </Card.Text>
                <Card.Text>
                    {product.short_des}
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default ProductDescription;