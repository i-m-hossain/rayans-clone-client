import { useEffect, useState } from "react"

const useCategories = (isCategoryAdded = false) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(' https://cryptic-cove-84874.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [isCategoryAdded])
    return { categories, setCategories }
}
export default useCategories;