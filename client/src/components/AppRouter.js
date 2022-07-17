import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {isAuth && authRoutes.map(({path,Component}) =>
                <Route key={path} component={Component} exact/>
            )}

        </Switch>
    );
};

export default AppRouter;