import { Route, Switch } from "react-router-dom";
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
import Register from '../pages/register'
import { useEffect, useState } from "react";

export default function Routes () {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
        if (token) {
            return setAuthenticated(true)
        }
    }, [])
    
    return (
        <Switch>
            <Route exact path='/'>
                <Home authenticated={authenticated}/>
            </Route>
            <Route path='/login'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>
            <Route path='/register'>
                <Register authenticated={authenticated}/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard authenticated={authenticated}/>
            </Route>
        </Switch>
    )
}