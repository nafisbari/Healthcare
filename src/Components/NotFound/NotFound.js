import React from 'react';
import error from './Images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={error} className="w-100" alt="" />
        </div>
    );
};

export default NotFound;