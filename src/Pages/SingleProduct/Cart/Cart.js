import React from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

const Cart = () => {
    return (
        <Form>
            <InputGroup className="mb-2">
                <FormControl type="number" id="inlineFormInputGroup" defaultValue="1" min="1" />
                <InputGroup.Text className="bg-light">
                    <Button className="bg-light text-dark border-0"> Add to cart</Button>
                </InputGroup.Text>
            </InputGroup>
        </Form>
    );
};

export default Cart;