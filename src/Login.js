import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'
function Login() {
    const [state, dispatch] = useStateValue()
    const singIn = () =>{
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result.user);
        }).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.santaanita.com/wp-content/uploads/2020/05/facebooklogo.png"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"/> 
            </div>
            <Button type="submit" onClick={singIn} color='primary' variant='contained'>
                Sign In
            </Button>
        </div>
    )
}

export default Login
