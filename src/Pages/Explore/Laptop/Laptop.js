import React from 'react';
import useCategoryProducts from '../../../hooks/useCategoryProducts';
import useProducts from '../../../hooks/useProducts';
import CategorizedProducts from '../../Shared/CategorizedProducts/CategorizedProducts';

const Laptop = () => {
    const { products } = useCategoryProducts('laptop')
    return (
        <div>
            <CategorizedProducts
                products={products}
            >
                Laptop
            </CategorizedProducts>
        </div>
    );
};

export default Laptop;