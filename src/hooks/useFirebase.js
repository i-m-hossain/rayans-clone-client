import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initFirebase from "../Pages/Firebase/firebase.init";
import { useNavigate } from "react-router";
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

    /* *
    * Register user with email and password
    */
    const registerWithEmail = (email, password, name, location, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                navigate(location?.state?.from || '/')
                setIsLoading(false)
            })
            .catch(error => console.log(error.message))
    }

    /* *
    * Sign in with email and password
    */
    const loginWithEmail = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                navigate(location?.state?.from || '/')
                setIsLoading(false)
            })
            .catch(error => console.log(error.message));
    }
    /* * 
     * Logout
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
        registerWithEmail,
        loginWithEmail,
        loginWithGoogle,
        logOut,
        user,
        isLoading,

    }

}
export default useFirebase;