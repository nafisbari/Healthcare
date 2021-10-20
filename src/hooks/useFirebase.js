import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('')

    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    //handeling name change
    const handleNameChange = e => {
        setName(e.target.value)
    }

    //handeling email
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //handeling password
    const handlePassChange = e => {
        setPass(e.target.value);
    }

    //registration 
    const handleReg = e => {
        e.preventDefault();
        if (pass.length < 6) {
            return;
        }
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                setUser(result.user);
                setUserName();

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })

    }
    //login
    const handleLogin = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)


    }

    // observer of user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(' ')
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser(' ')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    return {
        signInUsingGoogle,
        logOut,
        user,
        error,
        handleReg,
        handleEmailChange,
        handlePassChange,
        handleLogin,
        isLoading,
        handleNameChange,
        name,
        setUser,
        setError,
        setIsLoading,
        setUserName
    }

}


export default useFirebase;

