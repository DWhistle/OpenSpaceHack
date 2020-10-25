import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import paths from '../paths'

const PrivateRoute = (prop) => {
    const { component: Component, isLoggedIn, ...rest } = prop

    return (
        <Route
            exact
            path={paths.index}
            {...rest}
            component={(props) => {
                return isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: paths.login }} />
                )
            }}
        />
    )
}

export default PrivateRoute
