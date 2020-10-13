import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import OrphanagesMapPage from './pages/OrphanagersMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/app" component={OrphanagesMapPage} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;