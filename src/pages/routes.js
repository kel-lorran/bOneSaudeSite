import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../store/user';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { PROFILE_CUSTOMER_DATA } from '../utils/data/constants';

import PrivateRoute from './PrivateRoute';

import Home from './Home';
// import Single from './Single';
import Login from './Login';
import Signin from './Signin';;


export default function() {
    const storeUser = useSelector(store => store.user);
    const dispatch =  useDispatch();
    const storageProfile = JSON.parse(window.sessionStorage.getItem(PROFILE_CUSTOMER_DATA));
    const dataProfile = storageProfile?.constructor.name === 'Object' ? storageProfile : {};
    const [isLogged, setIsLogged] = useState();

    useEffect(() => dataProfile && dispatch(setUser(dataProfile)), [])

    const updateProfile = (newValue = {}) => {
        window?.sessionStorage.setItem(PROFILE_CUSTOMER_DATA, JSON.stringify(newValue));
        dispatch(setUser(newValue));
    }

    useEffect(() => {
        setIsLogged(!!(storeUser?.email || dataProfile?.email))
    }, [storeUser])

    return (
        <Router>
            <Switch>
                <Route
                    path="/login"
                    children={props => <Login {...props} updateProfile={updateProfile} />}
                />
                <Route
                    path="/signin"
                    children={props => <Signin {...props}  updateProfile={updateProfile} />}
                />
                <PrivateRoute exact path="/" isLogged={isLogged} component={(props) => <Home {...props} />} />
            </Switch>
        </Router>
    )
}
