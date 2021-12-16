import React from 'react';
import { Link } from 'react-router-dom';
const categories = [
    "Laptops",
    "Monitors",
    "Tablets"
]
const handleProductMenu = () => {

}
const ProductMenu = () => {
    return (
        <div>
            <ul className='mt-5'>
                <Link to='/explore'>
                    <li className="border-bottom p-4">
                        All products
                    </li>
                </Link>
                {
                    categories.map((cat, index) =>
                        <Link to={`/explore/${cat.toLowerCase()}`}>
                            <li
                                key={index}
                                className="border-bottom p-4"
                                onClick={handleProductMenu}
                            >
                                {cat}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </div>
    );
};

export default ProductMenu;