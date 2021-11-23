import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
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