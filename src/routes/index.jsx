import { Route, Switch } from "react-router-dom";
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
import Register from '../pages/register'

export default function Routes () {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='/register'>
                <Register/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard/>
            </Route>
        </Switch>
    )
}