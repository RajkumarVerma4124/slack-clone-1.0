import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                }); 
            })
            .catch((error) => alert(error.message));
        };

    return (
        <div className = "login">
            <div className="login_container">
                <img src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
                alt=""/>
                <h1>Sign Into Raj Programming Group</h1>
                <p>Programmer.slack.com</p>
                <Button onClick={signIn}>Sign In With Google </Button>
            </div>
            
        </div>
    )
}

export default Login
