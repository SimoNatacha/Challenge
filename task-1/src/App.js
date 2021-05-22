import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import EventPage from './pages/events.page';

const App = () => (

        <Switch>
            <Route exact path="/events" component={EventPage} />
            <Route exact path="/">
                <Redirect to="/events"/>
            </Route>
            
        </Switch>
  
);
export default App;