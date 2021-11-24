import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

import ProductsCollection from '../ProductsCollection/ProductsCollection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <ProductsCollection></ProductsCollection>
            <Footer></Footer>
        </div>
    );
};

export default Home;