import React from 'react';
import useProducts from '../../../hooks/useProducts';
import CategorizedProducts from '../../Shared/CategorizedProducts/CategorizedProducts';

const AllProducts = () => {
    const [products] = useProducts([])
    return (
        <div>
            <CategorizedProducts
                products={products}
            >
                All Products
            </CategorizedProducts>
        </div>
    );
};

export default AllProducts;