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
        setIsLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('login success')

            }).catch((error) => {
                console.log(error.message)

            })
            .finally(() => setIsLoading(false));
    }
    /* *
    * observe user
    */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
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

            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }
    return {
        loginWithGoogle,
        logOut,
        user,
        isLoading,

    }

}
export default useFirebase;