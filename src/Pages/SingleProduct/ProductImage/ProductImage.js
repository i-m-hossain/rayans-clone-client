import React from 'react';
import { Card } from 'react-bootstrap';

const ProductImage = ({ image }) => {
    return (
        <div>
            <Card className="mt-2">
                <Card.Img variant="top" src={image ? `data:image/jpeg;base64,${image}` : ''} width="100%" />

            </Card>
        </div>
    );
};

export default ProductImage;