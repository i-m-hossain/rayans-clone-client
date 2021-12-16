import React from 'react';
import useCategoryProducts from '../../../hooks/useCategoryProducts';
import CategorizedProducts from '../../Shared/CategorizedProducts/CategorizedProducts';

const Laptop = () => {
    const { products } = useCategoryProducts('tablet')
    return (
        <div>
            <CategorizedProducts
                products={products}
            >
                Tablet
            </CategorizedProducts>
        </div>
    );
};

export default Laptop;