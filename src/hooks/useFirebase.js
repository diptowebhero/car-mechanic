import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react"
import initializeAuthentication from "../Page/Login/Firebase/firebase.init"

initializeAuthentication()
const useFirebase = () => {
    const [user, setuser] = useState({});
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setuser(result.user);
            })
            .finally(()=> setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(()=> setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            }
            else {
                setuser({})
            }
            setIsLoading(false)
        })
    }, [])
    return {
        isLoading,
        loginWithGoogle,
        user,
        error,
        logOut
    }
}
export default useFirebase;