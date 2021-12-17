import React from 'react';
import useCategoryProducts from '../../../hooks/useCategoryProducts';
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