import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import PaymentPage from './PaymentPage/PaymentPage';

const PlaceOrder = () => {
    return (
        <>
            <Header></Header>
            <PaymentPage></PaymentPage>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;