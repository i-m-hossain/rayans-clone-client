import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductImage from '../ProductImage/ProductImage';
import ProductDescription from '../ProductDescription/ProductDescription';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${productId}`)
            .then(res => setProduct(res.data))
    }, [productId])
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <ProductImage image={product.image}></ProductImage>
                    </Col>
                    <Col md={6} className="my-2">
                        <ProductDescription product={product}></ProductDescription>
                        <Cart></Cart>
                        <Review></Review>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;