import React, {Component} from 'react';
import Header from './components/layouts/Header';
import {Route, Switch} from 'react-router-dom';
import Todo from './pages/Todo';
import Auth from './pages/Auth';
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="container">
                    <Switch>
                        <PrivateRoute exact path={"/"} component={Todo}/>
                        <PrivateRoute exact path={"/todo"} component={Todo}/>
                        <PrivateRoute exact path={"/sign-out"} component={SignIn}/>
                        <Route exact path={"/sign-in"} component={SignIn}/>
                        <Route exact path={"/auth"} component={Auth}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
