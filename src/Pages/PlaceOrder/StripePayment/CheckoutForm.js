import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ product }) => {
    const { price, title, _id } = product
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('https://cryptic-cove-84874.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'applicatIon/json'
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))

    }, [price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            setError('');
            console.log(paymentMethod);
        }

        // payment intent confirming payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: title,
                        email: user.email,
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess("")

        } else {
            setError('');
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent);
            setProcessing(false);

            //save to database
            console.log(paymentIntent.client_secret)
            const order = {
                product_id: _id,
                product_title: title,
                product_price: price,
                user: user.email,
                payment: {
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                    last4: paymentMethod.card.last4,
                    transaction: paymentIntent.client_secret.split('_secret')[0]
                }
            }
            const url = `http://localhost:5000/ordersWithPayment`
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-5">
                <CardElement
                    className="border border-success rounded p-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? <div class="spinner-border" role="status" /> : <button type="submit" className="btn btn-success mt-5 px-5" disabled={!stripe}>
                        Pay ${price}
                    </button>
                }
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};
export default CheckoutForm;

