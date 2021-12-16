import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

import ProductsCollection from '../ProductsCollection/ProductsCollection';
import CarouselSlider from '../Slider/CarouselSlider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CarouselSlider></CarouselSlider>
            <ProductsCollection></ProductsCollection>
            <Footer></Footer>
        </div>
    );
};

export default Home;