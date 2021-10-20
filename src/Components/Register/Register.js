import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';



const Register = () => {
    const { handleReg, handleEmailChange, handlePassChange, error, user, handleNameChange } = useFirebase();
    return (
        <div className="container">
            <div onSubmit={handleReg} className="my-5">
                <h1 className="text-color text-center mb-3">Please Register </h1>



                {/* Name field */}
                <div className="row mb-3 text-start">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNameChange} type="text" className="form-control" required placeholder="Your Name" />
                    </div>

                </div>

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


                <Button type="submit" onClick={handleReg} className="btn-color" variant=" mx-3"><i className="fas fa-sign-in-alt" /> Register</Button>
                <h2>{user.email && <h3>{user.displayName}</h3>}</h2>
                <Link to="/login"><p className="text-color text-decoration-none">Already Registered?</p></Link>

            </div>

        </div>
    );
};

export default Register;