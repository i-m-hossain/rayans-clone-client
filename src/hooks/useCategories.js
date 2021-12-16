import { useEffect, useState } from "react"

const useCategories = (isCategoryAdded) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [isCategoryAdded])
    return { categories, setCategories }
}
export default useCategories;