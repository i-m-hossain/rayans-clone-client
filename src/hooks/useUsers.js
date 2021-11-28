import axios from "axios"
import { useEffect, useState } from "react"

const useUsers = (isUserRoleUpdated) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => setUsers(res.data))
    }, [isUserRoleUpdated])
    return [users, setUsers]
}
export default useUsers;