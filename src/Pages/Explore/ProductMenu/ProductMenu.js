import React from 'react';
import { Link } from 'react-router-dom';
import useCategories from '../../../hooks/useCategories';

const ProductMenu = () => {
    const { categories } = useCategories()
    return (
        <div>
            <ul className='mt-5'>
                <Link to='/explore'>
                    <li className="border-bottom p-4 text-start">
                        All products
                    </li>
                </Link>
                {
                    categories.map((cat, index) =>
                        <Link to={`/explore/${cat.cat_name}`}>
                            <li
                                key={index}
                                className="border-bottom p-4"
                            >
                                <p className='text-start'>{cat.cat_name}</p>
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    );
};

export default ProductMenu;