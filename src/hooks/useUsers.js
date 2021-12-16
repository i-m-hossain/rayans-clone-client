import axios from "axios"
import { useEffect, useState } from "react"

const useUsers = (isUserRoleUpdated) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://cryptic-cove-84874.herokuapp.com/users')
            .then(res => setUsers(res.data))
    }, [isUserRoleUpdated])
    return [users, setUsers]
}
export default useUsers;