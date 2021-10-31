import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    let {user,isLoading} = useAuth();
    if(isLoading){
        return  <Spinner animation="grow" variant="warning" />
    }

    console.log(user);
    return (
         <Route 
         {...rest}
         render={({ location }) => user.email ? children
         : <Redirect 
         to={{
            pathname: "/login",
            state: { from: location }
        }}
         >

         </Redirect> }
         
          >

         </Route>
    );
};

export default PrivateRoute;