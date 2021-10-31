import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';
const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home' ;

    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri) ;
        })
    }

    
    return (
        <div>
            <h1>Please Login</h1>
            <Button onClick={handleGoogleLogin} style={{marginBottom:'300px'}} variant="warning">Google Sign in</Button>
        </div>
    );
};

export default Login;