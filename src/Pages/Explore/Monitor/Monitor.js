import React from 'react';
import useCategoryProducts from '../../../hooks/useCategoryProducts';
import useProducts from '../../../hooks/useProducts';
import CategorizedProducts from '../../Shared/CategorizedProducts/CategorizedProducts';

const Laptop = () => {
    const { products } = useCategoryProducts('monitors')
    return (
        <div>
            <CategorizedProducts
                products={products}
            >
                Monitor
            </CategorizedProducts>
        </div>
    );
};

export default Laptop;