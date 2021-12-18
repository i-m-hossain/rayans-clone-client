import { useEffect, useState } from "react";

const useCategoryProducts = (category) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(` https://cryptic-cove-84874.herokuapp.com/productsByCategory?q=${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return { products, setProducts }
}
export default useCategoryProducts;