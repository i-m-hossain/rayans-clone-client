import axios from "axios"
import { useEffect, useState } from "react"

const useProducts = (isProductAdded = true) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://cryptic-cove-84874.herokuapp.com/products')
            .then(res => setProducts(res.data))
    }, [isProductAdded])

    return [products, setProducts];
}
export default useProducts;
