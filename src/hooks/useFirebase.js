import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initFirebase from "../Pages/Firebase/firebase.init";
import axios from "axios";
initFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [role, setRole] = useState('user')
    const auth = getAuth();

    /* *  
    * Google Login
    */
    const loginWithGoogle = (location, navigate) => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate(location?.state?.from || '/')
                saveUser(result.user)

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
    * observe user role
    */
    useEffect(() => {
        axios.get(`http://localhost:5000/users/role?email=${user.email}`)
            .then(res => setRole(res?.data?.role))
    }, [user])
    console.log(role)
    /* *
    * Register user with email and password
    */
    const registerWithEmail = (email, password, name, location, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateUsersProfile(name)
                navigate(location?.state?.from || '/')
                setIsLoading(false)
                saveUser(result.user, name)
            })
            .catch(error => console.log(error.message))
    }

    const updateUsersProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => console.log('user profile updated'))
            .catch(error => console.log(error.message))
    }
    // save user to the database while register and google login
    const saveUser = (user, name) => {
        const newUser = {
            displayName: user.displayName || name,
            email: user.email,
        }
        axios.post(`http://localhost:5000/users`, newUser)
            .then(res => console.log(res.data))
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
        role

    }

}
export default useFirebase;