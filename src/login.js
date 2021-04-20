import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import {login } from './features/userSlice'
import { auth, provider } from './firebase'
import './login.css'
function Login() {
    const dispatch = useDispatch();
    const signIn= () =>{
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }))
        }).catch(error => alert(error.message)) 
    }
    return (
        <div className='login'>
            <div className="login-container">
                <img src = "https://cdn.vox-cdn.com/thumbor/g_nyLm8AT_WA7a79K-EhRZV0sE0=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg"
                alt = "" />
                <Button variant="contained" color='primary' onClick={signIn} >Login</Button>
            </div>

        </div>
    )
}
export default Login
