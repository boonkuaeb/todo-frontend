import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('access_token') ?
                <Component {...props}/> :
                <Redirect to="/sign-in"/>
        )}/>
    );
};

export default PrivateRoute;
