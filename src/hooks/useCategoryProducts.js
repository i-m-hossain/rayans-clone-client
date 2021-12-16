import { useEffect, useState } from "react";

const useCategoryProducts = (category) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/productsByCategory?q=${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return { products, setProducts }
}
export default useCategoryProducts;