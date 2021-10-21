import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <Link to="/"><button className="btn-regular">Go to home</button></Link>
        </div>
    );
};

export default NotFound;