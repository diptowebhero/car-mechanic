import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {loginWithGoogle} = useAuth()
    return (
        <div>
            <h1>Please Login</h1>
            <Button onClick={loginWithGoogle} variant="warning">Google Sign In</Button>
        </div>
    );
};

export default Login;