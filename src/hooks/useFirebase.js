/* import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(' ');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //to handle sign in with google
    const signInUSingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // if user already regostered then it wiill take the toggle value
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    //handle name change for setting the name
    const handleNameChange = e => {
        setName(e.target.value)
    }

    // for handeling email input field typing
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    // for handeling password input value
    const handlePassChange = e => {
        setPass(e.target.value)
    }

    // so that after clicking the reg button the page does not reload
    const handleReg = e => {
        console.log(email, pass);
        e.preventDefault();
    }

    //pass validation using minimum 6 ch. requirement
    if (pass.length < 6) {
        setError("Password Must be at least 6 Character Long")
        return;
    }

    //for creating account/registering user email and pass
    const createNewUser = (email, pass) => {

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);

                setError('');//so that ager error msg gulo muche jay
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    //for setting userName
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    //for logging into already created account
    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');//so that ager error msg gulo muche jay
            })
            .catch(error => {
                setError(error.message)
            })
    }
    isLogin ? processLogin(email, pass) : createNewUser(email, pass);

    //to handle sign out
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    //to handle the users log in or looged out state
    // useEffect(() => {
    //     onAuthStateChanged(auth, user => {
    //         if (user) {
    //             console.log('inside state changed', user);
    //             setUser(user);
    //         }
    //     })
    // }, [auth]);
    return {
        user,
        error,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePassChange,
        handleReg,
        isLogin,
        logout,
        signInUSingGoogle
    }
};

export default useFirebase; */


import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [pass, setPass] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    //google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
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
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

    }
    //login
    const handleLogin = () => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, pass)
            .then(result => (
                console.log(result.user)
            ))
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))


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
        isLoading
    }

}

export default useFirebase;

