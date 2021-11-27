import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = (isProductAdded) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
    }, [isProductAdded])

    return [products, setProducts];
}
export default useProducts;
