import React from 'react';
import { Button } from 'react-bootstrap';

const Intouch = () => {
    return (
        <div>
            <div className="banner-image  my-3 p-5">
                <div className="container justify-content-center align-items-center w-50 mx-auto">
                    <h1 className="text-dark">Stay <span className="text-color">IN TOUCH!</span> </h1>
                    <p><span className="text-color"> Get updates on sales, specials and more</span></p>
                    <input className="form-control" type="text" placeholder="Your Email" />
                    <br />
                    <Button className="btn-color2 " type="submit" variant="dark">Submit</Button>
                </div>
            </div>
        </div >

    );
};

export default Intouch;