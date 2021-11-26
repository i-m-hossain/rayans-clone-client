import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initFirebase from "../Pages/Firebase/firebase.init";
initFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    /* *  
    * Google Login
    */
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('login success')
                setIsLoading(false)
            }).catch((error) => {
                console.log(error.message)
                setIsLoading(true)
            });
    }
    /* *
    * detecting users
    */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                setUser({})
            }
        });
        setIsLoading(false)
    }, [auth])
    console.log(user)
    /* * 
     * Google Logout
     **/
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful
                setUser({})
                setIsLoading(false)
            }).catch((error) => {
                // An error happened.
                setIsLoading(true)
            });
    }
    return {
        loginWithGoogle,
        logOut,
        user,
        isLoading,

    }

}
export default useFirebase;