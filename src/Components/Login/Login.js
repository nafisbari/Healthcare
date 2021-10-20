import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";


const Login = () => {
    const { signInUsingGoogle, logOut, error, user, handleLogin, handleEmailChange, handlePassChange, setError, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
                console.log(result.user);
                setError(' ')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const handleSubmit = () => {
        handleLogin()
            .then(result => {
                const user = result.user;
                history.push(redirect_uri);
                console.log(user)
                setError(' ')

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))

    }
    return (
        <div className="container">
            <div className="my-5">
                <h1 className="text-color text-center mb-3">Please Login </h1>

                {/* Email field */}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label text-color text-start">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="Email" />
                    </div>
                </div>

                {/* Password Field */}
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-color text-start">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePassChange} type="password" className="form-control" id="inputPassword3" required placeholder="Password" />
                    </div>
                </div>


                <div className="row mb-3">
                    <h4 className="text-danger text-center fw-bold">{error}</h4>
                </div>

                <div className="text-color">
                    {
                        user.email && <h2>Welcome {user.email}</h2>
                    }
                </div>

                <Button type="submit" onClick={handleSubmit} className="btn-color" variant=" mx-3"><i className="fas fa-sign-in-alt" /> Login</Button>



                <Button type="submit" onClick={handleGoogleLogin} className="btn-color" variant=" mx-3"><i className="fas fa-sign-in-alt" /> Google Sign In</Button>
                {user.email && <Button onClick={logOut} className="btn-color" variant=" mx-3">Logout <i className="fas fa-sign-in-alt" /></Button>}


                <br />
                <br />

                <Link to="/register"><p className="text-color text-decoration-none">Not Registered?</p></Link>


            </div>


        </div>

    );
};

export default Login;