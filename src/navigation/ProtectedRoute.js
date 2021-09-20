import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoutes({ isAuthenticated, component: Component, ...rest }) {
    return (
        <Route 
            {...rest}
            render={(props) => {
                if(isAuthenticated)
                    return <Component />

                if(!isAuthenticated || isAuthenticated === false)
                    return (<Redirect to={{ pathname: '/', state: { from: props.location } }} />);
            }}        
        />
    )
}

export default ProtectedRoutes;