import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Review = () => {
    return (
        <Container className="border border-1 rounded px-3 py-2" >
            <h3 className="text-start">Review</h3>
            <Form >
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <p className="text-start">Your rating</p>
                    <Form.Control type="number" min="1" max="5" defaultValue="1" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" className="text-start bg-success">Review</Button>
            </Form>
        </Container>

    );
};

export default Review;