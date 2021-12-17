import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import CategorizedProducts from './../Shared/CategorizedProducts/CategorizedProducts'

const SearchResult = () => {
    const { state } = useLocation()
    console.log('searchProducts', state)
    return (
        <div>
            <Header></Header>
            <CategorizedProducts products={state}>
                <h4>Search Result</h4>
            </CategorizedProducts>
            <Footer></Footer>
        </div>
    );
};

export default SearchResult;