import { Route, Switch } from "react-router-dom";
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
import Register from '../pages/register'
import { useEffect, useState } from "react";

export default function Routes () {
    const [authenticated, setAuthenticated] = useState(false);
    const [userData, setUserData] = useState('')

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('@KenzieHub:data'))
        setUserData(data)
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))
        if (token) {
            return setAuthenticated(true)
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('@KenzieHub:data', JSON.stringify(userData))
    }, [userData])
    
    return (
        <Switch>
            <Route exact path='/'>
                <Home authenticated={authenticated}/>
            </Route>
            <Route path='/login'>
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} setUserData={setUserData} />
            </Route>
            <Route path='/register'>
                <Register authenticated={authenticated}/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard authenticated={authenticated} userData={userData}/>
            </Route>
        </Switch>
    )
}