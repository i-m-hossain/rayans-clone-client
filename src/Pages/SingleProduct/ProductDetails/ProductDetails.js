import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import ProductDescription from '../ProductDescription/ProductDescription';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
const ProductDetails = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`https://cryptic-cove-84874.herokuapp.com/products/${productId}`)
            .then(res => setProduct(res.data))
    }, [productId])
    return (
        <div>
            <Container >
                <Row className="mb-2">
                    <Col md={6}>
                        <ProductImage image={product.image}></ProductImage>
                    </Col>
                    <Col md={6} className="my-2">
                        <ProductDescription product={product} ></ProductDescription>
                        <Cart></Cart>
                        <div className="p-2 bg-warning my-2 border rounded">
                            <Link to={`/placeOrder/${product._id}`}>PlaceOrder</Link>
                        </div>
                        <Review></Review>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetails;