import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import CheckoutForm from '../StripePayment/CheckoutForm';
const stripePromise = loadStripe('pk_test_51K0swODBGIM4HMzQUFbeT9QaOefMdi0H3UJx2zZ9UIXCTf57clI8HrmS7HSD7qr27Kq5BdI5bRVbfhp0JcXN5QqO00fiu1U7y4');

const PaymentPage = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${productId}`)
            .then(res => setProduct(res.data))
    }, [productId])
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Please Pay for: {product.title} </h2>
                    <h4>Pay: ${product.price}</h4>
                    {
                        product.price && <Elements stripe={stripePromise}>
                            <CheckoutForm product={product}></CheckoutForm>
                        </Elements>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default PaymentPage;